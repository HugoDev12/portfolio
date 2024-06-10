import { Link } from "react-router-dom";
import Header from "../Template/Header";
import Footer from "../Template/Footer";

function Portfolio(){
    return <>
    <Header/>
    <main className="container d-flex flex-column justify-content-center align-items-center">
        <Link to="/projets" className="links slide-in-blurred-left mb-4">Projets</Link>
        <Link to="/biographie" className="links slide-in-blurred-right mt-4">Biographie</Link>
    </main>
    <Footer/> 
    </>
}

export default Portfolio


