import React from 'react'
import{  Link } from "react-router-dom";

import style from '../../style/Header/Header.module.css';

export default function Header() {
  return (
    <nav className={style.containerheader}>
       
       <Link to= "/">Home</Link>
       <br />
       <Link to= "/Contact">Dogs</Link>
    </nav>
      
    
    
  )
}
