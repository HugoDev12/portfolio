import { Link } from "react-router-dom";
import Footer from "../Template/Footer";
import Header from "../Template/Header";
import ProjetBg from "../Template/temps-orageux.jpg";
import Rain from "../Template/rain.png";


function Projets(){

    return <>
    <div className="backGroundImg">
        <img className="Images" src={ProjetBg} alt="Image d'une vue d'au dessus des nuages" />
        {/* <img id="Rain" src={Rain} alt="Image de pluie"/> */}
    </div>
    <Link to="/portfolio" className="btn btn-secondary backBtn">Retour</Link>
    <Header/>
    <main className="Main container-fluid mt-2 row align-items-center justify-content-center">
        <div className="cards text-center col-12 col-lg-2">Memory Game</div>
        <div className="cards text-center col-12 col-lg-2">MaBanque</div>
        <div className="cards text-center col-12 col-lg-2">Pendu</div>
        <div className="cards text-center col-12 col-lg-2">React</div>
        <div className="cards text-center col-12 col-lg-2">Terre de Geek</div>
    </main>
    <Footer/>
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