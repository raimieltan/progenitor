import headerImage from "../assets/images/space-illustration.png"
import HeaderTitle from "../components/HeaderTitle";
import PageTransition from "../components/PageTransition";

function Clients() {
    return (
        <PageTransition>
            <div>
                <img src={headerImage} />
                <div className="mx-10">
    
                    <HeaderTitle title={"CLIENTS"} />
    
                </div>
    
            </div>
        </ PageTransition>
        );
}

export default Clients;