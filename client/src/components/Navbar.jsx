import React from 'react';
import { Link, useLocation } from 'react-router-dom';
import logo from '../assets/images/logo.png';

const Navbar = () => {
  const location = useLocation();

  const isActiveLink = (path) => {
    return location.pathname === path ? 'underline' : '';
  };

  return (
    <nav className="flex items-center justify-between p-4 mt-10 ml-10">
      <div className="flex items-center">
        <img className="w-36 mr-4" src={logo} alt="Logo" />

        <span
          className={`text-white text-md font-bold font-ox px-20 ${isActiveLink(
            '/'
          )} transition-transform duration-300 ease-in-out transform hover:scale-110`}
        >
          <Link to="/">HOME</Link>
        </span>
        <span
          className={`text-white text-md font-bold font-ox px-20 ${isActiveLink(
            '/portfolio'
          )} transition-transform duration-300 ease-in-out transform hover:scale-110`}
        >
          <Link to="/portfolio">PORTFOLIO</Link>
        </span>
        <span
          className={`text-white text-md font-bold font-ox px-20 ${isActiveLink(
            '/clients'
          )} transition-transform duration-300 ease-in-out transform hover:scale-110`}
        >
          <Link to="/clients">CLIENTS</Link>
        </span>
        <span
          className={`text-white text-md font-bold font-ox px-20 ${isActiveLink(
            '/casestudies'
          )} transition-transform duration-300 ease-in-out transform hover:scale-110`}
        >
          <Link to="/casestudies">CASE STUDIES</Link>
        </span>
        <span
          className={`text-white text-md font-bold font-ox px-20 ${isActiveLink(
            '/starships'
          )} transition-transform duration-300 ease-in-out transform hover:scale-110`}
        >
          <Link to="/starships">STAR SHIPS</Link>
        </span>
      </div>
      {/* Add more navigation links or other components here */}
    </nav>
  );
};

export default Navbar;
