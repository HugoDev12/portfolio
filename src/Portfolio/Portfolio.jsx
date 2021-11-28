import { Link } from "react-router-dom";
import Header from "../Template/Header";
import Footer from "../Template/Footer";

function Portfolio(){
    return <>
    <Header/>
    <main className="container mt-2 d-flex flex-column justify-content-around align-items-center">
        <div>
            <Link to="/projets">Projets</Link>
            <Link to="/biographie">Biographie</Link>
            <Link to="/test">Test</Link>
        </div>
    </main>
    <Footer/> 
    </>
}

export default Portfolio


