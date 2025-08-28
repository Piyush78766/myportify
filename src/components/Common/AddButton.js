import  { useEffect, useRef, useState } from 'react'

import PanelInputbox from './PanelInputbox';

function AddButtonSystem({onClick}) {
  return (
     <div id='addbtn'  onClick={onClick}> 
            + Add Button
    </div>
  )
}



export default function AddButton({defaultbtn}) {
   const dropdownsections = [
  {
    name: "Hero Section",
    href: "#hero",
  },
  {
    name: "About",
    href: "#about",
  },
  {
    name: "Services",
    href: "#services",
  },
  {
    name: "Projects",
    href: "#projects",
  },
  {
    name: "Blog",
    href: "#blog",
  },
    ];
const sizeMap = {
  small: { fontSize: "15px", padding: "4px 8px" },
  medium: { fontSize: "20px", padding: "6px 12px" },
  large: { fontSize: "26px", padding: "10px 16px" },
};
    // add btn logic
    const [btns, setbtns] = useState(defaultbtn ? [defaultbtn] : []);
    // dummy store data
    const [btndata,setbtndata] = useState({btnstyle:"", btntext:"",btnhref:"",color:"",btnsize:"", icon:""})
    const [showoverlay,setShowOverlay] = useState(false);
    const colorRef = useRef(null);
    const panelRef = useRef(null);
    // check if edit mode or not
    const [editmode,seteditmode] = useState(false);
    const [editindex,seteditindex] = useState(false);
    // using useffect for one reason if click outside the panel then useffect closes the panel
  useEffect(() => {
    const handleClickOutside = (event) => {
      if (panelRef.current && !panelRef.current.contains(event.target)) {
        setShowOverlay(false);
      }
    };
    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);
    // each btn will hvae the 
    // btnstyle, btntext,btnhref,color,btnsize, icon and for icon  you have to 
    // press windows+. to show emojis yes we use emojis as an icon here later we can change to img or uplload img options
   const AddbtnSubmit = (btn) => {
  setbtns(prev => [...prev, btn]);
};

    const EditBtn = (index, updatedData) => {
         setbtns(prev =>
    prev.map((btn, i) =>
      i === index ? { ...btn, ...updatedData } : btn
    )
  );
};

const [panelPos, setPanelPos] = useState({ top: 0, left: 0 });

const openPanelAt = (e) => {
    const rect = e.target.getBoundingClientRect();
    const panelWidth = 650; 
    const panelHeight = 1200; 

    
    let left = rect.left + window.scrollX;
    if (left + panelWidth > window.innerWidth) {
        left = window.innerWidth - panelWidth - 10; 
    }
    if (left < 10) left = 10; 

    
    let top = rect.bottom + window.scrollY;
    if (top + panelHeight > window.scrollY + window.innerHeight) {
        top = rect.top + window.scrollY - panelHeight; 
    }
    if (top < window.scrollY + 10) top = window.scrollY + 10; 

    setPanelPos({ top, left });
    setShowOverlay(true);
};


  return (
      <div>
        {/* as i know in assignment we have to pass the style to externall css but with respect to props we have to code
        here style because i am able to pass variable from this to css yes i can 
        do but this is not give the best result as it takes to load or reflect or css sometimes will not load
        so at conclusion we code here for best effect inline css */}
        {btns.length == 0 ? (
           <AddButtonSystem onClick={(e)=>{openPanelAt(e)}}/>
        ):
  <div style={{display:"flex",flexWrap:'wrap'}}>
    {
            btns.map((btn, i) => {
  const sizeStyle = sizeMap[btn.btnsize] || sizeMap.medium;
const formatHref = (href) => {
  if (
    href.startsWith("http://") ||
    href.startsWith("https://") ||
    href.startsWith("mailto:") ||
    href.startsWith("tel:") ||
    href.startsWith("#")
  ) {
    return href;
  }
  return `https://${href}`;
};

const isInternalId = (href) => href.startsWith("#");

  return (
    <div key={i} style={{ margin: "18px 10px", display: "flex", alignItems: "center",width:'fit',borderRadius:btn.rounded || "0px" }} >
      <a
       href={formatHref(btn.btnhref)}
        target={isInternalId(btn.btnhref) ? "_self" : "_blank"}
      rel={isInternalId(btn.btnhref) ? undefined : "noopener noreferrer"}
        style={{
          display: "inline-flex",
          alignItems: "center",
          justifyContent: "center",
          background: btn.btnstyle === "fill" ? btn.color : "transparent",
          border: btn.btnstyle === "outlined" ? `2px solid ${btn.color}` : "none",
          color: btn.btnstyle === "fill" ? "#fff" : btn.color,
          borderRadius: "8px",
          textDecoration: "none",
          marginRight: "8px",
          ...sizeStyle,
        }}
      >
        {btn.icon && <span style={{ marginRight: "6px" }}>{btn.icon}</span>}
        {btn.btntext}
      </a>

      <span
        style={{ cursor: "pointer", fontSize: "18px",border:"2px solid white",borderRadius:"10px" ,padding:2 }}
        onClick={(e) => {
          openPanelAt(e)
          setbtndata(btn);
          seteditmode(true)
          seteditindex(i);
        }}
      >
        ✏️
      </span>
    </div>
  );
})
    }</div>}
         {showoverlay && (
        <div
          ref={panelRef}
           style={{ top: panelPos.top, left: panelPos.left }}
         className='panel'
        >
          <div style={{
            right:"15px",
            position:'absolute',
            color:"white",
            fontSize:24,
            fontWeight:"800",
            cursor:"pointer"

          }} onClick={()=>{
            setShowOverlay(false);
            setbtndata({})
          }}>X</div>
          <h6 className='pheading'>Link Button to Page or URL</h6>
          <p className='pdec'>You can select any specific page or paste URL.</p>
         <select className='cse'  onChange={(e) => {
                     setbtndata({ ...btndata, btnhref: e.target.value });
            }}>
            {dropdownsections.map((section, i) => (
                <option key={i} value={section.href}>
                {section.name}
                </option>
            ))}
            </select>
            {/* Normal btn fields */}
           <PanelInputbox title={"Button Style"} desc={"Filled with solid color or outlined"}
           input={()=>(
           <select
  className="cse "
  onChange={(e) => {
    setbtndata({ ...btndata, btnstyle: e.target.value });
  }}
>
  <option value="fill">Fill</option>
  <option value="outlined">Outlined</option>
</select>
           )}
           />
{/* icon */}
  <PanelInputbox title={"Button Icon"} desc={"Button Icon"}
           input={()=>(
                <input type='text' placeholder='Button Icon' value={btndata.icon} onChange={(e)=>setbtndata({...btndata,icon:e.target.value})}
                className='pinput '
                />
           )}
           />
           {/* Text */}
            <PanelInputbox title={"Button Text"} desc={"Button Text"}
           input={()=>(
                <input type='text' placeholder='Button Title' value={btndata.btntext} onChange={(e)=>setbtndata({...btndata,btntext:e.target.value})}
                className='pinput '
                />
           )}
           />
           {/* Color */}
            <PanelInputbox title={"Color"} desc={"Button Color"}
           input={()=>(
            <div onClick={(e)=>{
              colorRef.current.click()
            }} className='pinputcolor'>
              <input ref={colorRef} type='color'  value={btndata.color} onChange={(e)=>setbtndata({...btndata,color:e.target.value})}
               style={{
                borderRadius:"20px"
               }}
                />
                <p style={{fontSize:20,color:"black"}}>▼</p>
              </div>
           )}
           />
           {/* Size */}
            <PanelInputbox title={"Button Size"} desc={"Size of Button"}
           input={()=>(
           <select
  className="cse "
  onChange={(e) => {
    setbtndata({ ...btndata, btnsize: e.target.value });
  }}
>
  <option value="small">Small</option>
  <option value="medium">Medium</option>
  <option value="large">Large</option>
</select>
           )}
           />
           {/* Href or Link */}
            <PanelInputbox title={"Link/Href"} desc={"Link of webpage or phone with tel:9899999999"}
           input={()=>(
    <input type='text' placeholder='Button Link' value={btndata.btnhref} onChange={(e)=>setbtndata({...btndata,btnhref:e.target.value})}
                className='pinput '
                />
           )}
           />
          <button className='psubmitbtn' onClick={() => {
            if(editmode){
              EditBtn(editindex,btndata)
             setShowOverlay(false)
             seteditmode(false);
             seteditindex(null)
            }
            else{
              AddbtnSubmit(btndata);
             setShowOverlay(false)

            }
          }}>Submit</button>
           <br/>

         {editmode && (
          <button className='pcancelbtn' onClick={() => {
             setbtns(prev => prev.filter((_, i) => i !== editindex));
             setShowOverlay(false)
             seteditmode(false);
             seteditindex(null)
          }}>Delete</button>
         )}
        </div>
      )}
      </div>
  )
}
