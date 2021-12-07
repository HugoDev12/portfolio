import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import SocialIcons from "./SocialIcons";
import Spaceship from "../Projets/space-ship4.png";
import Mailto from "./Mailto";


function Footer(){
    return <footer className="container d-flex align-items-center justify-content-around flex-row mt-5">
        <div className="d-flex flex-row">
        <FontAwesomeIcon className="Icons mx-1 mt-3" icon={['far', 'copyright']}/>
        <p className="mt-3" id="Date">2021</p>
        </div>
    <ul className="d-flex flex-row justify-content-around  mt-3">
        <li><SocialIcons link="https://twitter.com/HugoOccelli"
            icon={<FontAwesomeIcon className="Icons mx-1 mx-lg-0" icon={['fab', 'twitter']}/>}/>
        </li>
        <li className="mx-1 mx-lg-2"><SocialIcons link="https://www.linkedin.com/in/hugo-occelli-b6085721b/"
            icon={<FontAwesomeIcon className="Icons mx-1 mx-lg-0" icon={['fab', 'linkedin']}/>}/>
        </li>
        <li><SocialIcons link="https://github.com/HugoDev12"
            icon={<FontAwesomeIcon className="Icons mx-1 mx-lg-0" icon={['fab', 'github']}/>}/>
        </li>
    </ul>
    {/* <img src={Spaceship} id="Spaceship" alt="#" width="250px" /> */}
    <div id="Spaceship">
        <img src={Spaceship} alt="#" width="300px"/>
        <Mailto mailto="mailto:occelli.hugo@hotmail.fr"/>
    </div>
</footer>
}

export default Footer;