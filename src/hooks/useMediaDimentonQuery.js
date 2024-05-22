import {useMediaQuery} from "@react-hook/media-query";
import {useMemo} from "react";

export function useMediaDimentionQuery(){
    const isMd = useMediaQuery('(min-width: 768px)');
    const isL = useMediaQuery('(min-width: 1080px)');
    const isLg = useMediaQuery('(min-width: 1280px)');
    const isXl = useMediaQuery('(min-width: 1445px)');
    const nonSupportedSize  =useMediaQuery('(min-width: 1000px)');
    const isSmallScreen = useMemo(()=>window.innerWidth  < 1525, [window.innerWidth])
    return {
        isMd,
        isL,
        isLg,
        isXl,
        isSmallScreen,
        nonSupportedSize
    }

}