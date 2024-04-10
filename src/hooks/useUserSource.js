import {constants} from "../constants";

export function useUserSource(){
    const onPressLinkedin = ()=>{
        window.open(constants.LINKEDIN_URL)
    }

    const onPressResume = ()=>{
        window.open(constants.RESUME_URL)
    }
    const onPressEmail = ()=>{
        navigator.clipboard.writeText('astghik.yv@gmail.com').then()
    }

    const userSource = [
        {name:'LINKEDIN', action:onPressLinkedin},
        {name:'RESUME', action:onPressResume},
        {name:'EMAIL', action:onPressEmail, hoverText:'Copy'},
    ]

    return {
        userSource
    }
}