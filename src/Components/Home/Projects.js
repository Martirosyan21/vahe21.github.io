import React, {forwardRef} from "react";

import ProjectPreview from "./ProjectPreview";

import Octave from "../../assets/images/octave.png";
import August from "../../assets/images/august.png";
import {crioTags, octaveTags} from "../../constants";

const Projects= ({}, projectsRef)=>(
    <div ref={projectsRef} className={'grid l:flex  pt-52 justify-center items-center  pb-36'}>
        <ProjectPreview project={{title:'Octave', image:Octave, tags:octaveTags , linkTo:'/Octave'}}/>
        <div className={'ml-16 md:pb-12'}/>
        <ProjectPreview project={{title:'August', image:August, tags:crioTags, linkTo:'/August'}}/>
    </div>
)

export default forwardRef(Projects)