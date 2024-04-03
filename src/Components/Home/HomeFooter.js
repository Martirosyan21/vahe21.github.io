import React, {useCallback} from "react";

import halfCircle from '../../assets/images/halfCircle.png'
import {useUserSource} from "../../hooks/useUserSource";


const windowWidth = window.innerWidth
const footerActions = [
    {name:'Home', action:''},
    {name:'About', action:''},
    {name:'Projects', action:''},
]
const HomeFooter  = ({scrollToAbout,scrollToProjects, scrollToLanding})=>{
    const {userSource} = useUserSource()

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
        <div className={'pl-28 pr-28 pb-24'}>
             <div  className={'flex flex-row justify-between'}>
                <p className={'font-Kanit text-dark text-s pt-4 pb-2'}>
                    All rights reserved. © 2024 Astghik Yeghiazaryan
                </p>
                 <div className={'flex  flex-row'}>
                     <div>
                        {
                            footerActions.slice(0,3).map((action)=>
                                <ActionRow key={action.name} actionName={action.name} onClick={onClick} className={'pr-32'} />)
                        }
                     </div>
                     <div>
                        {
                            userSource.map((action)=>
                                <ActionRow key={action.name} actionName={action.name} onClick={action.action} />)
                        }
                    </div>
                 </div>
            </div>
            <div className={'justify-center flex absolute bottom-0'} style={{ left:(windowWidth - 690 ) / 2  }}>
                <img src={halfCircle} alt="..." className="h-auto max-w-full"/>
            </div>
        </div>
    )
}

const ActionRow  = ({actionName,onClick, className})=>{
    return(
        <div className={`${className} cursor-pointer`} onClick={()=>onClick(actionName)}>
            <p className={'font-Kanit normal-case text-dark text-s pt-4 pb-2'}>
                {actionName.charAt(0).toUpperCase() + actionName.slice(1, actionName.length).toLowerCase()}
            </p>
        </div>
    )
}

export default HomeFooter