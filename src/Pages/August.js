import React from 'react'
import augustBg from '../assets/images/augustView.png'
import BackButton from "../UI/Buttons/BackButton";

const August = ()=>(
    <div style={{backgroundColor:'#181A1E'}} className={'flex justify-center'}>
        <BackButton/>
        <img src={augustBg} alt="..." className="h-full w-full" style={{maxWidth:1440}} />
    </div>
)

export default August