import MainText from "../../UI/Title/MainText";
import React from "react";
import {TextButton} from "../../UI/Buttons/TextButton";

const PreviousProjects = ()=>{
    return(
        <div>
            <MainText text={'Previous Work: Explore some of my earlier projects that laid the foundation for my design journey.'} />
            <div className={'flex'}>
                <TextButton title={'Vigilant Biosciences'} link={''}/>
                <TextButton title={'Learn to Win'} link={''}/>
                <TextButton title={'Crio'} link={''}/>

            </div>
        </div>
    )
}

export default PreviousProjects