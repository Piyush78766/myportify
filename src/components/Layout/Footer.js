import React from 'react'
import "../../css/footer.css"
export default function Footer() {
      const socialmediaicons = [
        {
            href:"",
            icon:"facebook.png"
        },
        {
            href:"",
            icon:"insta.png"
        },
        {
            href:"",
            icon:"x.png"
        },
        {
            href:"",
            icon:"dribble.png"
        },
    ]
  return (
    <div className='fmain'>
        <p>Crafted with care by Myportfy@2025</p>
        <div className="icons">
        {socialmediaicons.map((item)=>(
            <div key={item.icon}>
                <img className='contactimgicon' src={`/icons/contact/${item.icon}`}/>
            </div>
        ))}
            </div>
        <div className='flast'>
        <p className='p'>Terms & Condition</p>
        <p>Privacy Policy</p>

        </div>
    </div>
  )
}
