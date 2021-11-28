// import Border from './border-header.png';

import Mailto from "./Mailto";

function Header(){
    return <header className="container d-flex justify-content-end align-items-center flex-column">
        <h1>Portfolio</h1>
        <aside className="btn btn-secondary" id="Contact">
            <Mailto mailto="mailto:occelli.hugo@hotmail.fr"/>
        </aside>
    </header>
}

export default Header;