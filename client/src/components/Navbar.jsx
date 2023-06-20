import React from 'react';
import logo from "../assets/images/logo.png";

const Navbar = () => {
  return (
    <nav className="flex items-center justify-between p-4 mt-10 ml-10">
      <div className="flex items-center">

        <img className="w-36 mr-4" src={logo} alt="Logo" />

        <span className="text-white text-md font-bold font-ox px-20"><a href="/home"> HOME</a></span>
        <span className="text-white text-md font-bold font-ox px-20"><a href="/portfolio"> PORTFOLIO</a></span>
        <span className="text-white text-md font-bold font-ox px-20"><a href="/clients"> CLIENTS</a></span>
        <span className="text-white text-md font-bold font-ox px-20"><a href="/case studies"> CASE STUDIES</a></span>
        <span className="text-white text-md font-bold font-ox px-20"><a href="/starships"> STARSHIPS</a></span>

      </div>
      {/* Add more navigation links or other components here */}
    </nav>
  );
};

export default Navbar;
