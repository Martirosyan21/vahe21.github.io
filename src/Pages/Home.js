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
                const projectPosition = projectsRef.current.offsetTop;
                const scrollPosition = window.pageYOffset;
                console.log(window.innerHeight);
                const isAboutSelected =scrollPosition > window.innerHeight-32 && scrollPosition <projectPosition+500;
                const isProjectSelected =scrollPosition > aboutPosition +projectPosition-250;
                setSelectedButton(isAboutSelected? 'about':isProjectSelected? 'projects' : null)
            }
        };
        window.addEventListener('scroll', handleScroll);
        return () => {
            window.removeEventListener('scroll', handleScroll);
        };
    }, [aboutRef, projectsRef]);

    return(
        <div>
            <LandingComponent ref={landingRef}/>
                <div className="w-full relative bg-about-background bg-cover bg-no-repeat z-0">
                    <AboutComponent ref={aboutRef}/>
                    <Projects ref={projectsRef}/>
                    <HomeFooter scrollToProjects={scrollToProjects} scrollToLanding={scrollToLanding}
                                scrollToAbout={scrollToAbout}/>
                </div>
            <NavigationBar scrollToAbout={scrollToAbout} scrollToProjects={scrollToProjects} scrollToLanding={scrollToLanding} selectedButton={selectedButton} />
        </div>
    )
}

export default Home