import React from 'react'
import{BrowserRouter,Route,Routes} from "react-router-dom";

import Home from '../../pages/Home/Home';
import  Contact  from '../../pages/contact/Contact';
import Notfound from '../../pages/404/Notfound';
import Header from '../Header/Header';
import Footer  from '../Footer/Footer';


export default function Main() {
  return (
    <BrowserRouter>
     <Header />
     
       <Routes>
        
         <Route path="/" element={< Home />}/>
         <Route path="/Contact" element={< Contact />}/>
         
         <Route path="*" element={< Notfound />}/>
         
       </Routes>
       <Footer />
      </BrowserRouter>
  )
}

