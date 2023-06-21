import React, { useState, useEffect } from "react";
import Navbar from "./components/Navbar";
import LandingPage from "./pages/LandingPage";

import {
  BrowserRouter as Router,
  Routes,
  Route,
  Link
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


    <div className="relative">

 

      <Router>
      <div className={`fixed z-50 transition-opacity duration-500 ${showNavbar ? "opacity-100" : "opacity-0"}`}>
        <Navbar />
      </div>
        <div>


          {/* A <Routes> looks through its children <Route>s and
          renders the first one that matches the current URL. */}
          <Routes>
            {/* <Route path="/about">
          <About />
        </Route>
        <Route path="/users">
          <Users />
        </Route> */}
            <Route path="/" element={<LandingPage />} />
            <Route path="/portfolio" element={<Portfolio />} />
            <Route path="/clients" element={<Clients />} />
            <Route path="/casestudies" element={<CaseStudies />} />
            <Route path="/starships" element={<Starships />} />
          </Routes>
        </div>
      </Router>
    </div>
  );
}

export default App;
