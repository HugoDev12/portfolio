import { Route, Routes } from 'react-router';
import Portfolio from './Portfolio/Portfolio';
import Biographie from './Biographie/Biographie';
import Projets from './Projets/Projets';
import CielNuageuxLg from './Template/ciel-nuageux.jpg';
import './App.css';
import './Template/Template.css';
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
  if ( width > 992){
    // $("#portfolioImg").attr('src', CielNuageuxLg );
  }   
})

export default App;

