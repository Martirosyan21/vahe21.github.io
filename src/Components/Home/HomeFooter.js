import React, {useCallback} from "react";

import {useUserSource} from "../../hooks/useUserSource";
import {useMediaDimentionQuery} from "../../hooks/useMediaDimentonQuery";
import astridIcon from "../../assets/images/astridIcon.png";
import {contentMaxWidth} from "../../constants";


const footerActions = [
    {name:'Home', action:''},
    {name:'About', action:''},
    {name:'Projects', action:''},
]
const HomeFooter  = ({scrollToAbout,scrollToProjects, scrollToLanding})=>{
    const {userSource} = useUserSource()
    const {isL} = useMediaDimentionQuery();


    const onClick = useCallback((actionName)=>{

        switch (actionName) {
            case 'Home':
                scrollToLanding()
                break;
            case 'About':
                scrollToAbout();
                break;
            case 'Projects':
                scrollToProjects();
                break;
            default :
                return null

        }
    }, [scrollToAbout, scrollToLanding])

    return(
        <div className={'pt-12 pb-12 mx-auto md:pl-4 md:pr-4'} style={contentMaxWidth}>
            <div  className={'flex justify-between top-48'}  >
                <div>
                    <img
                        className="h-8 w-auto"
                        src={astridIcon}
                        alt="Your Company"
                    />
                    <p className={'font-Kanit text-dark text-s pt-4 pb-2'} style={{minWidth: isL ? 472 : 300, fontWeight:'275'}}>
                        All rights reserved. © 2024 Astghik Yeghiazaryan
                    </p>
                </div>
                <div className={'md:pb-12'}/>
                <div className={'flex '}>
                    <div>
                        {
                            footerActions.slice(0,3).map((action)=>
                                <ActionRow key={action.name} actionName={action.name} onClick={onClick} className={'pr-52'} />)
                        }
                    </div>
                    <div >
                        {
                            userSource.map((action)=>
                                <ActionRow key={action.name} actionName={action.name} onClick={action.action} />)
                        }
                    </div>
                </div>
            </div>
        </div>
    )
}

const ActionRow  = ({actionName,onClick, className})=>{
    return(
        <div className={`${className} cursor-pointer`} onClick={()=>onClick(actionName)}>
            <p className={'font-Kanit  text-dark text-s pt-4 pb-2'} style={{fontWeight:'275'}}>
                {actionName.charAt(0).toUpperCase() + actionName.slice(1, actionName.length).toLowerCase()}
            </p>
        </div>
    )
}


export default HomeFooter