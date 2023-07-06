import headerImage from "../assets/images/space-illustration.png"
import sectionImage from "../assets/images/about-image-1.png"
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

                    <div className="p-3 w-100 text-right mr-40 mt-20">
                      <h1 className="text-white font-ox-bold text-5xl">COMPANY OVERVIEW</h1>
                    </div>            
                </div>

                <div className="relative flex items-center justify-end">
                  <img className="inset-0 z-0 object-cover w-50" src={sectionImage}/>
                  <div className="absolute flex items-center justify-start inset-0 z-30 m-20">
                    <div className="border-4 border-blue-300 p-10 flex items-center justify-start mr-80">
                      <div className="border-4 border-brown-300 p-5">
                        <h1 className="text-white font-ox text-5xl text-start">DETAILS:</h1>
                        <p className="text-white font-ox text-3xl text-left">
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
        </ PageTransition>
        );
}

export default About;