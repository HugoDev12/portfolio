import { useState } from 'react'; 
import StarBubble from './StarBubble';

function Projets({contents, layerColors, boxes, names}){

    let [click, setClick] = useState(false)
    let [index, setIndex] = useState(null)

    function getProps(index){
        setClick(true)
        setIndex(index)
    }
    let boxTitles = names.map(title => title)
    if (click) return <StarBubble title={names[index]} text={contents[index]} color={layerColors[index]} />

    return <>
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
    </>
}

export default Projets;

