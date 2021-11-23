import { Route, Routes } from 'react-router';
import Portfolio from './Portfolio/Portfolio';
import Biographie from './Biographie/Biographie';
import Projets from './Projets/Projets';
import './App.css';
import './Template/Template.css';
import './FontAwesome.js';
// import Rain from "./Template/rain.png";
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


$(function(){
  var vi = $(window).width();
  var width = Object.values($(vi)).shift();
  if ( width > 1024){
    // $("#portfolioImg").attr('src', CielNuageuxLg );
    $("h1").css({"font-size" : "500%"});
    $("li").css({"padding":"5em"});
  }   
})

export default App;

