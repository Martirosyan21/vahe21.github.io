import React from "react";
import {useNavigate} from "react-router-dom";
import backIcon from '../../assets/images/arrow (1).png'

const BackButton = ()=>{
    const navigate = useNavigate();
    return (
        <button  className={'flex items-center  left-12 pt-5'}  style={{zIndex:111}} onClick={()=>navigate(-1)}>
            <img src={backIcon} alt={''}/>
            <p className={'pl-3 text-light font-Kanit l:text-s sm:text-xxs '} style={{fontWeight:'200'}}>
                BACK
            </p>
        </button>
    )
}

export default BackButton