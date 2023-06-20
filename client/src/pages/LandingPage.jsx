import EmbedReel from "../components/LandingPage/EmbedReel";
import HeroSection from "../components/LandingPage/HeroSection";
import starShips from "../assets/images/starships.png"
import galaxyImage from "../assets/images/galaxy-system.png"

function LandingPage() {
    return (
    <>
        <HeroSection />
        <div className="mt-10 mb-20">
            <img src={starShips} />
        </div>

        <EmbedReel />
        <div className="flex items-center justify-center ">
            <div className="w-3/5 mb-52 mt-52">
                <h1 className="text-6xl font-ox text-white text-center">
                    WE'RE A TEAM OF MARKETERS WHO LOVE STORYTELLING
                </h1>
            </div>

        </div>

        <div>
            <div className="relative">
                <img src={galaxyImage} alt="Your Image" className="w-screen h-screen" />
                <div className="absolute inset-0 ">
                    <div className="absolute inset-0 bg-gradient-to-br from-black via-transparent to-black opacity-50"></div>
                    <div className="flex items-center justify-center mt-10">
                        <div className="w-3/5 text-center">
                            <h1 className="font-ox font-medium text-4xl text-white">
                                We promote your brand through strategically
                                organized content with technical precision
                                and creative skill.
                            </h1>
                        </div>
                    </div>


                </div>
            </div>
        </div>
    </>
    );
}

export default LandingPage;