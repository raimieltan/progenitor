import headerImage from "../assets/images/space-illustration.png"
import PageTransition from "../components/PageTransition";

function CaseStudies() {
    return (
        <PageTransition>
            <div>
                <img src={headerImage} />
                <div className="mx-10">
    
                    <div className="border-4 border-blue-300 p-3 rounded-xl w-80 text-center">
                        <h1 className="text-white font-ox text-4xl">CASE STUDIES</h1>
                    </div>
    
                </div>
    
            </div>
        </ PageTransition>
        );
}

export default CaseStudies;