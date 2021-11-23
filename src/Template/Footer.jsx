import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

function Footer(){
    return <footer className="d-flex align-items-center">
    <ul  className="container-fluid d-flex flex-row justify-content-around">
        <li><FontAwesomeIcon icon={['fab', 'twitter']} size="lg"/></li>
        <li><FontAwesomeIcon icon={['fab', 'linkedin']} size="lg"/></li>
        <li><FontAwesomeIcon icon={['fab', 'github']} size="lg"/></li>
    </ul>
</footer>
}

export default Footer;