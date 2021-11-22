import { Link } from "react-router-dom";
import Footer from "../Template/Footer";
import Header from "../Template/Header";
import ProjetBg from "../Template/temps-orageux.jpg";


function Projets(){

    return <>
    <div className="backGroundImg">
        <img className="Images" src={ProjetBg} alt="Image d'une vue d'au dessus des nuages" />
    </div>
    <Link to="/portfolio" className="btn btn-primary">Retour</Link>
    <Header/>
    <main className="Main container mt-2 d-flex flex-column justify-content-center align-items-center">
        <p>Projet 1</p>
        <p>Projet 2</p>
        <p>Projet 3</p>
        <p>Projet 4</p>
        <p>Projet 5</p>
    </main>
    <Footer/>
    </>
}

export default Projets;