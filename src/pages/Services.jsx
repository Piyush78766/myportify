import React, { useRef, useState } from 'react'
import '../css/Services.css'
import EditableText from '../components/Common/EditAbleText'
import Servicescard from '../components/Servicescard';
export default function Services() {
     const sliderRef = useRef(null);
  const [currentIndex, setCurrentIndex] = useState(0);
    
    const areas = [
        
  
        {
            name:"WordPress",
            percent:"95%",
            logo:"/logos/area/wordpress.png",
            desc:"Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer nec odio. Praesent libero. Sed cursus ante dapibus diam."
        },
        
         {
            name:"Figma",
            percent:"85%",
            logo:"/logos/area/wordpress.png",
            desc:"Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer nec odio. Praesent libero. Sed cursus ante dapibus diam."
        },
         {
            name:"Web Development",
            percent:"90%",
            logo:"/logos/area/react.png",
            desc:"Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer nec odio. Praesent libero. Sed cursus ante dapibus diam."
        },
         {
            name:"Graphics Design",
            percent:"88%",
            logo:"/logos/area/graphic.png",
            desc:"Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer nec odio. Praesent libero. Sed cursus ante dapibus diam."
        },
         { name: "SEO", percent: "80%", logo: "/logos/area/wordpress.png", 
            desc:"Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer nec odio. Praesent libero. Sed cursus ante dapibus diam."

          },
        { name: "UI/UX Design", percent: "87%", logo: "/logos/area/wordpress.png", 
            desc:"Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer nec odio. Praesent libero. Sed cursus ante dapibus diam."

         }
    ]
    const cardWidth = 250; 
  const visibleCards = 2; 

  const next = () => {
    if (currentIndex < areas.length - visibleCards) {
      setCurrentIndex(currentIndex + 1);
      sliderRef.current.style.transform = `translateX(-${(currentIndex + 1) * cardWidth}px)`;
    }
  };

  const prev = () => {
    if (currentIndex > 0) {
      setCurrentIndex(currentIndex - 1);
      sliderRef.current.style.transform = `translateX(-${(currentIndex - 1) * cardWidth}px)`;
    }
  };
  return (
    <div className='services' id='services'>
        <div className='intro'>
            <EditableText compont='Services' field='Heading' text={"My Expert Areas"}  className={"myh"}/>
            <br/>
            <EditableText compont='Services' field='SubHeading' text={"\"Express yourself freely and creatively, using customizable templates or crafting your own designs from scratch, with access to a vast and immersive library.\""}  className={"myp "}/>
        <br/>

        <br/>
        <div className='slider'>
          <div 
            className={`arrowleft ${currentIndex === 0 ? 'disabled' : ''}`} 
            onClick={prev}
          >
            <img src='/logos/area/left.png' alt='left arrow' />
          </div>
<div className='wrapper'>
              <div className='items '   ref={sliderRef} >
            {areas.map((area, index) => (
              <Servicescard item={area}  key={index}/>
            ))}
        </div>
</div>
          <div 
            className={`arrowright ${currentIndex >= areas.length - 1 ? 'disabled' : ''}`} 
            onClick={next}
          >
            <img src='/logos/area/right.png' alt='right arrow' />
          </div>
        </div>
        </div>
    </div>
  )
}
