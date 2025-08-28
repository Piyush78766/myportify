import React from 'react'
import "../css/explore.css"
import EditableText from '../components/Common/EditAbleText'
import AddButton from '../components/Common/AddButton'

export default function Explore() {
  return (
    <div className='exploremain'>
        <div className='exwhitebox'>
            <div className='exwhiteinner'>

            </div>
            <div className='exsecond '>
                <EditableText compont='Explore' field='Heading' text={"Have Any Projects in Mind? <br/> Get in Touch"} className={"exh1"}/>
                                
                                <br/>
                                <AddButton  defaultbtn={{
                                    btnstyle:"outlined",
                                     btntext:"Explore More",
                                     btnhref:"/",
                                     color:"#1a0026",
                                     btnsize:"medium",
                                      icon:"",rounded:"20px"}}/>
                    <img src='/icons/pentagon.png' className='exsimg'/>
            </div>
        </div>
    </div>
  )
}
