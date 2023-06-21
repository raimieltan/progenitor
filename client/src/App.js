import React, { useState, useEffect } from "react";
import Navbar from "./components/Navbar";
import LandingPage from "./pages/LandingPage";

import {
  BrowserRouter as Router,
  Routes,
  Route,
} from "react-router-dom";
import Portfolio from "./pages/Portfolio";
import Clients from "./pages/Clients";
import CaseStudies from "./pages/CaseStudies";
import Starships from "./pages/Starships";

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
    <Router>
      <div className="relative">
   
          <div
            className={`fixed z-50 transition-opacity duration-500 ${
              showNavbar ? "opacity-100" : "opacity-0"
            }`}
          >
            <Navbar />
          </div>
       
        <div>
          <Routes>
         
            <Route path="/" element={<LandingPage />} />
            <Route path="/portfolio" element={<Portfolio />} />
            <Route path="/clients" element={<Clients />} />
            <Route path="/casestudies" element={<CaseStudies />} />
            <Route path="/starships" element={<Starships />} />
          </Routes>
        </div>
      </div>
    </Router>
  );
}

export default App;
