import Cookies from 'js-cookie';
import { useNavigate } from 'react-router-dom';
import { useAtom } from 'jotai';

export const Logout = () => {
  async () => {
    await fetch("http://127.0.0.1:3000/users/sign_out", {
      method: "DELETE",
      headers: {
        "Content-Type" : "application/json",
        "Authorization" : `Bearer ${Cookies.get('token')}`
      },
    })
    Cookies.remove('token');
  }
  const navigate = useNavigate();
  const logout = () => {
    Cookies.remove('token');
    Cookies.remove('user');
    navigate('/');
  }
  return (
    <button className="block text-center w-full whitespace-nowrap bg-transparent px-4 py-2 text-sm font-normal text-neutral-700 hover:bg-neutral-100 active:text-neutral-800 active:no-underline disabled:pointer-events-none disabled:bg-transparent disabled:text-neutral-400 dark:text-neutral-200 dark:hover:bg-white/30" onClick={logout}>Se déconnecter</button>
  )
}
