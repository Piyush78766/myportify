import {  useState } from 'react'
import '../css/Testimonial.css'
import EditableText from '../components/Common/EditAbleText'
import TestomonialCard from '../components/TestomonialCard';
export default function Testimonals() {
    
 const testimonals = [
  {
    user: "John Doe",
    rating: 2,
    description: "Amazing design experience! The team delivered exactly what I wanted with a modern and clean layout."
  },
  {
    user: "Sophia Smith",
    rating: 4,
    description: "Very good design overall. A few minor revisions were needed, but the final output was excellent."
  },
  {
    user: "David Miller",
    rating: 5,
    description: "The creativity and attention to detail were outstanding. My clients loved the final product!"
  },
  {
    user: "Emma Johnson",
    rating: 3,
    description: "Decent work, but I expected more unique elements in the design. Still, it was professional and neat."
  },
  {
    user: "Liam Brown",
    rating: 4,
    description: "Good experience! Communication was clear and timelines were respected. Would recommend."
  },
  {
    user: "Olivia Wilson",
    rating: 5,
    description: "One of the best website designs I’ve ever worked with. Smooth, responsive, and visually appealing."
  },
  {
    user: "Noah Davis",
    rating: 4,
    description: "The project was delivered on time with great quality. A few design tweaks improved it further."
  }
];
  const [currentIndex, setCurrentIndex] = useState(0);



  const next = () => {
   if(currentIndex == testimonals.length-1){
        setCurrentIndex(0)

      }
      else{
        setCurrentIndex(currentIndex+1)

      }
  };

  const prev = () => {
      if(currentIndex == 0){
        setCurrentIndex(0)

      }
      else{
        setCurrentIndex(currentIndex-1)

      }
  };
  return (
    <div className='tcontainer'>
        <div className='intro'>
                <div className='smallheading' ><h6>Testimonial</h6><img src='/icons/bow.png'/></div>

            <EditableText compont='Testimonals' field='Heading' text={"What My Clients Say"}  className={"myh"}/>

                 <section className='tmain '>
                    <aside className='tf'>
                       <TestomonialCard testimonal={testimonals[0]}/>
                       
                       <section className='btnwrapper'>
                        <div 
                          className={`arrowleft ${currentIndex === 0 ? 'disabled' : ''}`} 
                          onClick={prev}
                        >
                          <img src='/logos/area/left.png' alt='left arrow' />
                        </div>
                        <div className='textsteps'>
                          {Array.from({length:testimonals.length},(_,i)=>(
                            <div style={{
                              backgroundColor:currentIndex == i ? "#6c059cf5":"gray"
                            }} className='ts' key={i}>

                            </div>
                          ))}
                        </div>
                         <div 
                        className={`arrowright ${currentIndex >= testimonals.length - 1 ? 'disabled' : ''}`} 
                        onClick={next}
                      >
                        <img src='/logos/area/right.png' alt='right arrow' />
                      </div>
                       </section>
                    </aside>
                    <section className='ts'>
                      <div className='bgwhite'>
                            {/* selected one */}
                            <div>

                            </div>
                      </div>
                      <div className='smwhite'>
                        {/* rest */}
                            <div>
                              {testimonals.filter((item)=> item != item.user).map((item,index)=>(
                                <div className='smallboxes' key={index}>

                                </div>
                              ))}
                            </div>
                      </div>
                    </section>
                </section>
                
        </div>
        
    </div>
    
  )
}
