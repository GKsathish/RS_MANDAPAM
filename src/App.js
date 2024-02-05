import React from "react";
import {BrowserRouter,Routes,Route} from 'react-router-dom';
import Header from "./Components/Header/Header";
import Home from "./Components/Home/Home";
import About from "./Components/About/About";
import ContactUs from "./Components/ContactUs/ContactUs";
 import Headerm from "./Components/Headerm/Headerm";

import './App.css';

const App = () => {
  return (
    <>
     <BrowserRouter>
     <Headerm/>
    <Header/>

    <Routes>
     <Route path="/" element={<Home/>} />
     <Route path="/About" element={<About/>} />

     <Route path="/Contact" element={<ContactUs/>} />

   </Routes>
    </BrowserRouter> 
  
    </>
  );
};

export default App;
