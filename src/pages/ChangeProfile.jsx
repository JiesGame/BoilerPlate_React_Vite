/* eslint-disable react/no-unescaped-entities */
import { useForm } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';
import * as yup from 'yup';
import { useNavigate, Link } from 'react-router-dom';
import Cookies from 'js-cookie';
import { useAtom } from 'jotai';
import { userAtom } from '../store/atoms';

export const ChangeProfile = () => {
  const schema = yup.object().shape({
    email: yup.string().email("L'adresse mail doit être valide"),
    email_confirmation: yup.string().oneOf([yup.ref("email"), null], "Les adresses mails ne correspondent pas"),
    password: yup.string().matches(/.{5,}/, {excludeEmptyString: true, message: 'Le mot de passe doit faire entre 6 et 20 caractères.',
    }).max(20, "Le mot de passe doit faire entre 6 et 20 caractères."),
    password_confirmation: yup.string().oneOf([yup.ref("password"), null], "Les mots de passe ne correspondent pas"),
    current_password: yup.string().required(),
  });

  const {register, handleSubmit, formState: {errors} } = useForm({
    resolver: yupResolver(schema)
  });
  const navigate = useNavigate();
  const [userInfo, setUserInfo] = useAtom(userAtom)

  const onSubmit = (data) => {
    const dataToUpdate = ({"user":{"email":data.email, "password":data.password, "current_password":data.current_password}});
    const userID = JSON.parse(Cookies.get('userInfo')).id
    console.log(dataToUpdate)
    fetch(`http://127.0.0.1:3000/users/${userID}`, {
      method: "PATCH",
      headers: {
        "Content-Type" : "application/json",
        "Authorization" : `Bearer ${Cookies.get('token')}`
      },
      body: JSON.stringify(dataToUpdate)
    })
    .then(response => {
      if (!response.ok) {
        throw new Error(`HTTP error! Status: ${response.status}`);
      } else {
      navigate('/');
      return response.json();
      }
    })
    .then(data => {
      console.log("Response data:", data);
      Cookies.set('userInfo', JSON.stringify({"id":data.id, "email":data.email}), { expires: 7 })
      setUserInfo({"id":data.id, "email":data.email, "token":Cookies.get('token')})
    })
    .catch(error => {
      console.error("Fetch error:", error);
    });

  }

  return (
    <div className='flex items-center justify-center '>
      <div className="w-[26rem]">
        <form className="bg-white shadow-md rounded px-8 pt-6 pb-8 mb-4" onSubmit={handleSubmit(onSubmit)}>
          <div className="mb-4">
            <h1 className='text-2xl text-center mb-4'>Mettre à jour son profil</h1>
            <label className="block text-gray-700 text-sm font-bold mb-2">
              Nouvelle adresse mail
            </label>
            <input className="bg-gray-200 appearance-none border-2 border-gray-200 rounded w-full py-2 px-4 text-gray-700 leading-tight focus:outline-none focus:bg-white focus:border-purple-500" type="text" placeholder="Email..." {...register('email')} />
            {errors.email?.message && <p className="text-red-500 text-xs">{errors.email?.message}</p>}
          </div>
          <div className="mb-4">
            <label className="block text-gray-700 text-sm font-bold mb-2">
              Confirmation de l'adresse mail
            </label>
            <input className="bg-gray-200 appearance-none border-2 border-gray-200 rounded w-full py-2 px-4 text-gray-700 leading-tight focus:outline-none focus:bg-white focus:border-purple-500" type="text" placeholder="Email..." {...register('email_confirmation')} />
            {errors.email_confirmation?.message && <p className="text-red-500 text-xs">{errors.email_confirmation?.message}</p>}
          </div>
          <div className="mb-4">
            <label className="block text-gray-700 text-sm font-bold mb-2">
              Nouveau mot de passe
            </label>
            <input className="bg-gray-200 appearance-none border-2 border-gray-200 rounded w-full py-2 px-4 text-gray-700 leading-tight focus:outline-none focus:bg-white focus:border-blue-500" type="password" placeholder="Mot de passe..." {...register('password')} />
            {errors.password?.message && <p className="text-red-500 text-xs">{errors.password?.message}</p>}
          </div>
          <div className="mb-4">
            <label className="block text-gray-700 text-sm font-bold mb-2">
              Confirmation du mot de passe
            </label>
            <input className="bg-gray-200 appearance-none border-2 border-gray-200 rounded w-full py-2 px-4 text-gray-700 leading-tight focus:outline-none focus:bg-white focus:border-blue-500" type="password" placeholder="Mot de passe..." {...register('password_confirmation')} />
            {errors.password_confirmation?.message && <p className="text-red-500 text-xs">{errors.password_confirmation?.message}</p>}
          </div>
          <div className="mb-4">
            <label className="block text-gray-700 text-sm font-bold mb-2">
              Mot de passe actuel
            </label>
            <input className="bg-gray-200 appearance-none border-2 border-gray-200 rounded w-full py-2 px-4 text-gray-700 leading-tight focus:outline-none focus:bg-white focus:border-blue-500" type="password" placeholder="Mot de passe..." {...register('current_password')} />
            {errors.current_password?.message && <p className="text-red-500 text-xs">{errors.current_password?.message}</p>}
          </div>
          <div className="flex justify-around mb-4">
            <input type="submit" className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline" value="Mettre à jour" />
          </div>
          <div>
            <p className='mb-2'>
              <Link to="/login" className="inline-block align-baseline font-bold text-sm text-blue-500 hover:text-blue-800">
                Se connecter
              </Link>
            </p>
            <Link to="/register" className="inline-block align-baseline font-bold text-sm text-blue-500 hover:text-blue-800">
              Créer un compte
            </Link>
          </div>
        </form>
        <p className="text-center text-gray-500 text-xs">
          &copy;2023 JiesGame. All rights reserved.
        </p>
      </div>
    </div>
  )
}
