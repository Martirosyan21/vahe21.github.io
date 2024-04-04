import {useMediaQuery} from "@react-hook/media-query";

export function useMediaDimentionQuery(){
    const isMd = useMediaQuery('(min-width: 768px)');
    const isL = useMediaQuery('(min-width: 1000px)');
    const isLg = useMediaQuery('(min-width: 1280px)');
    const isXl = useMediaQuery('(min-width: 1440px)');

    return {
        isMd,
        isL,
        isLg,
        isXl
    }

}