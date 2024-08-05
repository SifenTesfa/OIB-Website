import React from "react";
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import Home from './components/Home';
import Orosavingplus from './components/Orosavingplus';
import { Routes,Route } from "react-router-dom";
import Orosaving from './components/Orosaving';
import Orointerest from "./components/Orointerest";
import Fixedtime from "./components/Fixedtime";
import Handhura from "./components/Handhura";
import Sinq from "./components/Sinq";
import Hayu from "./components/Hayu";
import Ororetirment from "./components/Ororetirment";
import Diaspora from "./components/Diaspora";
import Orocurrent from "./components/Orocurrent";
import Investment from "./components/Investment";
import Salary from "./components/Salary";
import Provident from "./components/Provident";
import Orocash from "./components/Orocash";
import Online from "./components/Online";
import Lock from "./components/Lock";
import Bank from "./components/Bank";
import Business from "./components/Business";
import Vahicle from "./components/Vahicle";
import Personal from "./components/Personal";
import Wadiahasaving from "./components/Wadiahsaving";
import Amana from "./components/Amana";
import Labbaik from "./components/Labbaik";
import Mudarabah from "./components/Mudarabah";
import SinqWomen from "./components/SinqWomen";
import Handhurachild from "./components/Handhurachild";
import Wadiahretir from "./components/Wadiahretir";
import Hayyu from "./components/Hayyu";
import MurabahaF from "./components/MurabahaF";
import InterestF from "./components/InterestF";
import Ijarah from "./components/Ijarah";
import Salam from "./components/Salam";
import BankG from "./components/BankG";
import Money from "./components/Money";
import Partnership from "./components/Partnership";
import Trade from "./components/Trade";
import Coorespondent from "./components/Coorespondent";
import Contact from "./components/Contact";
import SearchPage from "./components/SearchPage";
import Card from "./components/Card";
import Mobile from "./components/Mobile";
import Internet from "./components/Internet";
import Agent from "./components/Agent";
import Atm from "./components/Atm";
import WhoWeAre from "./components/WhoWeAre";
import BoardOfDirectors from "./components/BoardOfDirectors";
import CorporateGovernance from "./components/CorporateGovernance";
import GivingBack from "./components/GivingBack";
import BankAchievement from "./components/BankAchievement";
function App() {
  return (
    <>
    
     <Navbar/>
    
    <Routes>
     <Route path='/' element={<Home/>}/>
      <Route path='/orosaving' element={<Orosaving/>}/>
      <Route path='/orosavingplus' element={<Orosavingplus/>}/>
      <Route path='/orointerest' element={<Orointerest/>}/>
      <Route path='/fixedtime' element={<Fixedtime/>}/>
      <Route path='/hayu' element={<Hayu/>}/>
      <Route path='/handhura' element={<Handhura/>}/>
      <Route path='/ororetirment' element={<Ororetirment/>}/>
      <Route path='/sinq' element={<Sinq/>}/>
      <Route path='/diaspora' element={<Diaspora/>}/>
      <Route path='/orocurrent' element={<Orocurrent/>}/>
      <Route path='/investment' element={<Investment/>}/>
      <Route path='/provident' element={<Provident/>}/>
      <Route path='/salary' element={<Salary/>}/>
      <Route path='/bank' element={<Bank/>}/>
      <Route path='/business' element={<Business/>}/>
      <Route path='/lock' element={<Lock/>}/>
      <Route path='/vahicle' element={<Vahicle/>}/>
      <Route path='/online' element={<Online/>}/>
      <Route path='/orocash' element={<Orocash/>}/>
      <Route path='/personal' element={<Personal/>}/>
      <Route path='/wadiahsaving' element={<Wadiahasaving/>}/>
      <Route path='/amana' element={<Amana/>}/>
      <Route path='/labbaik' element={<Labbaik/>}/>
      <Route path='/mudarabah' element={<Mudarabah/>}/>
      <Route path='/sinqwomen' element={<SinqWomen/>}/>
      <Route path='/handhurachild' element={<Handhurachild/>}/>
      <Route path='/Wadiahretir' element={<Wadiahretir/>}/>
      <Route path='/hayyu' element={<Hayyu/>}/>
      <Route path='/murabahaf' element={<MurabahaF/>}/>
      <Route path='/interestf' element={<InterestF/>}/>
      <Route path='/ijarah' element={<Ijarah/>}/>
      <Route path='/salam' element={<Salam/>}/>
      <Route path='/bankg' element={<BankG/>}/>
      <Route path='/money' element={<Money/>}/>
      <Route path='/partnership' element={<Partnership/>}/>
      <Route path='/trade' element={<Trade/>}/>
      <Route path='/coorespondent' element={<Coorespondent/>}/>
      <Route path='/contact' element={<Contact/>}/>
      <Route path='/searchpage' element={<SearchPage/>}/>
      <Route path='/card' element={<Card/>}/>
      <Route path='/mobile' element={<Mobile/>}/>
      <Route path='/internet' element={<Internet/>}/>
      <Route path='/agent' element={<Agent/>}/>
      <Route path='/atm' element={<Atm/>}/>
      <Route path='/who' element={<WhoWeAre/>}/>
      <Route path='/board' element={<BoardOfDirectors/>}/>
      <Route path='/corporateg' element={<CorporateGovernance/>}/>
      <Route path='/giving' element={<GivingBack/>}/>
      <Route path='/banka' element={<BankAchievement/>}/>
     </Routes>
     <Footer/>
     
     </>
  );
}

export default App;
