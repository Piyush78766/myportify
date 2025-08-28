import React from 'react'

export default function Logos() {
    const urls = [
        "/logos/aven.webp",
        "/logos/goldline.webp",
        "/logos/kyan.png",
        "/logos/velocity.jpeg",
        "/logos/music.webp",
    ]
  return (
 <div>
      <div className="curved-line"></div>
      <div className='splitter'>
    
      {urls.map((url, index) => (
       <img 
  key={index} 
  src={url} 
  alt={`Logo ${index + 1}`} 
  style={{ width: '50px', height: 'auto' }} 
/>

      ))}
    </div>
      <div className="curved-line2"></div>

 </div>
  )
}
