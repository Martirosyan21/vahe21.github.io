import React, {useRef} from "react";
import {AboutComponent, LandingComponent} from "../../Components/Home";

const Home = ()=>{
    const aboutRef = useRef(null);
    const landingRef = useRef(null);
    const scrollToAbout = () => {
        if (aboutRef.current) {
            aboutRef.current.scrollIntoView({ behavior: 'smooth' });
        }
    };

    const scrollToLanding = () => {
        if (landingRef.current) {
            landingRef.current.scrollIntoView({ behavior: 'smooth' });
        }
    };

    return(
        <>
            <div ref={landingRef}>
                <LandingComponent scrollToAbout={scrollToAbout}/>
            </div>
            <div ref={aboutRef}>
                <AboutComponent  scrollToLanding={scrollToLanding} scrollToAbout={scrollToAbout}/>
            </div>
        </>
    )
}

export default Home