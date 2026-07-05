// NavMenu.jsx
import React from 'react';
import NavLinks from './NavLinks';
import { Stethoscope } from 'lucide-react';

const NavMenu = () => {

  const links = (
    <>
      <NavLinks to={"/"}>
        <span>Home</span>
      </NavLinks>
      <NavLinks to={"/about"}>
        <span>About</span>
      </NavLinks>
      <NavLinks to={"/doctor"}>
        <span>Doctors</span>
      </NavLinks>
      <NavLinks to={"/gallery"}>
        <span>Gallery</span>
      </NavLinks>
      <NavLinks to={"/contact"}>
        <span>Contact</span>
      </NavLinks>
    </>
  );

  return (
    <div className="w-full">
      {/* top accent line */}
      <div className="h-1 w-full bg-gradient-to-r from-teal-600 via-teal-500 to-teal-600" />

      <div className="flex items-center justify-between bg-white px-4 md:px-8 py-3 shadow-sm">
        
        {/* Logo + Brand */}
        <div className="flex items-center gap-3">
          <div className="flex items-center justify-center h-14 w-14 rounded-full bg-amber-50 border-2 border-amber-600/40">
            <Stethoscope className="h-7 w-7 text-amber-700" strokeWidth={2} />
          </div>

          <div>
            <h1 className="text-2xl font-serif font-bold text-gray-900 tracking-tight leading-none">
              Techinfo <span className="text-teal-700">YT</span>
            </h1>
            <div className="mt-1 inline-block bg-amber-900 text-amber-50 text-[11px] font-semibold tracking-wide px-3 py-1 rounded-sm">
              A SUPER SPECIALITY HOSPITAL
            </div>
          </div>
        </div>

        {/* Mobile menu button */}
        <div className="relative group lg:hidden">
          <div tabIndex={0} role="button" className="inline-flex items-center justify-center p-2 rounded-md hover:bg-gray-100">
            <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-gray-700" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" />
            </svg>
          </div>
          <ul
            tabIndex="-1"
            className="hidden group-focus-within:block absolute right-0 mt-3 w-52 p-2 bg-white rounded-lg shadow-lg z-20 border border-gray-100">
            {links}
            <li className="mt-2">
              <a className="block text-center px-4 py-2 rounded-md border-2 border-teal-700 text-teal-700 font-semibold hover:bg-teal-700 hover:text-white transition-colors">
                Book A Appointment
              </a>
            </li>
          </ul>
        </div>

        {/* Desktop nav */}
        <div className="hidden lg:flex items-center">
          <ul className="flex items-center gap-1">
            {links}
          </ul>
        </div>

        {/* Book appointment button - desktop */}
        <div className="hidden lg:flex items-center">
          <a className="px-5 py-2.5 rounded-md border-2 border-teal-700 text-teal-700 font-semibold hover:bg-teal-700 hover:text-white transition-colors duration-300">
            Book A Appointment
          </a>
        </div>

      </div>
    </div>
  );
};

export default NavMenu;