import React from 'react'
import '../css/blog.css'
import EditableText from '../components/Common/EditAbleText'
import AddButton from '../components/Common/AddButton'
export default function Blog() {
  return (
    <div className='blogmain' id='blog'>
      <div>
        <div>
            <EditableText compont='Blog' field='Heading' text={"Blog <span class='special'>About</span> \n<br/> Personal Portfolio"} className={"blogheading"}/>
        </div>
        <div >
            <EditableText compont='Blog' field='subHeading' text={"Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer nec odio. Praesent libero. Sed cursus ante dapibus diam. Sed nisi. Nulla quis sem at nibh elementum imperdiet. Duis sagittis ipsum."} className={"blogsubheading"}/>
            <AddButton  defaultbtn={{btnstyle:"outlined", btntext:"View All Blog",btnhref:"/",color:"orangered",btnsize:"small", icon:"",rounded:"80px"}}/>
        </div>
      </div>
      {/* Layout demo only for blogs */}
      <div className='bmain '>
        <div  className='blogsame '>
           <div className='smallblogcard1 '>
              <div className='whiteabove1'></div>
              <div className='down1 '>
                <div>
                  <h6>Website</h6>
                  <h4>Website</h4>
                </div>
                    <img src='/icons/smallarrow.png'/>
              </div>
             </div>
        </div>
         <div className='blogsame '>
          {/*  */}
             <div className='smallblogcard '>
              <div className='whiteabove'></div>
              <div className='down '>
                <div>
                  <h6>Website</h6>
                  <h4>Website</h4>
                </div>
                    <img src='/icons/smallarrow.png'/>
              </div>
             </div>
             {/*  */}
             <div className='smallblogcard '>
              <div className='whiteabove'></div>
              <div className='down '>
                <div>
                  <h6>Website</h6>
                  <h4>Website</h4>
                </div>
                    <img src='/icons/smallarrow.png'/>
              </div>
             </div>
         </div>
      </div>
    </div>
  )
}
