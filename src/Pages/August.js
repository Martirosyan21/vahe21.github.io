import React from 'react'
import BackButton from "../UI/Buttons/BackButton";
import augustView1 from '../assets/images/augustView1.png'
import augustView2 from '../assets/images/augustView2.png'
import augustView3 from '../assets/images/augustView3.png'
import augustView4 from '../assets/images/augustView4.png'
import augustView5 from '../assets/images/augustView5.png'

const augustImages= [augustView1, augustView2, augustView3, augustView4, augustView5];
const August = ()=>(
    <div>
        <BackButton/>
        <div style={{backgroundColor:'#181A1E'}} className={'pr-12 pl-12 pt-24 pb-24'} >
            <div  className={'items-center justify-center flex'}>
                <div style={{maxWidth:1200}} className={'justify-center'}>
                    {
                        augustImages?.map((image, index)=> <img key={index} src={image} alt="..." className="h-full w-full " style={{paddingBottom: 200}}/>)
                    }
                </div>
            </div>
        </div>
    </div>
)

export default August