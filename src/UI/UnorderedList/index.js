import React from "react";

const UnorderedList = ({list, className, itemClassNem})=>{
    return(
        <ul className={className}>
            {list.map((point)=><li className={itemClassNem} style={styles.chunkTextStyles}>{point}</li>)}
        </ul>
    )
}

const styles = {
    imgSize: {width: 244, height: 244},
    textWeight:{fontWeight:'275'},
    containerWidth:{width:1},
    chunkTextStyles:{ minWidth:450,fontWeight:'275' }
}

export default UnorderedList