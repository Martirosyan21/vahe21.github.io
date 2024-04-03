import React from "react";

import ProjectPreview from "./ProjectPreview";

import Octave from "../../assets/images/octave.png";
import August from "../../assets/images/august.png";
import {crioTags, octaveTags} from "../../constants";

const Projects= ()=>(
    <div className={'flex mt-52 justify-center ml-28 mr-28 pb-36'}>
        <ProjectPreview project={{title:'Octave' ,image:Octave, tags:octaveTags}}/>
        <div className={'ml-16'}/>
        <ProjectPreview project={{title:'Crio' ,image:August, tags:crioTags}}/>
    </div>
)

export default Projects