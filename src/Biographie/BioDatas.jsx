import Display from "../Projets/Display";

function BioDatas(){

    const CONTENTS =
    [
        "Né sous le soleil des Bouches-du-Rhône, mon premier souvenir fût la pluie de la Normandie. Étant sous le signe astrologique du poisson, la ville d'Honfleur est mon bocal.",
        "Dès l'enfance, je fus intéressé par la musique et les jeux vidéo. Pendant mon temps de loisir, je jonglais entre solfège et ordinateur. Cet attrait pour les jeux m'a amené vers le développement web.",
        "De nature forte et sensible, plus faiseur de projets que poète, j'ai tendance à être créatif et minutieux dans mon travail.",
        "Comprendre et créer une application ou un site web me provoque une certaine fierté et me pousse à apprendre davantage.",
        "Amateur de pétanque et de natation, j'aime suivre l'actualité et les nouveautés technologiques."
    ]

    const LAYERCOLORS = 
    [
        "rgba(255, 255, 255, 0.85)",
        "rgba(255, 253, 151, 0.85)",
        "rgba(100, 180, 255, 0.85)",
        "rgba(255, 185, 94, 0.85)",
        "rgba(240, 125, 255, 0.85)"
    ]

    const BOXES = ["box1","box2","box3","box4","box5"]
    const NAMES = ["Qui suis-je?", "Mes Passions", "Mon Caractere", "Motivation", "Autres..."]
    const GITLINKS = ["#","#","#","#","#"]
    const DISPLAY = "visually-hidden";
    
    return <Display contents={CONTENTS} layerColors={LAYERCOLORS} boxes={BOXES} names={NAMES} links={GITLINKS} linkDisplay={DISPLAY}/>

}

export default BioDatas