import React from "react";
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import Home from './components/Home';
import Main from './components/Main';
import Orosaving from './components/Orosaving';
import { Routes,Route } from "react-router-dom";

function App() {
  return (
    <div >
     <Navbar/>
      <Main/>
     <Home/>
     <Orosaving/>
     <Footer/>
     
    </div>
  );
}

export default App;
