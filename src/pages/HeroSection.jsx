import React from 'react'
import { HerosectionsBackground } from '../components/Herosections'
import Header from '../components/Layout/Header'
import "../css/HeroSection.css"
import AddButton from '../components/Common/AddButton'
import EditAbleText from '../components/Common/EditAbleText'
import EditableText from '../components/Common/EditAbleText'
export default function HeroSection() {

  return (
    <HerosectionsBackground>
        <div
        id='herocontainer'
        className=''
      >
        <Header/>
        <div className="outer ">
          
          <div className="inner  ">
           
            <div className='first '>
                <div>
                 <EditAbleText compont='Hero' field='Heading' text={"Hello I\'M 🖐️\n                Piyush Lal"} className={"heading"}/>
                <br/>
                <EditableText  compont='Hero' field='SubHeading' text={"I focus on making digital experiences\n that are easy to use, enjoyable, and get the job done."} className={""}/>
                <AddButton  defaultbtn={{btnstyle:"outlined", btntext:"How I Work ↗",btnhref:"/",color:"orange",btnsize:"medium", icon:""}}/>
                </div>
              </div>
              {/* For Arrow */}
              <div className='arrowdiv '>
                <img src='/icons/arrow.png' />
              </div>
            <div className='second '>
              <div className='whitebox'>

              </div>
            </div>
          </div>
        </div>
   

      </div>
    </HerosectionsBackground>
  )
}
