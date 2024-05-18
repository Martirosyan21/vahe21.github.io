import React from "react";
import {Link} from "react-router-dom";
import backIcon from '../../assets/images/arrow (1).png'

const BackButton = ()=>(
    <Link  className={'flex items-center absolute left-12 pt-5'} to={'/'}>
        <img src={backIcon} alt={''}/>
        <p className={'pl-3 text-light font-Kanit l:text-l sm:text-xxs italic'} style={{fontWeight:'200'}}>
            BACK
        </p>
    </Link>
)

export default BackButton