import React from "react";
import Octave from "../../assets/images/octave.png";
import August from "../../assets/images/august.png";
const Projects= ()=>{
    return(
        <div>

            <div className={'flex mt-52 justify-around ml-28 mr-28'}>
                <div>
                    <img src={Octave} alt="..." className="h-auto max-w-full "/>
                </div>
                <div className={'ml-16'}/>
                <div>
                    <img src={Octave} alt="..." className="h-auto max-w-full"/>
                </div>
            </div>

            <div className={'flex mt-52 justify-around ml-28 mr-28'}>
                <div>
                    <img src={Octave} alt="..." className="h-auto max-w-full "/>
                </div>
                <div className={'ml-16'}/>
                <div>
                    <img src={Octave} alt="..." className="h-auto max-w-full"/>
                </div>
            </div>


        </div>

    )
}

export default Projects