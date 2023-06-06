import React from 'react';
import bg from "../assets/images/bg.jpeg";
import logo from "../assets/images/logo.png";
import Navbar from './Navbar';
import RotatingSphere from './RotatingSphere';
import { Canvas } from 'react-three-fiber';
import space from "../assets/images/peakpx.jpg"
import ParallaxSection from './ParallaxSection';
const LandingPage = () => {
  return (
    <div className="h-screen flex flex-col items-center justify-center text-white">

      <div className=" w-screen h-screen flex justify-center items-center">

        <Canvas className="w-full h-full mt-10">
          <directionalLight color={"white"} intensity={2} position={[-10, 10, 1]} />
          <RotatingSphere />
        </Canvas>
      </div>

      <div className="w-full absolute text-white">
      
        <div className="flex items-center justify-center h-screen">
          <div className='flex flex-col items-center justify-center mt-32'>

            <img className="w-full h-56" src={logo}/>

            <div className='border border-gray-300 w-72 mt-5 mb-5'></div>

            <h1 className='text-white'>YOUR BRAND REIMAGINED</h1>
            <button className='text-white border-2 rounded-full py-2 px-5 mt-5'>Work With Us</button>
        
          </div>

        
        </div>


      
      </div>
    
    </div>
  );
};

export default LandingPage;
