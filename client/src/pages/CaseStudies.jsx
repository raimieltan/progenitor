import headerImage from "../assets/images/space-illustration.png"
import HeaderHero from "../components/LandingPage/HeaderHero";
import PageTransition from "../components/PageTransition";

function CaseStudies() {
    return (
        <PageTransition>
            <div>
                <HeaderHero headerTitle={"CASE STUDIES"} />
            </div>
            {/* main page */}
            <div className="border-4 border-blue-300 p-3 rounded-xl w-72 text-center mx-10">
                        <h1 className="text-white font-ox text-4xl">CASE STUDIES</h1>
                    </div>
        </ PageTransition>
        );
}

export default CaseStudies;