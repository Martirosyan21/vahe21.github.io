import React from 'react'
import BackButton from "../UI/Buttons/BackButton";
import augustView1 from '../assets/images/augustView1.png'
import augustView2 from '../assets/images/augustView2.png'
import augustView3 from '../assets/images/augustView3.png'
import augustView4 from '../assets/images/augustView4.png'
import augustView5 from '../assets/images/augustView5.png'
import augustView6 from '../assets/images/augustView6.png'
import augustView7 from '../assets/images/augustView7.png'
import augustView8 from '../assets/images/augustView8.png'
import augustView9 from '../assets/images/augustView9.png'
import augustView10 from '../assets/images/augustView10.png'
import augustView11 from '../assets/images/augustView11.png'
import augustView12 from '../assets/images/augustView12.png'
import augustView13 from '../assets/images/augustView13.png'
import augustView14 from '../assets/images/augustView14.png'
import augustView15 from '../assets/images/augustView15.png'
import augustView16 from '../assets/images/augustView16.png'
import augustView17 from '../assets/images/augustView17.png'
import {useMediaDimentionQuery} from "../hooks/useMediaDimentonQuery";

const augustImages= [
    {image:augustView1, paddingBottom:10},
    {image:augustView2, paddingBottom:60},
    {image:augustView3, paddingBottom:60},
    {image:augustView4, paddingBottom:200},
    {image:augustView5, paddingBottom:200},
    {image:augustView6, paddingBottom:200},
    {image:augustView7, paddingBottom:200},
    {image:augustView8, paddingBottom:200},
    {image:augustView9, paddingBottom:150},
    {image:augustView10, paddingBottom:200},
    {image:augustView11, paddingBottom:200},
    {image:augustView12, paddingBottom:200},
    {image:augustView13, paddingBottom:200},
    {image:augustView14, paddingBottom:200},
    {image:augustView15, paddingBottom:200},
    {image:augustView16, paddingBottom:100},
    {image:augustView17, paddingBottom:0},
];
const August = ()=>{
    const {isSmallScreen} = useMediaDimentionQuery()
    return (
        <div>
            <div className={'absolute flex justify-between items-end pt-0 pl-12 pr-12 w-full '}
                 style={{paddingLeft:isSmallScreen ? '8.5%':  '19%', paddingRight: isSmallScreen ? '10%': '18%'}}>
                <BackButton/>
            </div>
            <div style={{backgroundColor: '#181A1E'}} className={'pr-12 pl-12 pt-24 pb-24'}>
                <div className={'items-center justify-center flex'}>
                    <div style={{maxWidth: 1200}} className={'justify-center'}>
                        {
                            augustImages?.map((augustChunk, index) => <img key={index} src={augustChunk?.image}
                                                                           alt="..." className="h-full w-full "
                                                                           style={{paddingBottom: augustChunk?.paddingBottom}}/>)
                        }
                    </div>
                </div>
            </div>
        </div>
    )
}

        export default August