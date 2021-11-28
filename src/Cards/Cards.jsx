

function Cards({title, text, link, id}){
    return <>
    <section className="cards text-center col-10 col-md-3 mx-sm-2" id={id}>
    <h2 className ="cardName">{title}</h2>
    <button className="Detail btn btn-info">Voir</button>
    </section>
    <section className="visually-hidden cards text-center col-10 col-md-3 mx-sm-2">
    <h2>Détails</h2>
    <p>{text}</p>
    <a href={link}>Lien Github</a>
    <button className="Detail btn btn-info">Retour</button>
    </section>
    </>
}

export default Cards;