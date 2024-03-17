import {AboutComponent, LandingComponent} from "../../Components/Home";
import React, {useRef} from "react";

const Home = ()=>{
    const scrollToAboutRef = useRef(null);
    const scrollToAbout = () => {
        if (scrollToAboutRef.current) {
            scrollToAboutRef.current.scrollIntoView({ behavior: 'smooth' });
        }
    };

    return(
        <>
            <LandingComponent scrollToAbout={scrollToAbout}/>
            <AboutComponent ref={scrollToAboutRef} />
        </>
    )
}

export default Home