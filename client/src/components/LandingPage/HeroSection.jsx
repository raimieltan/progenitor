import React from 'react'
import backgroundImage from "../../assets/images/astro-bg.png";
import PageTransition from '../PageTransition';
function HeroSection() {
    return (
        <PageTransition>
                <div className="relative">
         
         <img src={backgroundImage} alt="Your Image" className="w-screen h-screen" />
         <div className="absolute inset-0">
   
             <div className="absolute inset-0 bg-gradient-to-br from-black via-transparent to-black opacity-50"></div>

             <h1 className="absolute bottom-0 left-0 right-0 font-ox font-bold text-5xl text-white text-center">
                 YOUR BRAND REIMAGINED
             </h1>
         </div>
     </div>
        </PageTransition>

    );
}

export default HeroSection;