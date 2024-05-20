import MainText from "../Title/MainText";
import arrowTo from "../../assets/images/arrowTo.png";
import React from "react";

export const TextButton = ({link, title})=>{

    const openInNewTab = () => {
        const newWindow = window.open(link, '_blank', 'noopener,noreferrer')
        if (newWindow) newWindow.opener = null
    }


    return(
        <button onClick={openInNewTab}>
            <div className={'flex row items-center pr-4'}>
                <MainText text={title} className={'pr-1'} style={{fontStyle:'italic'}}/>
                <img src={arrowTo} style={{widht: 16, height: 16, marginTop:25}}/>
            </div>
        </button>
    )
}