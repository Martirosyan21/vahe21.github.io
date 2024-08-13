import MainText from "../Title/MainText";
import arrowToWhite from "../../assets/images/arrowToWhite.png";
import arrowTo from "../../assets/images/arrowTo.png";
import React from "react";
import {useNavigate} from "react-router-dom";

export const TextButton = ({newTab=true, link, title, className='pr-1', useWhite=false, style})=>{
    const navigate = useNavigate();

    const openInNewTab = () => {
        const newWindow = window.open(link, '_blank', 'noopener,noreferrer')
        if (newWindow) newWindow.opener = null
    }


    const navigateToPath = ()=>{
        navigate(link)
    }


    return(
        <button onClick={newTab ? openInNewTab : navigateToPath}>
            <div className={'flex row items-center pr-4'} style={style}>
                <MainText text={title}  className={className} style={{fontStyle:'italic'}}/>
                <img src={useWhite ? arrowToWhite : arrowTo} style={{widht: 16, height: 16, marginTop:25}}/>
            </div>
        </button>
    )
}