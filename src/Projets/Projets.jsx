import { Link } from "react-router-dom";
import Footer from "../Template/Footer";
import Cards from "../Cards/Cards";
// import Header from "../Template/Header";
// import ProjetBg from "../Template/temps-orageux.jpg";
// import Rain from "../Template/rain.png";


function Projets(){

    return <>
    {/* <div className="backGroundImg">
        <img className="Images" src={ProjetBg} alt="Image d'une vue d'au dessus des nuages" />
        <img id="Rain" src={Rain} alt="Image de pluie"/>
    </div> */}
    <header className="d-flex flex-column justify-content-center align-items-center"  id="ProjetsTitle">
        <Link to="/portfolio" className="btn btn-secondary backBtn">Retour</Link>
        <h1>Réalisations</h1>
    </header>
    <main className="container-fluid row gy-4 gy-lg-5 align-items-center justify-content-center flex-wrap my-5" id="ProjetsMain">
        <Cards title="Memory game" id="Memory" 
        text="Réalisation d'un jeu de cartes où l'on doit trouver les paires dans un temps imparti."
        link="https://github.com/HugoDev12/jeu_des_pairs"/>
        <Cards title="MaBanque" id="Bank"
        text="Création d'un site en mobile first, avec différentes pages."
        link="https://github.com/HugoDev12/MaBanque"/>
        <Cards title="Pendu" id="Pendu"
        text="Réalisation d'un jeu où l'on doit trouver les lettres d'un mot en un nombre de coups imparti."
        link="https://github.com/HugoDev12/pendu"/>
        <Cards title="React" id="React"
        text="Découverte de React avec la récupération d'une API Rest (Swapi)."
        link="https://github.com/HugoDev12/projet_react_s10"/>
        <Cards title="Terre de Geek" id="Geek"
        text="Premier site responsive à l'aide de bootstrap."
        link="https://github.com/HugoDev12/terre_de_geek"/>
    </main>
    <div id="ProjetsFoot"><Footer/></div>
    </>
}


export default Projets;

// import React from "react";
// import { useSpring, animated } from "react-spring";
// // import "../style.css";

// const calc = (x, y) => [-(y - window.innerHeight / 2) / 20, (x - window.innerWidth / 2) / 20, 1.1]
// const trans = (x, y, s) => `perspective(600px) rotateX(${x}deg) rotateY(${y}deg) scale(${s})`;

// const cardContainerStyle = {
//   margin: "auto",
//   width: "30%",
//   marginTop: "15vh"
// };

// export const UseSpringDemoPage = () => {
//   const [props, set] = useSpring(() => ({ xys: [0, 0, 1], config: { mass: 5, tension: 350, friction: 40 } }));
//   return (
//     <div style={cardContainerStyle}>
//       <animated.div
//         class="card"
//         onMouseMove={({ clientX: x, clientY: y }) => set({ xys: calc(x, y) })}
//         onMouseLeave={() => set({ xys: [0, 0, 1] })}
//         style={{ transform: props.xys.interpolate(trans) }}
//       />
//     </div>
//   );
// };