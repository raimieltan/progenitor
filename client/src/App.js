import React, { useState, useEffect } from "react";
import Navbar from "./components/Navbar";
import LandingPage from "./pages/LandingPage";

function App() {
  const [showNavbar, setShowNavbar] = useState(false);



  useEffect(() => {
    const timer = setTimeout(() => {
      setShowNavbar(true);
    }, 500);

    return () => {
      clearTimeout(timer);
    };
  }, []);

  return (
    <div className="relative">
 
      <div className={`fixed z-50 transition-opacity duration-1000 ${showNavbar ? "opacity-100" : "opacity-0"}`}>
        <Navbar />
      </div>
    
      <div>
        <LandingPage />
      </div>
    </div>
  );
}

export default App;
