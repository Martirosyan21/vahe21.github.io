import {useMediaQuery} from "@react-hook/media-query";

export function useMediaDimentionQuery(){
    const isMd = useMediaQuery('(min-width: 768px)');
    const isL = useMediaQuery('(min-width: 1080px)');
    const isLg = useMediaQuery('(min-width: 1280px)');
    const isXl = useMediaQuery('(min-width: 1445px)');
    const nonSupportedSize  =useMediaQuery('(min-width: 1000px)');
    const isSmallScreen = window.innerWidth  < 1445
    return {
        isMd,
        isL,
        isLg,
        isXl,
        isSmallScreen,
        nonSupportedSize
    }

}