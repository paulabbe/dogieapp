import React, { useEffect, useState } from 'react'
import { Getdog } from "../../api/apidog";
import '../../style/Contact/Contact.css';



export default function Contact() {
  const[data,setData]=useState ([])


  useEffect(()=>{
    async function showData(){
      const resp= await Getdog();
      setData(resp);
      console.log(resp);
      return resp;

    }
    showData();
  },[])
    console.log(data);
  return (
    <>
    <div>
      <p className="dog1">Encuentra a tus lomitos</p>
    </div>
 <div className="dog">
      <div className="dogboxer">
     {data.map((dog)=>(
      <div className='container'>
      <img  src={dog}></img>
      <p>Adopta NO Compres!</p>
      <i class="fa-sharp fa-solid fa-paw"></i>
      </div>
      ))}
     </div>  
  </div>
      </>
      )
}