import headerImage from "../assets/images/space-illustration.png"


function Starships() {
    return (
        <>
            <div>
                <img src={headerImage} />
                <div className="mx-10">
    
                    <div className="border-4 border-blue-300 p-3 rounded-xl w-72 text-center">
                        <h1 className="text-white font-ox text-4xl">STARSHIPS</h1>
                    </div>
    
                </div>
    
            </div>
        </>
        );
}

export default Starships;