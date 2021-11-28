import Projets from "./Projets";


function ProjetsDatas(){
    let contents =
    [
        "Projet sur un site vitrine responsive en HTML/CSS.",
        "Création d'un site responsive sur la base de bootstrap en utilisant une API REST.",
        "Création d'un jeu du pendu en Javascript, la réponse doit être trouvée en un nombre de coups limités.",
        "Conception d'un jeu 2D où il faut trouver 6 paires de cartes en un temps imparti.",
        "Premier site réalisé à l'aide de React JS en utilisant l'API REST de Swapi."
    ]

    let layerColors = 
    [
        "rgba(255, 255, 255, 0.85)",
        "rgba(255, 253, 151, 0.85)",
        "rgba(100, 180, 255, 0.85)",
        "rgba(255, 185, 94, 0.85)",
        "rgba(240, 125, 255, 0.85)"
    ]

    let boxes = ["box1","box2","box3","box4","box5"]
    let names = ["Terre de Geek", "Gestio Banque", "Jeu du Pendu", "Jeu des Paires", "Swapi"]

    return <Projets contents={contents} layerColors={layerColors} boxes={boxes} names={names}/>
}

export default ProjetsDatas;