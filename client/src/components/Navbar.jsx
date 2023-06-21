import React from 'react';
import logo from "../assets/images/logo.png";
import {

  Link
} from "react-router-dom";


const Navbar = () => {
  return (
    <nav className="flex items-center justify-between p-4 mt-10 ml-10">
      <div className="flex items-center">

        <img className="w-36 mr-4" src={logo} alt="Logo" />

        <span className="text-white text-md font-bold font-ox px-20"> <Link to="/">HOME</Link></span>
        <span className="text-white text-md font-bold font-ox px-20"> <Link to="/portfolio">PORTFOLIO</Link></span>
        <span className="text-white text-md font-bold font-ox px-20"> <Link to="/clients">CLIENTS</Link></span>
        <span className="text-white text-md font-bold font-ox px-20"> <Link to="/casestudies">CASE STUDIES</Link></span>
        <span className="text-white text-md font-bold font-ox px-20"> <Link to="/starships">STAR SHIPS</Link></span>

      </div>
      {/* Add more navigation links or other components here */}
    </nav>
  );
};

export default Navbar;
