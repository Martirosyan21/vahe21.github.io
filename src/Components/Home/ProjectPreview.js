import React from "react";
import {ProjectTag} from "../../UI/Tag";

const ProjectPreview = ({project})=>(
    <div>
        <img src={project.image} alt="..." className="h-auto max-w-full"/>
        <p className={'font-Kanit text-dark text-s pt-4 pb-2'} style={{fontWeight:'275'}}>{project.title}</p>
        <div  className={'flex-row flex'} style={{flexWrap:'wrap'}}>
            {
                project.tags.map((item)=>(
                    <ProjectTag key={item} item={item}/>
                ))
            }
        </div>
    </div>
)

export default ProjectPreview