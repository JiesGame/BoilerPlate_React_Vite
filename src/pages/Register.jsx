import { useForm } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';
import * as yup from 'yup';

export const Register = () => {
  const schema = yup.object().shape({
    nickname: yup.string().min(3, "Le pseudonyme est nécessaire et doit faire entre 3 et 20 caractères.").max(20, "Le pseudonyme est nécessaire et doit faire entre 3 et 20 caractères.").required(),
    email: yup.string().email("La donnée fournie ne correspond pas à un email.").required("L'email est nécessaire."),
    password: yup.string().min(6, "Le mot de passe est nécessaire et doit faire entre 6 et 20 caractères.").max(20, "Le mot de passe est nécessaire et doit faire entre 6 et 20 caractères.").required(),
    password_confirmation: yup.string().oneOf([yup.ref("password"), null], "Les mots de passe ne correspondent pas").required("La confirmation du mot de passe est nécessaire."),
    confirmationCGU: yup.bool().oneOf([true], "Vous devez accepter les conditions générales d'utilisation.")
  });

  const {register, handleSubmit, formState: {errors} } = useForm({
    resolver: yupResolver(schema),
    }
  );

  const onSubmit = (data) => {
    console.log(data);
  }

  return (
    <div className="w-full max-w-xs">
      <form className="bg-white shadow-md rounded px-8 pt-6 pb-8 mb-4" onSubmit={handleSubmit(onSubmit)}>
        <div className="mb-4">
          <label className="block text-gray-700 text-sm font-bold mb-2">
            Username
          </label>
          <input className="bg-gray-200 appearance-none border-2 border-gray-200 rounded w-full py-2 px-4 text-gray-700 leading-tight focus:outline-none focus:bg-white focus:border-purple-500" type="text" placeholder="Pseudonyme..." {...register('nickname')} />
          {errors.nickname?.message && <p className="text-red-500 text-xs">{errors.nickname?.message}</p>}
        </div>
        <div className="mb-4">
          <label className="block text-gray-700 text-sm font-bold mb-2">
            Email
          </label>
          <input className="bg-gray-200 appearance-none border-2 border-gray-200 rounded w-full py-2 px-4 text-gray-700 leading-tight focus:outline-none focus:bg-white focus:border-blue-500" type="text" placeholder="Adresse mail..." {...register('email')} />
          {errors.email?.message && <p className="text-red-500 text-xs">{errors.email?.message}</p>}
        </div>
        <div className="mb-4">
          <label className="block text-gray-700 text-sm font-bold mb-2">
            Mot de passe
          </label>
          <input className="bg-gray-200 appearance-none border-2 border-gray-200 rounded w-full py-2 px-4 text-gray-700 leading-tight focus:outline-none focus:bg-white focus:border-blue-500" type="password" placeholder="Mot de passe..." {...register('password')} />
          {errors.password?.message && <p className="text-red-500 text-xs">{errors.password?.message}</p>}
        </div>
        <div className="mb-4">
          <label className="block text-gray-700 text-sm font-bold mb-2">
            Confirmation du mot de passe
          </label>
          <input className="bg-gray-200 appearance-none border-2 border-gray-200 rounded w-full py-2 px-4 text-gray-700 leading-tight focus:outline-none focus:bg-white focus:border-blue-500" type="password" placeholder="Confirmation du mot de passe..." {...register('password_confirmation')} />
          {errors.password_confirmation?.message && <p className="text-red-500 text-xs">{errors.password_confirmation?.message}</p>}
        </div>
        <div className="md:flex md:items-center mb-6">
          <label className="block text-gray-500 font-bold">
            <input type="checkbox" name="checkbox" {...register('confirmationCGU')}/>
            <span className="text-sm">
              J'accepte les CGU
            </span>
            {errors.confirmationCGU?.message && <p className="text-red-500 text-xs">{errors.confirmationCGU?.message}</p>}
          </label>
        </div>
        <div className="flex justify-center">
          <input type="submit" className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline" value="Créer le compte" />
        </div>
      </form>
      <p className="text-center text-gray-500 text-xs">
        &copy;2023 JiesGame. All rights reserved.
      </p>
    </div>
  )
}