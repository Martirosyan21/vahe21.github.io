import React, {useEffect, useRef, useState} from "react";

import Projects from "../../Components/Home/Projects";
import HomeFooter from "../../Components/Home/HomeFooter";
import NavigationBar from "../../Navigation/NavigationBar";
import {AboutComponent, LandingComponent} from "../../Components/Home";

const Home = ()=>{
    const aboutRef = useRef(null);
    const landingRef = useRef(null);
    const projectsRef = useRef(null);
    const [selectedButton, setSelectedButton] = useState(null);


    const scrollToAbout = () => {
        if (aboutRef.current) {
            aboutRef.current.scrollIntoView({ behavior:'smooth' });
        }
    };

    const scrollToLanding = () => {
        if (landingRef.current) {
            landingRef.current.scrollIntoView({ behavior:'smooth' });
        }
    };

    const scrollToProjects = () => {
        if (projectsRef.current) {
            projectsRef.current.scrollIntoView({ behavior:'smooth' });
        }
    };

    useEffect(() => {
        const handleScroll = () => {
            if (aboutRef.current) {
                const aboutPosition = aboutRef.current.offsetTop;
                const projectPosition = projectsRef.current.offsetTop;
                const scrollPosition = window.pageYOffset;
                const isAboutSelected =scrollPosition>aboutPosition && scrollPosition<projectPosition;
                const isProjectSelected =scrollPosition>projectPosition;
                setSelectedButton(isAboutSelected? 'about':isProjectSelected? 'projects':null)
            }
        };
        window.addEventListener('scroll', handleScroll);
        return () => {
            window.removeEventListener('scroll', handleScroll);
        };
    }, [aboutRef]);

    return(
        <>
            <div ref={landingRef}>
                <LandingComponent/>
            </div>
            <div ref={aboutRef}>
                <div className="w-full relative bg-about-background bg-cover bg-no-repeat  z-0">
                    <AboutComponent />
                    <div ref={projectsRef}>
                        <Projects/>
                    </div>
                    <HomeFooter scrollToProjects={scrollToProjects} scrollToLanding={scrollToLanding} scrollToAbout={scrollToAbout}/>
                </div>
            </div>
            <NavigationBar scrollToAbout={scrollToAbout} scrollToProjects={scrollToProjects} scrollToLanding={scrollToLanding} selectedButton={selectedButton} />
        </>
    )
}

export default Home