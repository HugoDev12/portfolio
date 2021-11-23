import { Link } from "react-router-dom";
import Header from "../Template/Header";
import Footer from "../Template/Footer";
import CielNuageux from "../Template/ciel-nuageux-mobile.jpg";

function Portfolio(){

    return <>
    <div className="backGroundImg">
        <img className="Images" src={CielNuageux} alt="Image d'une vue d'au dessus des nuages" />
    </div>
    <Header/>
    <main className="Main container mt-2 d-flex flex-column justify-content-around align-items-center">
        <p>Une réalisation de : Occelli Hugo</p>
        <div id="GroupLinks">
            <Link to="/projets" className="btn btn-secondary">Projets</Link>
            <Link to="/biographie" className="btn btn-secondary">Biographie</Link>
        </div>
    </main>
    <Footer/> 
    </>
}

export default Portfolio
