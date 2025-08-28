import React from 'react'
import '../css/contact.css'
import EditableText from '../components/Common/EditAbleText'
import AddButton from '../components/Common/AddButton';
export default function Contact() {
    const smallcontactforms = [
        {
            icon:"/icons/contact/location.png",
            heading:"Address",
            subheading:"Royal Ln. Mesa, New Jersey 45463"
        },
                {
            icon:"/icons/contact/email.png",
            heading:"Email",
            subheading:"pppv195@gmail.com"
        },
                {
            icon:"/icons/contact/phone.png",
            heading:"Phone Number",
            subheading:"+12345 67890"
        },
                {
            icon:"/icons/contact/web.png",
            heading:"Website",
            subheading:"www.MyPortify.Com"
        },
    ];

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
    
 <div className="contactcontainer">
  {/* Left Section */}
  <div className="contactinfo">
    <EditableText compont='Contact' field='Heading' className={"contactheading"} text={"Contact <span class='special'>Us</span>"}/>
    <p className="contacttext">Lorem Ipsum Dolor Sit Amet, Consectetur Adipisicing Elit.</p>
    <div className="infobox">
        {smallcontactforms.map((item,index)=>(
        <SmallContactBoxes item={item} key={index}/>

        ))}
    </div>
    <div className="socialmedia">
      <p>Share Social Media</p>
      <div className="icons">
        {socialmediaicons.map((item)=>(
            <div key={item.icon}>
                <img className='contactimgicon' src={`/icons/contact/${item.icon}`}/>
            </div>
        ))}
      </div>
    </div>
  </div>
  {/* Right Section (Form) */}
  <div className="contactform">
    <div className='contactformheading'>
        <h2 className="formheading">Add Details</h2>
        <img src='/icons/bowWhite.png'/>
    </div>
    <form className='contactformmain'>
      <label>Name*</label>
      <input type="text" placeholder="Name" />
      <label>Email Address*</label>
      <input type="email" placeholder="Email" />
      <label>Phone Number*</label>
      <input type="tel" placeholder="Phone" />
      <label>Enter Comment*</label>
      <textarea placeholder="What Would You Like To Discuss?" defaultValue={""} />
                      <AddButton  defaultbtn={{btnstyle:"outlined", btntext:"Submit",btnhref:"/",color:"orangered",btnsize:"medium", icon:"",rounded:"20px"}}/>
      
    </form>
  </div>
</div>

  )
}


function SmallContactBoxes ({item})  {
    return (
        <div className='contactbox'>
                <img src={item.icon}/>
                <div className='textholder'>
                    <p className='grayheading'>{item.heading}</p>
                    <p className='whiteheading'>{item.subheading}</p>
                </div>
      </div>
    )
}