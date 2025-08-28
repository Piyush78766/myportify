import React from 'react'

export const  HerosectionsBackground=({children})=> {
    const cols = 14;
  const rows = 7;
  const total = cols * rows;
 const cells = Array.from({ length: total });


  return (
     <div
     id='herobg'

    //  As in Assignment I have to code this below css in css file but i am unable to pass this variable sp using internal css here
      style={{
        gridTemplateColumns: `repeat(${cols}, 1fr)`, 
        gridTemplateRows: `repeat(${rows}, 1fr)`,  
        
      }}
    >
        <div className='triangle-bg'>
            <div className='traingle'/>
        </div>
      {cells.map((_, i) => (
        <div
          key={i}
    //  As in Assignment I have to code this below css in css file but i am unable to pass this variable sp using internal css here

          style={{
            borderRight:
              (i + 1) % cols === 0 ? "none" : "0.1px solid rgba(255, 255, 255, 0.1)",
            borderBottom:
              i >= cols * (rows - 1)
                ? "none"
                : "0.5px solid rgba(255, 255, 255, 0.1)",
          }}
        />
      ))}
      {children}
    </div>
  )
}


