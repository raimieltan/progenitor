import React from 'react';
import bg from "../assets/images/bg.jpeg";
import logo from "../assets/images/logo.png";
import Navbar from './Navbar';

const LandingPage = () => {
  return (
    <div className="bg-black h-screen flex items-center justify-center">

      <div className="absolute">
        <img
          className="w-full h-full object-cover"
          src={bg}
          alt="Background"
        />
       
      </div>
      <div className="w-full h-full absolute">
       <Navbar />
       <div className="flex items-center justify-center h-full">
         <div className='flex flex-col items-center justify-center'>
    
           <h1 className='text-white text-9xl'>PROMETHEUS</h1>
     
           <div className='border border-gray-300 w-72 mt-5 mb-5'></div>

           <h1 className='text-white'>YOUR BRAND REIMAGINED</h1>
           <button className='text-white border-2 rounded-full py-2 px-5 mt-2'>Work With Us</button>
         </div>
       </div>
     
      </div>
    </div>
  );
};

export default LandingPage;
