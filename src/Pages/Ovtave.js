import React from 'react'
import octaveBg from "../assets/images/octaveView.png";
import BackButton from "../UI/Buttons/BackButton";

const Octave = ()=>(
    <div style={{backgroundColor:'#181A1E'}} className={'flex justify-center'}>
        <BackButton/>
        <img src={octaveBg} alt="..." className="h-full w-full" style={{maxWidth:1440}}/>
    </div>
)

export default Octave