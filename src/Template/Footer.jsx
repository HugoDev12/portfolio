import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import Mailto from "./Mailto";



function Footer(){
    return <footer className="container d-flex align-items-center justify-content-around flex-row">
        <div className="CopyRight d-flex flex-row">
        <FontAwesomeIcon className="Icons mx-1 mt-3" icon={['far', 'copyright']}/>
        <p className="mt-3">2021</p>
        </div>
        <Mailto id="Contact" mailto="mailto:occelli.hugo@hotmail.fr"/>
    <ul className="d-flex flex-row justify-content-around  mt-3">
        <li><FontAwesomeIcon className="Icons mx-1 mx-lg-0" icon={['fab', 'twitter']}/></li>
        <li><FontAwesomeIcon className="Icons mx-1 mx-lg-0" icon={['fab', 'linkedin']}/></li>
        <li><FontAwesomeIcon className="Icons mx-1 mx-lg-0" icon={['fab', 'github']}/></li>
    </ul>
</footer>
}

export default Footer;