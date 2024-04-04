import React, {forwardRef} from "react";

import ProjectPreview from "./ProjectPreview";

import Octave from "../../assets/images/octave.png";
import August from "../../assets/images/august.png";
import {crioTags, octaveTags} from "../../constants";
import {useMediaDimentionQuery} from "../../hooks/useMediaDimentonQuery";

const Projects= ({}, projectsRef)=>{
    const {isL, isMd,isLg, isXl}= useMediaDimentionQuery()

    return (
        <div ref={projectsRef} className={'flex mt-52 justify-center items-center l:items-start ml-28 mr-28 pb-36'} style={{flexDirection:!isL ? 'column' : 'row' , marginRight:isL ? 112:0, marginLeft:isL ? 112:0, }}>
            <ProjectPreview project={{title:'Octave' ,image:Octave, tags:octaveTags}}/>
            <div className={'ml-16 md:pb-12'}/>
            <ProjectPreview project={{title:'Crio' ,image:August, tags:crioTags}}/>
            <div style={{height:1000}}/>
        </div>
    )
}

export default forwardRef(Projects)