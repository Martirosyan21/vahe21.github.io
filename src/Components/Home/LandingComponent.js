import React, {forwardRef, useCallback} from 'react'
import {useUserSource} from "../../hooks/useUserSource";
import RotationLines from '../../assets/images/rotation-lines.png'
import {useMediaDimentionQuery} from "../../hooks/useMediaDimentonQuery";
import {ClipboardWithTooltip} from "../../UI/Buttons/ClipboardWithTooltip";

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
            <div className="flex justify-center md:ml-20">
                <div>
                    <p className=" lg:text-4xl md:text-3xl text-center font-Agrandir_GrandLight text-primary pt-10 md:pt-20 top-5 relative">
                        HEY THERE, I AM ASTRID
                    </p>
                    <p className="lg:text-4xl md:text-4.5xl text-left font-Agrandir_WideBlackItalic text-primary md:pt-2 right-16 relative md:ml-8 " >
                        UI | UX DESIGNER
                    </p>
                    <div className={'flex justify-center md:ml-32'} >
                        <p  className={'relative right-28 text-justify font-Kanit uppercase text-light text-s '} style={{...styles.containerStyles, ...styles.opacity_08}}>
                            ON A MISSION &nbsp; TO &nbsp;&nbsp;&nbsp;
                            CREATE OUTSTANDING USER &nbsp;&nbsp;
                            EXPERIENCES AND SOLVE &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                            PROBLEMS &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                            THROUGH USER -
                            CENTERED &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;DESIGN,
                            ENSURING &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;A &nbsp;&nbsp;&nbsp;&nbsp;SEAMLESS &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; AND
                            INTUITIVE &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; EXPERIENCE
                            <div className={'bg-light flex justify-end'} style={{...styles.divider, ...styles.opacity_08}}/>
                        </p>
                    </div>
                </div>
            </div>
            <div className={'justify-center flex relative md:ml-60'} style={{ right: 104 * 4, bottom: 22 }}>
                {userSource.map((source) => {
                    if (source?.hoverText) {
                        return (
                            <ClipboardWithTooltip title={source.name}/>
                        );
                    }

                    return (
                        <div className="group" key={source.name}>
                            <button className={'cursor-pointer text-light font-Kanit text-s pr-6 hover:text-gray-800 dark:hover:text-gray-400'} style={{ ...styles.opacity_08, ...styles.buttonTextStyles }} onClick={source.action}>
                                {source.name}
                            </button>
                        </div>
                    );
                })}
            </div>

            <div className="absolute flex" style={{  right:rightPosition, bottom:!isMd? '-10%':'-20%'}}>
                <img src={RotationLines} alt="..." className="h-auto max-w-full" />
            </div>
        </div>
    )
}

const styles = {
    divider:{
        width:1, borderRadius:1, height:window.innerHeight/2.3, marginTop:10,
    },
    containerStyles:{
        maxWidth:340,
        fontWeight:'200',
        fontStyle:'italic',

    },
    buttonTextStyles:{
        fontWeight:'200',
        fontStyle:'italic',
    },
    opacity_08:{
        opacity:0.8
    }
}

export default forwardRef(LandingComponent)