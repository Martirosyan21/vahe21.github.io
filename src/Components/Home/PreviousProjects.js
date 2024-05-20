import MainText from "../../UI/Title/MainText";
import React from "react";
import {TextButton} from "../../UI/Buttons/TextButton";

const PreviousProjects = ()=>{
    return(
        <div>
            <MainText text={'Previous Work: Explore some of my earlier projects that laid the foundation for my design journey.'} className={'pr-12'} />
            <div className={'flex'}>
                <TextButton title={'Vigilant Biosciences'} link={'https://vigilantbiosciences.com/'}/>
                <TextButton title={'Learn to Win'} link={'https://www.learntowin.com/'}/>
                <TextButton title={'Crio'} link={'https://x.com/crio_info?lang=en\n'}/>
            </div>
        </div>
    )
}

export default PreviousProjects