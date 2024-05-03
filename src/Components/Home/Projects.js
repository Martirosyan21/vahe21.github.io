import React, {forwardRef} from "react";

import ProjectPreview from "./ProjectPreview";

import {augustProjectInfo, octaveProjectInfo} from "../../constants";
import MainText from "../../UI/Title/MainText";
import prtik from "../../assets/images/prtik.png";

const Projects = ({}, projectsRef)=>(
    <div ref={projectsRef}>
        <div className={'grid justify-center items-center  pt-35'}>
            <div className={'grid l:flex  pt-20 justify-start items-center'}>
                <img src={prtik} alt="..." className="w-6 h-6 mt-5 mr-2.5" />
                <MainText text={`Currently designing @ Tidepool Labs`} />
            </div>
            <MainText text={`I’m part of a dynamic venture studio company. We partner with founders to build and launch companies from scratch, bringing digital dreams to life.`} className={'pt-4'}/>
            <MainText text={`Selected work: Dive into some of the projects I've had the pleasure of crafting from 0 to 1.`} className={'pt-6'}/>
            <div  className={'pt-20'}>
                <ProjectPreview project={octaveProjectInfo}/>
                <ProjectPreview project={augustProjectInfo}/>
            </div>
        </div>
    </div>

)

export default forwardRef(Projects)