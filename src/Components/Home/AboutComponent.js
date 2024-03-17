import React, {forwardRef} from 'react'
import MainText from "../../UI/Title/MainText";
import UnorderedList from "../../UI/UnorderedList";

import AstridPhoto from "../../assets/images/astridPhoto.png";
import {leftSectionPoints, rightSectionPoints} from "../../constants";
import RotationLines from "../../assets/images/full_circle.png";
import Projects from "./Projects";

const AboutComponent = ({}, ref)=>{
    return(
        <div ref={ref} className="w-full relative bg-about-background bg-cover bg-no-repeat pb-36 z-0">
            <div className="absolute" style={styles.rotationImageStyles}>
                <img src={RotationLines} alt="..." className="h-auto max-w-full"/>
            </div>
            <div className="flex justify-center mr-52">
                <MainText text={`I love diving deep into the user's world to create experiences that truly resonate.`} className={'w-fit ml-2 self-end max-w-96'}/>
                <div className={'bg-astrid-photo bg-no-repeat mt-64'}>
                    <img src={AstridPhoto} alt="..." style={styles.imgSize} />
                </div>
            </div>
            <p className=" lg:text-4xl md:text-3xl text-center font-Agrandir_GrandLight font-extralight	text-primary pt-3">
                IT'S NOT JUST ABOUT PIXELS
            </p>
            <div className={'flex  justify-center '} >
            <div className={'w-96 mr-24 self-end relative top-28'}>
                <UnorderedList list={leftSectionPoints} className={'list-disc list-inside'} itemClassNem={'pb-8 font-Kanit text-s text-dark'}/>
            </div>
                <MainText text={`it's about understanding what makes users tick and building designs that speak to their hearts.`} className="w-fit mr-10 self-end max-w-96">
                    <div className={'bg-dark h-60 mt-5 ml-0.5'} style={styles.containerWidth}/>
                    <MainText text={`My journey into the UI/UX realm is all about bringing tech and user needs together, but not just through visuals. I'm a creative soul at heart, and while I began as a graphic designer, I quickly realized that it wasn't enough. That's when I fell head over heels for user research and UX design.`} className={'pt-6'}/>
                    <MainText text={`With 3 years of experience I'm currently part of a dynamic venture studio company, partnering with startups and established businesses to bring their digital dreams to life. In my role, I take charge of several critical responsibilities. This includes crafting design proposals that outline innovative solutions and design systems to ensure consistency and efficiency in our projects. I'm all about teamwork, collaborating seamlessly with developers, product managers, and our partners to transform ideas into reality`} className={'pt-6'}/>
                    <MainText text={'My strong suit includes effective time management and ensuring projects stay on track. This multifaceted approach enables me to deliver top-notch UX/UI designs that truly resonate with our users.'} className={'pt-6'}/>
                    <div className={'bg-dark h-32 mt-5'} style={styles.containerWidth}/>
                    <UnorderedList list={rightSectionPoints} className={'list-disc list-inside pt-20'} itemClassNem={'pb-8 font-Kanit text-s text-dark'}/>
                </MainText>
            </div>
            <Projects/>
        </div>
    )
}

const styles = {
    containerWidth:{width:1},
    imgSize: {width: 244, height: 244},
    rotationImageStyles:{left:'-20%', top:'10%', zIndex:-1}
}

export default forwardRef(AboutComponent)