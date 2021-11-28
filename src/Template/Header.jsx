import Border from './border-header.png';

function Header(){
    return <header className="container d-flex justify-content-center align-items-center flex-column" id="Header">
        <h1 id="Title">Portfolio</h1>
        <figure id="blockBorder">
        <img src={Border} id="Border" alt="Une bordure originale"></img>
        </figure>
    </header>
}

export default Header;