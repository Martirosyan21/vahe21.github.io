import React from 'react'
import octaveBg from "../assets/images/octaveView.png";
import BackButton from "../UI/Buttons/BackButton";

const Octave = ()=>(
    <div style={{backgroundColor:'#181A1E'}}>
        <BackButton/>
        <img src={octaveBg} alt="..." className="h-full w-full" />
    </div>
)

export default Octave