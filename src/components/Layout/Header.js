import AddButton from '../Common/AddButton';

export default function Header() {
    const links = [
        {name:"Home",url:"/"},
        {name:"About Us",url:"/"},
        {name:"Services",url:"/"},
        {name:"Project",url:"/"},
        {name:"Blog",url:"/"},
    ]

  return (
    <div id='header'>
      {/* Divide in three part logo +main+btns  */}
      <img src='/logo512.png' className='navlogo'/>
      <ul className='navpanel'>
           {links.map((link,index)=>(
             <li key={index}><a href={link.url}></a>{link.name}</li>
           ))}
      </ul>
     {/* Add Btn */}
           <AddButton/>
    </div>
  )
}
