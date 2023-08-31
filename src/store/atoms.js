import { atom } from 'jotai';
import Cookies from 'js-cookie';


export const userAtom = atom({
  id: Cookies.get('id') || "",
  email: Cookies.get('email') || "",
});