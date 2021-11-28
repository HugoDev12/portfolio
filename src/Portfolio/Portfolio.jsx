import { Link } from "react-router-dom";
import Header from "../Template/Header";
import Footer from "../Template/Footer";
import CielNuageux from "../Template/ciel-nuageux-mobile.jpg";

function Portfolio(){
    return <>
    <div className="backGroundImg">
        <img className="Images" src={CielNuageux} alt="Une vue d'au dessus des nuages" />
    </div>
    <Header/>
    <main className="container mt-2 d-flex flex-column justify-content-around align-items-center" id="PortfolioMain">
        <div id="PortfolioContent">
        <p id="SubTitle" className="text-center"><i><b>Une production de</b></i></p>
        <p id="Name" className="text-center">Occelli Hugo</p>
        </div>
        <div id="GroupLinks" className="container d-flex flex-column flex-md-row justify-content-around align-items-center">
            <div className="roundCard d-flex justify-content-center align-items-center my-2">
            <Link to="/projets" className="links" id="Projets">Projets</Link>
            </div>
            <div className="roundCard d-flex justify-content-center align-items-center my-2">
            <Link to="/biographie" className="links">Biographie</Link>
            </div>
        </div>
    </main>
    <Footer/> 
    </>
}

export default Portfolio


