import {  useState } from 'react'
import '../css/Project.css'
import EditableText from '../components/Common/EditAbleText'
export default function Projects() {
    
 const projects = [
  {
    name: "Website Design -1",
    date: "Product Design 2024"
  },
  {
    name: "Website Design -2",
    date: "Product Design 2023"
  },
  {
    name: "Website Design -3",
    date: "Product Design 2021"
  },
  {
    name: "Website Design -4",
    date: "Product Design 2022"
  },
  {
    name: "Website Design -5",
    date: "Product Design 2020"
  },
  {
    name: "Website Design -6",
    date: "Product Design 2024"
  },
  {
    name: "Website Design -7",
    date: "Product Design 2023"
  }
];

// filters
const filters = [
    "All",
    "Branding",
    "Design",
    "Development",
    "Content Writing",
    "Marketing"
]
const [selected,setSelected] = useState("All");
  

  return (
    <div className='services' id='project'>
        <div className='intro'>
                <div className='smallheading'><h6>My Portfolio</h6><img  src='/icons/bow.png'/></div>

            <EditableText  compont='Projects' field='Heading' text={"Review My Latest Projects"}  className={"myh"}/>
        <br/>

        {/* pcfm means pproject card filter main container /c for childer for li*/}
        <ul className='pcfm'>
            {filters && filters.map((item,index)=>(
                <li onClick={()=>{
                    setSelected(item)
                }} className={`pcmc`}
                style={{
                    color:item==selected?"orangered":"whitesmoke"
                    ,padding:"4px 10px",
                    border:item==selected && "2px solid orangered",
                    borderRadius:10,
                    
                }}
                >
                    {/* Breaking rule as for selected one style should be pass here  */}
                    {item}</li>
            ))}
        </ul>
        <div className='slider sliderdiv'>
         
<div className='wrapper'>
              <div className='items '    >
            {projects.map((project, index) => (
             <div key={index} >
                <div className='project-card'>
                    </div>
                    {/* pc mean product card */}
                    <p className='pctitle'>{project?.name}</p>
                    <p className='pcdate'>{project?.date}</p>
                </div>
            ))}
        </div>
</div>
         
        </div>
        </div>
    </div>
  )
}
