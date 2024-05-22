import React, {forwardRef, useCallback} from 'react'
import {useUserSource} from "../../hooks/useUserSource";
import RotationLines from '../../assets/images/rotation-lines.png'
import {useMediaDimentionQuery} from "../../hooks/useMediaDimentonQuery";
import {ClipboardWithTooltip} from "../../UI/Buttons/ClipboardWithTooltip";
import {contentMaxWidth} from "../../constants";

const LandingComponent = ({}, ref)=>{
    const {isXl, isLg, isMd, isL} = useMediaDimentionQuery();
    const {userSource}=useUserSource()

    const calculateRightPosition = useCallback(() => {
        if(isXl) return '-5%'
        if (isLg) return '-15%';
        if (isL) return '-30%';
        if (isMd) return '-50%';
        return '-45%';
    },[isL, isLg,isXl, isMd]);

    const rightPosition = calculateRightPosition();
    console.log(window.innerHeight);
    return(
        <div ref={ref} className="relative w-full h-screen bg-landing-background bg-cover overflow-hidden bg-no-repeat">
            <div className="w-full justify-center flex">
                <div className="mx-auto" style={contentMaxWidth}>
                    <div className={'l:ml-8 md:ml-24'} >
                        <p className="text-4xl   pl-16 font-Agrandir_GrandLight text-primary pt-10 md:pt-20 top-5 relative">
                            HEY THERE, I AM ASTRID
                        </p>
                        <p className="text-4xl left-1  text-left font-Agrandir_WideBlackItalic text-primary md:pt-2  relative">
                            UX | UI DESIGNER
                        </p>
                        <div className={'flex relative l:right-16 md:right-16'} >
                            <div className={'relative top-1 items-end flex'} >
                                {userSource.map((source) => {
                                    if (source?.hoverText) {
                                        return (
                                            <ClipboardWithTooltip key={source?.name.toString()} title={source.name}/>);
                                    }
                                    return (
                                        <div className="group" key={source.name}>
                                            <button
                                                className={'cursor-pointer text-light font-Kanit text-s pr-6 hover:underline hover:underline-offset-1 dark:hover:text-gray-400'}
                                                style={{...styles.opacity_08, ...styles.buttonTextStyles}}
                                                onClick={source.action}>
                                                {source.name}
                                            </button>
                                        </div>
                                    );
                                })}
                            </div>
                            <div>
                                <div className={'text-justify font-Kanit uppercase text-light text-s'}
                                     style={{...styles.containerStyles, ...styles.opacity_08}}>
                                    ON A MISSION &nbsp; TO &nbsp;&nbsp;&nbsp;
                                    CREATE OUTSTANDING USER &nbsp;&nbsp;
                                    EXPERIENCES AND SOLVE &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                                    PROBLEMS &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                                    THROUGH USER -
                                    CENTERED &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;DESIGN,
                                    ENSURING &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;A &nbsp;&nbsp;&nbsp;&nbsp;SEAMLESS &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; AND
                                    INTUITIVE &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; EXPERIENCE
                                </div>
                                <div className={'bg-light   '} style={{...styles.divider, ...styles.opacity_08 , height: window.innerHeight / (window.innerHeight >960 ? 2.3 : 3)}}/>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div className="absolute flex" style={{right: rightPosition, bottom: !isMd ? '-10%' : '-30%'}}>
                <img src={RotationLines} alt="..." className="h-auto max-w-full"/>
            </div>
        </div>
    )
}

const styles = {
    divider: {
        width: 1, borderRadius: 1, height: window.innerHeight / 2.3, marginTop: 10,
    },
    containerStyles: {
        maxWidth: 340,
        fontWeight: '200',
        fontStyle: 'italic',
    },
    buttonTextStyles: {
        fontWeight: '200',
        fontStyle: 'italic',
    },
    opacity_08: {
        opacity: 0.8
    }
}

export default forwardRef(LandingComponent)