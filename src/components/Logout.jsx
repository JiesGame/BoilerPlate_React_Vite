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
    navigate('/');
  }
  const navigate = useNavigate();
  const logout = () => {
    Cookies.remove('token');
    Cookies.remove('user');
    navigate('login');
  }
  return (
    <button onClick={logout}>Logout</button>
  )
}
