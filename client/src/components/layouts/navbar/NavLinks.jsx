// NavLinks.jsx
import React from "react";
import { NavLink } from "react-router-dom";

const NavLinks = ({ children, to }) => {
  return (
    <li>
      <NavLink
        to={to}
        className={({ isActive }) =>
          `relative flex items-center gap-2 px-4 py-2 font-medium transition-colors duration-200
          ${isActive
            ? "text-gray-900 font-semibold after:content-[''] after:absolute after:left-4 after:right-4 after:-bottom-0.5 after:h-0.5 after:bg-teal-700"
            : "text-gray-600 hover:text-teal-700"}`
        }
      >
        {children}
      </NavLink>
    </li>
  );
};

export default NavLinks;