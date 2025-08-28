import React from 'react'

export default function TestomonialCard({testimonal}) {
  return (
    <div>
       <img src='/comma.png'/>
       <br/>
       <br/>
       <span className='tstarheading'>{testimonal.user}</span>
       <br/>
    <div style={{display:"flex",alignItems:'center'}}>
            {Array.from({ length: 5 }, (_, i) => (
                <img
                key={i}
                src={i < testimonal.rating ? "/star.png" : "/emptystar.png"}
                alt="star"
                className="tstarimg"
                />
            ))}
            </div>
       <br/>

            {/* Descrioption */}
            <span className='tstardesc'>{testimonal.description}</span>
    </div>
  )
}
