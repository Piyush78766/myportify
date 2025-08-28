import AddButton from '../Common/AddButton';

export default function Header() {
    const links = [
        {name:"Home",url:"#home"},
        {name:"About Us",url:"#about"},
        {name:"Services",url:"#services"},
        {name:"Project",url:"#project"},
        {name:"Blog",url:"#blog"},
    ]

  return (
    <div id='header'>
      {/* Divide in three part logo +main+btns  */}
      <img src='/logo512.png' className='navlogo'/>
     <ul className='navpanel'>
        {links.map((link, index) => (
          <li key={index}>
            <a href={link.url}>{link.name}</a>
          </li>
        ))}
      </ul>
     {/* Add Btn */}
           <AddButton/>
    </div>
  )
}
