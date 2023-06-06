import React, { useEffect } from 'react';
import backgroundImage from '../assets/images/space_bg.jpg'
import LandingPage from './LandingPage';
import Navbar from './Navbar';


const ParallaxSection = () => {
    useEffect(() => {
        const parallaxEffect = () => {
          const parallaxElements = document.querySelectorAll('.parallax');
          const scrollPosition = window.pageYOffset;
    
          parallaxElements.forEach((element) => {
            const elementOffsetTop = element.offsetTop;
            const elementHeight = element.offsetHeight;
            const parallaxSpeed = element.getAttribute('data-parallax-speed');
    
            const parallaxOffset = (scrollPosition - elementOffsetTop) * parallaxSpeed;
    
            element.style.backgroundPositionY = `-${parallaxOffset}px`;
          });
        };
    
        window.addEventListener('scroll', parallaxEffect);
        return () => {
          window.removeEventListener('scroll', parallaxEffect);
        };
      }, []);
    
      return (
        <div className="parallax relative h-screen">
          <div
            className="absolute top-0 left-0 right-0 bottom-0 z-10"
            style={{
              backgroundImage: `linear-gradient(rgba(0, 0, 0, 0), rgba(0, 0, 0, 0.9)), url(${backgroundImage})`,
              backgroundSize: 'cover',
              backgroundPosition: 'center',
            }}
          >
        <Navbar />
 <LandingPage />
          </div>

     
      </div>
    );
  };

  export default ParallaxSection