import { icon } from '@fortawesome/fontawesome-svg-core';
import { useState } from 'react'; 
import { Link } from 'react-router-dom';
import Footer from '../Template/Footer';
import SocialIcons from '../Template/SocialIcons';
import StarBubble from './StarBubble';

function Display({contents, layerColors, boxes, names, links, linkDisplay}){

    let [click, setClick] = useState(false)
    let [index, setIndex] = useState(null)

    function getProps(index){
        setClick(true)
        setIndex(index)
    }
    let boxTitles = names.map(title => title)

    if(click)
    {
        function handleClick(e){
            e.preventDefault();
            setClick(false)
        }

        return (
            <section id="Layer" className="d-flex justify-content-center align-items-center">
                <div id="Content" style={{backgroundColor: layerColors[index]}} className="d-flex flex-column justify-content-center align-items-center">
                    <button className="mb-5" id="topBtn" onClick={handleClick}>Retour</button>
                    <h2 className="mb-5">{names[index]}</h2>
                    <p className="mb-5 text-center" id="Bubble">{contents[index]}</p>
                    <aside className={linkDisplay} id="gitLink">
                    <SocialIcons link={links[index]} icon="Lien GitHub"/>
                    </aside>
                </div>
            </section>)
    }   

    return <div className="d-flex justify-content-between align-items-end" style={{height: '100vh'}}>
    <Link to="/portfolio" id="backBtn">Retour</Link>
    {boxes.map((box,index) => {
        return <div className={"box" + ` ${box} ` + "d-flex flex-column text-center justify-content-center align-items-center"}>
            <h3>{boxTitles.shift()}</h3>
            <div key={index} className="star-box d-flex flex-wrap align-items-center justify-content-between" onClick={()=>getProps(index)}>
                <div className="star-container left-top"></div>
                <div className={"star star" + `${index+1}`}></div>
                <div className="star-container right-top"></div>
                <div className="star-container left-bot"></div>
                <div className="star-container right-bot"></div>
            </div>
        </div>
    })}
    <Footer/>
    </div>
}

export default Display;

