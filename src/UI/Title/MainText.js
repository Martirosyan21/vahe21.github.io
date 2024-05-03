import React from "react";

const MainText = ({text, className, children, style})=>(
    <div className={`font-Kanit  text-s font-extralight text-dark pt-5  pr-3 ...${className}`} style={{...styles.chunkTextStyles, ...style}} >
        {text}
        {children}
    </div>
)

const styles = {
    chunkTextStyles:{ maxWidth:450, }
}


export default MainText