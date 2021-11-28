import { Link } from 'react-router-dom';

function StarBubble(props){


    return <section id="Layer" className="d-flex justify-content-center align-items-center">
        <div id="Content" style={{backgroundColor: props.color}} className="d-flex flex-column justify-content-center align-items-center">
            {/* <button className="mb-5 btn-secondary">Retour</button> */}
            {/* <Link to="https://www.google.fr" className="mb-5 btn btn-secondary">Retour</Link> */}
            <h2 className="mb-5">{props.title}</h2>
            <p className="mb-5 text-center">{props.text}</p>
        </div>
    </section>
}

export default StarBubble;

//  className="d-flex flex-column justify-content-center align-items-center"