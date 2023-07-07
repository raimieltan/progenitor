import headerImage from "../assets/images/space-illustration.png"
import sectionImage1 from "../assets/images/about-image-1.png"
import sectionImage2 from "../assets/images/about-image-2.png"
import PageTransition from "../components/PageTransition";

function About() {
    return (
        <PageTransition>
            <div>
                <img src={headerImage} />
                <div className="relative">
                    <div className="border-4 border-blue-300 p-3 rounded-xl w-72 text-center mx-10">
                        <h1 className="text-white font-ox text-4xl">ABOUT</h1>
                    </div>
                </div>
                
                <div className="p-3 w-100 text-right mr-40 mt-20">
                  <h1 className="text-white font-ox-bold text-5xl">COMPANY OVERVIEW</h1>
                </div>            

                <div className="relative">
                  <div className="flex items-end w-full justify-end">
                    <img className="z-0 object-cover w-50" src={sectionImage1}/>
                    <div className="absolute">
                      <div className="bg-black bg-opacity-80 border-4 border-blue-300 p-10 h-2/5 w-3/4 ml-20 mb-20">
                        <div className="border-4 border-brown-300 p-8">
                          <h1 className="text-white font-ox text-6xl text-start">DETAILS:</h1>
                          <p className="text-white font-ox text-4xl text-left">
                            Lorem ipsum dolor sit amet, 
                            consectetur adipiscing elit, sed do eiusmod 
                            tempor incididunt ut labore et dolore magna aliqua. 
                            Ut enim ad minim veniam, quis nostrud exercitation ullamco 
                            laboris nisi ut aliquip ex ea commodo consequat. 
                            Duis aute irure dolor in reprehenderit in voluptate velit 
                            esse cillum dolore eu fugiat nulla pariatur. 
                            Excepteur sint occaecat cupidatat non proident, 
                            sunt in culpa qui officia deserunt mollit anim id est laborum."
                          </p>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>

                <div className="relative">
                  <div className="absolute z-30 p-3 w-100 text-left ml-20 mt-20 flex items-start">
                    <h1 className="text-white font-ox-bold text-5xl">HISTORY</h1>
                  </div>
                  
                  <div className="flex items-end w-full">
                    <img className="z-0 object-cover w-50" src={sectionImage2}/>
                    <div className="absolute flex justify-end">
                      <div className="bg-black bg-opacity-80 border-4 border-blue-300 p-10 w-3/4 mr-20 mb-40">
                        <div className="border-4 border-brown-300 p-8">
                          <h1 className="text-white font-ox text-6xl text-start">DETAILS:</h1>
                          <p className="text-white font-ox text-4xl text-left">
                            Lorem ipsum dolor sit amet, 
                            consectetur adipiscing elit, sed do eiusmod 
                            tempor incididunt ut labore et dolore magna aliqua. 
                            Ut enim ad minim veniam, quis nostrud exercitation ullamco 
                            laboris nisi ut aliquip ex ea commodo consequat. 
                            Duis aute irure dolor in reprehenderit in voluptate velit 
                            esse cillum dolore eu fugiat nulla pariatur. 
                            Excepteur sint occaecat cupidatat non proident, 
                            sunt in culpa qui officia deserunt mollit anim id est laborum."
                          </p>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
            </div>
        </ PageTransition>
        );
}

export default About;