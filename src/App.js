import { Route, Routes } from 'react-router';
import Portfolio from './Portfolio/Portfolio';
import Biographie from './Biographie/Biographie';
import Projets from './Projets/Projets';
import './App.css';
import './Template/Template.css';
import './FontAwesome.js';
import $ from 'jquery';



function App() {
  return (
    <>
    <Routes>
      <Route path="/" element={<Portfolio/>}/>
      <Route path="/portfolio" element={<Portfolio/>}/>
      <Route path="/biographie" element={<Biographie/>}/>
      <Route path="/projets" element={<Projets/>}/>
    </Routes>
    </>
  );
}

$(".Detail").each(function(){
  $(this).on("click", function(){
    $(this).parent().addClass("clicked");
    console.log("test");
    setTimeout(() => {
      $(this).parent().next().removeClass("visually-hidden");
      $(this).parent().hide();
      // $(this).parent().addClass("visually-hidden");
    }, 1000);
  })
})

export default App;

// $(function(){
//   var vi = $(window).width();
//   var width = Object.values($(vi)).shift();
//   if ( width > 1024){
//     $("h1").css({"font-size":"900%"});
//     $("footer").children("ul").children("li").css({"font-size": "200%"});
//     $("links").css({"font-size":"200%"});
//     $("#SubTitle").css({"font-size":"150%","border-bottom":"2px solid white"});
//     $("#Name").css({"font-size":"400%"});
//   }
// }) 

// const CONTENTS = [
//   ["Réalisation d'un jeu de cartes où l'on doit trouver les paires dans un temps imparti.", "https://github.com/HugoDev12/jeu_des_pairs"],

// ]


// $(function(){
//   $(".Detail").each(function(index){
//     $(this).on("click", function(){
//       $(this).parent().addClass("clicked");
//       $(this).siblings().text("Détails");
//       $(this).text("Retour");
//       let id = $(this).parent().attr("id");
      // if (CARDS.includes(id)){
        // console.log(id);
        // let text = $("<p></p>").text(CONTENTS.id.text);
        // let links = $("<a href=" + CONTENTS.id.link).text("Lien Github");
        // $(this).parent().children().first().after(text).after(links);
      // }
      // $(this).parent().removeAttr("id");
      // let id = $(this).parent().attr("id");
      // console.log($(this).parent());
      // console.log(id);
      // if ($(this).parent().attr("id") === "Memory") console.log("test");
      // let text = $("<p></p>").text(CONTENTS[0])
      // let links = $("<a href='https://github.com/HugoDev12/jeu_des_pairs'</a>").text("Lien Github");
      // $(this).parent().children().first().after(text).after(links);
      // console.log(el);
      
//     })
//   })
// })

// $(function(){
  
// })





