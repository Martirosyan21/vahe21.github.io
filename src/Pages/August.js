import React from 'react'
import augustBg from '../assets/images/augustView.png'
import BackButton from "../UI/Buttons/BackButton";

const August = ()=>(
    <div style={{backgroundColor:'#181A1E'}}>
        <BackButton/>
        <img src={augustBg} alt="..." className="h-full w-full" />
    </div>
)

export default August