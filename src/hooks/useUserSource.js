import {constants} from "../constants";

export function useUserSource(){
    const onPressLinkedin = ()=>{
        window.open(constants.LINKEDIN_URL)
    }

    const onPressResume = ()=>{
        window.open(constants.RESUME_URL)
    }
    const onPressEmail = ()=>{
        window.open(`mailto:${constants.EMAIL}`)
    }

    return {
        onPressResume,
        onPressEmail,
        onPressLinkedin
    }
}