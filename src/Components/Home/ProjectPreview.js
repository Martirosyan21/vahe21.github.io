import React from "react";
import {ProjectTag} from "../../UI/Tag";
import {Link} from "react-router-dom";
import MainText from "../../UI/Title/MainText";
import arrowTo from '../../assets/images/arrowTo.png'

const ProjectPreview = ({project})=>(

    <div className={'l:flex pt-35 pb-14'} >
        <img src={project.image} style={{maxWidth: 472, maxHeight: 337}} alt="..." className="h-auto max-w-full"/>
        <div className={'ml-16 pb-12'}/>
        <div className={''} style={{ display:'flex', flexDirection:'column',  justifyContent:'space-between' }}>
            <div>
                <p className={'font-Kanit text-dark text-s pb-2'} style={{fontWeight: '275'}}>{project.title}</p>
                <div className={'flex-row flex'} >
                    {
                        project.tags.map((item) => (
                            <ProjectTag key={item} item={item}/>
                        ))
                    }
                </div>
                <MainText text={project?.description} />
            </div>
            <div>
                <div className={'flex row pb-1'}>
                    {
                        project?.links?.map((item) => {
                            return(
                                <Link to={item.linkTo}>
                                    <div className={'flex row items-center pr-4'}>
                                        <MainText text={item?.title} className={'italic pr-1'}/>
                                        <img src={arrowTo} style={{widht: 16, height: 16, marginTop:25}}/>
                                    </div>
                                </Link>
                            )
                        })
                    }
                </div>
            </div>
        </div>
    </div>
)

export default ProjectPreview