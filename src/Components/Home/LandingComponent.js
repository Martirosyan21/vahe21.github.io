import React, {forwardRef, useCallback} from 'react'
import {useUserSource} from "../../hooks/useUserSource";
import RotationLines from '../../assets/images/rotation-lines.png'
import {useMediaDimentionQuery} from "../../hooks/useMediaDimentonQuery";

const LandingComponent = ({}, ref)=>{
    const {isLg, isMd, isL} = useMediaDimentionQuery();
    const {userSource}=useUserSource()

    const calculateRightPosition = useCallback(() => {
        if (isLg) return '-5%';
        if (isL) return '-30%';
        if (isMd) return '-40%';
        return '-45%';
    },[isL, isLg, isMd]);

    const rightPosition = calculateRightPosition();

    return(
        <div ref={ref} className="relative w-full h-screen bg-landing-background bg-cover overflow-hidden bg-no-repeat">
            <div className="flex justify-center md:ml-40">
                <div>
                    <p className=" lg:text-4xl md:text-3xl text-center font-Agrandir_GrandLight text-primary pt-10 md:pt-20 top-5 relative">
                        HEY THERE, I AM ASTRID
                    </p>
                    <p className="lg:text-4xl md:text-4.5xl text-left font-Agrandir_WideBlackItalic text-primary md:pt-2 right-16 relative md:ml-8 " >
                        UI | UX DESIGNER
                    </p>
                    <div className={'flex justify-center md:ml-32'}>
                        <p  className={'relative right-20 text-justify it font-Kanit uppercase text-light text-s'} style={styles.containerStyles}>
                            ON A MISSION TO CREATE OUTSTANDING USER EXPERIENCES AND SOLVE PROBLEMS THROUGH USER - CENTERED DESIGN, ENSURING A SEAMLESS AND INTUITIVE EXPERIENCE
                            <div className={'bg-light flex justify-end'} style={styles.divider}/>
                        </p>
                    </div>
                </div>
            </div>
            <div className={'justify-center flex bottom-5 relative right-96 md:ml-80'}>
                {
                    userSource.map((source)=>(
                        <button key={source.name} className={'cursor-pointer text-light font-Kanit text-s pr-6'} style={styles.buttonTextStyles} onClick={source.action} >
                            {source.name}
                        </button>
                    ))
                }
            </div>
            <div className="absolute  flex " style={{  right:rightPosition, bottom:!isMd? '-10%':'-20%'}}>
                <img src={RotationLines} alt="..." className="h-auto max-w-full" />
            </div>
        </div>
    )
}

const styles = {
    divider:{
        width:1, borderRadius:1, height:window.innerHeight/2.3, marginTop:10
    },
    containerStyles:{
        maxWidth:340,
        fontWeight:'200',
        fontStyle:'italic',
    },
    buttonTextStyles:{
        fontWeight:'200',
        fontStyle:'italic',
    }
}

export default forwardRef(LandingComponent)