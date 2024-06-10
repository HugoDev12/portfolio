import { Route, Routes } from 'react-router';
import Portfolio from './Portfolio/Portfolio';
import BioDatas from './Biographie/BioDatas';
import './App.css';
import './FontAwesome.js';
import $ from 'jquery';
import './Projets/Stars.css';
import './Projets/StarBubble.css';
import './Template/Template.css';
import ProjetsDatas from './Projets/ProjetsDatas';



function App() {
  return (
    <>
    <Routes>
      <Route path="/" element={<Portfolio/>}/>
      <Route path="/portfolio" element={<Portfolio/>}/>
      <Route path="/biographie" element={<BioDatas/>}/>
      <Route path="/projets" element={<ProjetsDatas/>}/>
    </Routes>
    </>
  );
}

export default App;





