import { useAtom } from 'jotai';
import { userAtom } from '../store/atoms';
import { useNavigate } from 'react-router-dom';
import { toastInfo, toastError } from '../services/toast';
import { logoutFetch } from '../services/axios'

export const Logout = () => {
  const [userInfo, setUserInfo] = useAtom(userAtom)
  const navigate = useNavigate();

  const logout = async () => {
    try {
      const logoutProfil = await logoutFetch(setUserInfo);
      if(logoutProfil) {
        navigate('/login');
        toastInfo('Vous vous êtes déconnectés.');
      }
    } catch(error) {
      toastError ("La déconnexion n'a pas eu lieu.");
    }
  }

  return (
    <button className="block text-center w-full whitespace-nowrap bg-transparent px-4 py-2 text-sm font-normal text-neutral-700 hover:bg-neutral-100 active:text-neutral-800 active:no-underline disabled:pointer-events-none disabled:bg-transparent disabled:text-neutral-400 dark:text-neutral-200 dark:hover:bg-white/30" onClick={logout}>Se déconnecter</button>
  )
};
