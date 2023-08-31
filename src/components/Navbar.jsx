import { useEffect } from "react";
import { Collapse, Dropdown, initTE } from "tw-elements";
import { Link } from "react-router-dom";
import logo from "../assets/logo.svg";
import "../App.css";
import { Logout } from "./Logout";

export const Navbar = () => {
    useEffect(() => {
      initTE({ Collapse, Dropdown });
    }, []);

  return (
    <>
      <nav className={`flex items-center justify-between w-full flex-wrap py-3 mt-3`}>
        <img src={logo} alt="logo" className="ml-5" />
        <div className="flex justify-end w-auto relative">
          <div id="navButton" className="flex-grow text-lg mr-6">
            <Link to="/" className="inline-block mr-2"> Accueil </Link>
            <Link to="*" className="inline-block mr-2">Login</Link>
            <Link to="*" className="inline-block mr-2">Register</Link>
            <Link to="*" className="inline-block mr-4">Page_3</Link>
            <Logout />
            <div className="absolute top-1/2 transform -translate-y-1/2 right-0 mr-2" data-te-dropdown-ref>
              <a className="hidden-arrow whitespace-nowrap transition duration-150 ease-in-out motion-reduce:transition-none" id="dropdownMenuButton2" role="button" data-te-dropdown-toggle-ref aria-expanded="false">
                <img id="dropdown" src={logo} className="rounded-full" style={{ height: `25px`, width: `25px` }}/>
              </a>
              <ul className="absolute left-0 right-auto z-[1000] m-0 mt-1 hidden min-w-max list-none overflow-hidden rounded-lg border-none bg-white bg-clip-padding text-left text-base shadow-lg dark:bg-neutral-700 [&[data-te-dropdown-show]]:block" aria-labelledby="dropdownMenuButton2" data-te-dropdown-menu-ref>
                <li>
                  <Link to="*" className="block w-full whitespace-nowrap bg-transparent px-4 py-2 text-sm font-normal text-neutral-700 hover:bg-neutral-100 active:text-neutral-800 active:no-underline disabled:pointer-events-none disabled:bg-transparent disabled:text-neutral-400 dark:text-neutral-200 dark:hover:bg-white/30" data-te-dropdown-item-ref >Action</Link>
                </li>
                <li>
                  <Link to="*" className="block w-full whitespace-nowrap bg-transparent px-4 py-2 text-sm font-normal text-neutral-700 hover:bg-neutral-100 active:text-neutral-800 active:no-underline disabled:pointer-events-none disabled:bg-transparent disabled:text-neutral-400 dark:text-neutral-200 dark:hover:bg-white/30" data-te-dropdown-item-ref >Another action</Link>
                </li>
                <li>
                  <Link to="*" className="block w-full whitespace-nowrap bg-transparent px-4 py-2 text-sm font-normal text-neutral-700 hover:bg-neutral-100 active:text-neutral-800 active:no-underline disabled:pointer-events-none disabled:bg-transparent disabled:text-neutral-400 dark:text-neutral-200 dark:hover:bg-white/30" data-te-dropdown-item-ref >Something else here</Link>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </nav>
    </>
  );
};