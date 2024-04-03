import React from 'react'
import {useUserSource} from "../../hooks/useUserSource";
import NavigationBar from "../../Navigation/NavigationBar";
import RotationLines from '../../assets/images/rotation-lines.png'

const LandingComponent = ({scrollToAbout})=>{
    const {userSource}=useUserSource()
    return(
        <div className="w-full h-screen  bg-landing-background bg-cover overflow-hidden bg-no-repeat" >
            <NavigationBar scrollToAbout={scrollToAbout}/>
            <div className="flex justify-center">
                <div>
                    <p className=" lg:text-4xl md:text-3xl text-center font-Agrandir_GrandLight text-primary pt-10 top-5 relative">
                        HEY THERE, I AM ASTRID
                    </p>
                    <p className="lg:text-4xl md:text-3xl text-left font-Agrandir_WideBlackItalic text-primary right-16 relative " >
                        UI | UX DESIGNER
                    </p>
                    <div className={'flex justify-center'}>
                        <p  className={'relative right-20 text-justify  font-Kanit uppercase text-light text-s'} style={styles.containerStyles}>
                            ON A MISSION TO CREATE OUTSTANDING USER EXPERIENCES AND SOLVE PROBLEMS THROUGH USER - CENTERED DESIGN, ENSURING A SEAMLESS AND INTUITIVE EXPERIENCE
                            <div className={'bg-light flex justify-end'} style={styles.divider}/>
                        </p>
                    </div>
                </div>
            </div>
            <div className={'justify-center flex bottom-5 relative right-96'}>
                {
                    userSource.map((source)=>(
                        <button key={source.name} className={'cursor-pointer text-light font-Kanit text-s pr-6'} style={styles.buttonTextStyles} onClick={source.action} >
                            {source.name}
                        </button>
                    ))
                }
            </div>
            <div className="relative overflow-hidden" style={styles.rotationImageStyles}>
                <img src={RotationLines} alt="..." className="h-auto max-w-full" />
            </div>
        </div>
    )
}

const styles = {
    divider:{
        width:1, borderRadius:1, height:window.innerHeight/2.3, marginTop:10
    },
    rotationImageStyles:{
        left:'65%',
        width:'40%',
        bottom:'65%',
    },
    containerStyles:{
        maxWidth:340,
        fontWeight:'200',
        fontStyle:'italic',
    },
    buttonTextStyles:{
        fontWeight:'200',
        fontStyle:'italic',
    }
}

export default LandingComponent