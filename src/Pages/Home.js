import React, {useEffect, useRef, useState} from "react";

import Projects from "../Components/Home/Projects";
import HomeFooter from "../Components/Home/HomeFooter";
import NavigationBar from "../Navigation/NavigationBar";
import {useHomeScrolling} from "../hooks/useHomeScrolling";
import {AboutComponent, LandingComponent} from "../Components/Home";

const Home = ()=>{
    const aboutRef = useRef(null);
    const landingRef = useRef(null);
    const projectsRef = useRef(null);
    const [selectedButton, setSelectedButton] = useState(null);

    const {
        scrollToAbout,
        scrollToLanding,
        scrollToProjects
    } = useHomeScrolling(aboutRef,landingRef, projectsRef )

    useEffect(() => {
        const handleScroll = () => {
            if (aboutRef.current) {
                const aboutPosition = aboutRef.current.offsetTop;
                const scrollPosition = window.pageYOffset;
                const isAboutSelected = scrollPosition > window.innerHeight + aboutPosition-20;
                const isProjectSelected =scrollPosition > window.innerHeight-20 && scrollPosition < window.innerHeight+aboutPosition;
                setSelectedButton(isAboutSelected? 'about':isProjectSelected? 'projects' : null)
            }
        };
        window.addEventListener('scroll', handleScroll);
        return () => {
            window.removeEventListener('scroll', handleScroll);
        };
    }, [aboutRef]);

    return(
        <div>
            <LandingComponent ref={landingRef}/>
            <div className="w-full relative bg-about-background z-0 " >
                <Projects ref={projectsRef}/>
                <AboutComponent ref={aboutRef}/>
                <HomeFooter scrollToProjects={scrollToProjects} scrollToLanding={scrollToLanding}
                            scrollToAbout={scrollToAbout}/>
            </div>
            <NavigationBar scrollToAbout={scrollToAbout} scrollToProjects={scrollToProjects} scrollToLanding={scrollToLanding} selectedButton={selectedButton} />
        </div>
    )
}

export default Home