import React from 'react'
import octaveBg1 from "../assets/images/octaveView1.png";
import octaveBg2 from "../assets/images/octaveView2.png";
import octaveBg3 from "../assets/images/octaveView3.png";
import octaveBg4 from "../assets/images/octaveView4.png";
import octaveBg5 from "../assets/images/octaveView5.png";
import BackButton from "../UI/Buttons/BackButton";
import octaveVideo from '../assets/video/octaveVideo1.mov'
import octaveVideo1 from '../assets/video/octaveVideo2.mov'

const Octave = ()=>(
    <div style={{backgroundColor:'#181A1E'}} className={'flex-col items-center justify-center'}>
        <BackButton/>
        <img src={octaveBg1} alt="..." className="h-full w-full"/>
        <img src={octaveBg2} alt="..." className="h-full w-full"/>
        <div className="w-full relative bg-octave-background z-0 pb-40 ">
            <img src={octaveBg3} alt="..." className="h-full w-full"/>
            <div className={'justify-center mt-20 mb-40'} style={{display: 'flex', maxWidth: '64%', marginLeft: '18%'}}>
                <video className={'h-auto max-w-full '} controls autoPlay={false} loop muted style={{borderRadius:12}}>
                    <source src={octaveVideo} type="video/mp4"></source>
                </video>
            </div>
            <img src={octaveBg4} alt="..." className="h-full w-full"/>
            <div className={'justify-center mt-20 mb-40'} style={{display: 'flex', maxWidth: '64%', marginLeft: '18%'}}>
                <video className={'h-auto max-w-full '} controls autoPlay={false} loop muted style={{borderRadius:12}}>
                    <source src={octaveVideo1} type="video/mp4"></source>
                </video>
            </div>
            <img src={octaveBg5} alt="..." className="h-full w-full"/>
        </div>
    </div>
)

export default Octave