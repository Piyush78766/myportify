import React from 'react'
import '../css/About.css'
import EditableText from '../components/Common/EditAbleText'
import AddButton from '../components/Common/AddButton'
export default function AboutUs() {
  return (
    <div className='main'>
      <div className='intro ' >
            <div className='box '>
                <div className='mainbox'>
                    <div className='frect'></div>
                    <div className='srect'></div>
                    {/* <div className='curve'></div> */}
                    {/* Now content */}
                     <div className='content '>
                             <p><span>22+</span><br/>Years of  Experience</p>
                    </div>
                    {/*  Second Content*/}
                     <div className='content2 '>
                             <ul>
                                <li><img style={{width:"15%"}} src='/icons/uparrow.png'/></li>
                                <li><img style={{width:"15%"}} src='/icons/uparrow.png'/></li>
                                <li><img style={{width:"15%"}} src='/icons/uparrow.png'/></li>
                                <li><img style={{width:"15%"}} src='/icons/uparrow.png'/></li>
                                <li><img style={{width:"15%"}} src='/icons/uparrow.png'/></li>
                             </ul>
                    </div>
                </div>
            </div>
            <div className='content '>
                <div ><h6>About Us</h6><img src='/icons/bow.png'/></div>
                <br/>
                <EditableText compont='About' field='Heading' text={"\"Crafting Enjoyable Digital Solutions From Business Ideas.\""} className={"abtext"}/>
                <br/>

                <EditableText compont='About' field='Subheading' text={"\"I specialize in interface, digital product & user experience design, focusing on building products, brands, and websites.\""} className={"abtext2"}/>
                <br/>
                <br/>

               <div class="main2">
                    <ul>
                        <li><img src='/icons/rightarrow.png'/>Avoid These Mistakes</li>
                        <li><img src='/icons/rightarrow.png'/>Beyond the Norm</li>
                        <li><img src='/icons/rightarrow.png'/>Your New Venture</li>
                        <li><img src='/icons/rightarrow.png'/>Forge Destiny</li>
                        <li><img src='/icons/rightarrow.png'/>New Fonts</li>
                        <li><img src='/icons/rightarrow.png'/>Dare to be Different</li>
                    </ul>
                </div>
                <br/>

    {/* Download cv btn */}
    <AddButton  defaultbtn={{btnstyle:"outlined", btntext:"Download CV",btnhref:"/piyush_coder.pdf",color:"orangered",btnsize:"medium", icon:"⇩",rounded:"20px"}} />
            
            </div>
      </div>
    </div>
  )
}

//  <div className='b'>
//                         <div className='content'>
//                             <p><span>22+</span><br/>Years of Experience</p>
//                         </div>
//                         {/* box white */}
//                         <div className='fbox'>
//                         </div>
//                    </div>
//                    {/* Second phase */}
//                    <div className='second'>
                        
//                         <div className='fbox'>
//                         </div>
//                    </div>
//                    {/* Third Phase */}
//                    <div className='b'>
//                         <div className='content'>
//                             <p><span>22+</span><br/>Years of Experience</p>
//                         </div>
//                         {/* box white */}
//                         <div className='fbox'>
//                         </div>
//                    </div>