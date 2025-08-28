import React, { useState } from 'react'
import "../css/Servicescard.css"
export default function Servicescard({item,itemsRef,}) {
    const [src,setsrc] = useState(item.logo)
  return (
    <div onMouseEnter={(e)=>{
        setsrc("/logos/area/figma.png");
      }}
      onMouseLeave={(e)=>{
       setsrc(item.logo);
      }} ref={itemsRef} className='scard'>
      <img  src={src}/>
      <h5>{item.name} <span>({item.percent})</span></h5>
      <p>{item.desc}</p>
    </div>
  )
}
