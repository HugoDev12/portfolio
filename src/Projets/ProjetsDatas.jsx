import Display from "./Display";


function ProjetsDatas(){
    const CONTENTS =
    [
        "Projet sur un site vitrine responsive en HTML/CSS/bootstrap sur une base boilerplate HTML5.",
        "Création d'un site responsive sur la base de bootstrap en utilisant une API REST, découverte de l'AJAX.",
        "Création d'un jeu du pendu en Javascript, la réponse doit être trouvée en un nombre de coups limités.",
        "Conception d'un jeu 2D où il faut trouver 6 paires de cartes en un temps imparti, les cartes changent de position à chaque partie.",
        "Premier site réalisé avec React JS en utilisant l'API REST de Swapi, composants orientés fonction."
    ]

    const GITLINKS = [
        "https://github.com/HugoDev12/terre_de_geek",
        "https://github.com/HugoDev12/MaBanque",
        "https://github.com/HugoDev12/pendu",
        "https://github.com/HugoDev12/jeu_des_pairs",
        "https://github.com/HugoDev12/projet_react_s10"
    ]

    const LAYERCOLORS =
    [
        "radial-gradient(circle at 20% 20%, #ffffff, #000)",
        "radial-gradient(circle at 20% 20%, #fffd95, #000)",
        "radial-gradient(circle at 20% 20%, #64b4ff, #000)",
        "radial-gradient(circle at 20% 20%, #ffb95e, #000)",
        "radial-gradient(circle at 20% 20%, #f07dff, #000)"
    ]


    const BOXES = ["box1","box2","box3","box4","box5"]
    const NAMES = ["Terre de Geek", "Gestio Banque", "Jeu du Pendu", "Jeu des Paires", "Swapi"]
    const DISPLAY = "";

    return <Display contents={CONTENTS} layerColors={LAYERCOLORS} boxes={BOXES} names={NAMES} links={GITLINKS} linkDisplay={DISPLAY}/>
}

export default ProjetsDatas;