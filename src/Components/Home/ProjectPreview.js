import React from "react";
import {ProjectTag} from "../../UI/Tag";
import MainText from "../../UI/Title/MainText";
import arrowTo from "../../assets/images/arrowTo.png";
import {Link} from "react-router-dom";

const ProjectPreview = ({project})=>(

    <div className={'l:flex pt-35 pb-14'} >
        <img src={project.image} style={{maxWidth: 430, maxHeight: 306}} alt="..." className="h-auto max-w-full"/>
        <div className={'ml-10 pb-12'}/>
        <div style={{ display:'flex', flexDirection:'column',  justifyContent:'space-between' }}>
            <div>
                <p className={'font-Kanit text-dark text-s pb-2'} style={{fontWeight: '275'}}>{project.title}</p>
                <div className={'flex-row flex'} >
                    {
                        project.tags.map((item, index) => (
                            <ProjectTag key={item.toString()+index} item={item}/>
                        ))
                    }
                </div>
                <MainText text={project?.description} />
            </div>
            <div>
                <div className={'flex row pb-1'}>
                    {
                        project?.links?.map((item) => (
                            <Link to={item?.linkTo}>
                                <div className={'flex row items-center pr-4'}>
                                    <MainText text={item?.title} className={'pr-1'} style={{fontStyle: 'italic'}}/>
                                    <img src={arrowTo} style={{widht: 16, height: 16, marginTop: 25}}/>
                                </div>
                            </Link>
                        ))
                    }
            </div>
        </div>
    </div>
</div>
)

export default ProjectPreview