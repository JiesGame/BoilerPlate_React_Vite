import { atom } from 'jotai';
import Cookies from 'js-cookie';


export const userAtom = atom({
  id: Cookies.get('id') || "",
  username: Cookies.get('username') || "",
  email: Cookies.get('email') || "",
  description: Cookies.get('description') || "" 
});