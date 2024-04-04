export function useHomeScrolling(aboutRef,landingRef,projectsRef ){


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


    return {
        scrollToAbout,
        scrollToLanding,
        scrollToProjects
    }
}