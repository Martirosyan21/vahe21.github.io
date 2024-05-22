import React from 'react'
import octaveBg1 from "../assets/images/octaveView1.png";
import octaveView1Resized from "../assets/images/OctaveView1Resized.png";
import octaveView2Resized from "../assets/images/OctaveView2Resized.png";
import octaveView3Resized from "../assets/images/OctaveView3Resized.png";
import octaveView4Resized from "../assets/images/OctaveView4Resized.png";
import octaveView5Resized from "../assets/images/OctaveView5Resized.png";
import octaveBg2 from "../assets/images/octaveView2.png";
import octaveBg3 from "../assets/images/octaveView3.png";
import octaveBg4 from "../assets/images/octaveView4.png";
import octaveBg5 from "../assets/images/octaveView5.png";
import BackButton from "../UI/Buttons/BackButton";
import octaveVideo from '../assets/video/octaveVideo1.mov'
import octaveVideo1 from '../assets/video/octaveVideo2.mov'
import {TextButton} from "../UI/Buttons/TextButton";
import MainText from "../UI/Title/MainText";
import {useMediaDimentionQuery} from "../hooks/useMediaDimentonQuery";

const Octave = ()=>{
    const {isSmallScreen} = useMediaDimentionQuery()


    return (
        <div style={{backgroundColor:'#181A1E'}} className={'flex-col items-center justify-center'}>
            <div className={'absolute flex justify-between items-end pt-0 pl-12 pr-12 w-full '} style={{paddingLeft:isSmallScreen ?'10.5%' : '19%' , paddingRight:isSmallScreen ?'9%' : '18%' }}>
                <div>
                    <BackButton/>
                    <MainText text={'UX/UI Design'} className={'l:text-xs sm:text-xxs text-light '} style={{paddingTop:56}} />
                </div>
                <div className={'flex justify-center items-center'}>
                    <MainText text={'Live project (2024) '} className={'l:text-xs sm:text-xxs text-light '} />
                    <TextButton useWhite={true} title={'Visit'} link={'https://www.octavehq.com/'} className={'text-light pl-1 l:text-xs sm:text-xxs'}/>
                </div>
            </div>
            <img src={isSmallScreen ? octaveView1Resized : octaveBg1 } alt="..." className="h-full w-full" />
            <img src={isSmallScreen ? octaveView2Resized : octaveBg2} alt="..." className="h-full w-full"/>
            <div className="w-full relative bg-octave-background z-0 pb-40 ">
                <img src={isSmallScreen ? octaveView3Resized : octaveBg3} alt="..." className="h-full w-full"/>
                <div className={'justify-center'} style={{display:'flex'}}>
                    <div className={'justify-center mt-20 mb-40'} style={{ maxWidth: isSmallScreen ? '78%':'62%'}}>
                        <video className={'h-auto max-w-full '} controls autoPlay={false} loop={false} muted style={{borderRadius:12}}>
                            <source src={octaveVideo} type="video/mp4"></source>
                        </video>
                    </div>
                </div>
                <img src={isSmallScreen ? octaveView4Resized : octaveBg4} alt="..." className="h-full w-full"/>
                <div className={'justify-center'} style={{display:'flex'}}>
                    <div className={'justify-center mt-20 mb-40'} style={{ maxWidth: isSmallScreen ? '78%':'62%'}}>
                        <video className={'h-auto max-w-full '} controls autoPlay={false} loop={false} muted style={{borderRadius:12}}>
                            <source src={octaveVideo1} type="video/mp4"></source>
                        </video>
                    </div>
                </div>
                <img src={isSmallScreen ? octaveView5Resized : octaveBg5} alt="..." className="h-full w-full"/>
            </div>
        </div>
    )
}

export default Octave