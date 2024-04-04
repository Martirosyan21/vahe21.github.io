import React from "react";

const UnorderedList = ({list, className, itemClassNem})=>{
    return(
        <ul className={className} style={styles.chunkTextStyles}>
            {list.map((point)=><li key={point} className={itemClassNem} style={{fontWeight:'275'}}>{point}</li>)}
        </ul>
    )
}

const styles = {
    chunkTextStyles:{ minWidth:370,maxWidth:458, }
}

export default UnorderedList