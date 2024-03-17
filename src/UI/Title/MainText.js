import React from "react";

const MainText = ({text, className, children})=>(
    <div className={`font-Kanit text-s font-extralight text-dark pt-5 ...${className}`} style={styles.chunkTextStyles}>
        {text}
        {children}
    </div>
)

const styles = {
    chunkTextStyles:{ minWidth:450, }
}


export default MainText