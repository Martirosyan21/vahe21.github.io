import React from 'react'

export const ProjectTag = ({item})=>(
    <div className={'border-solid border-dark border-amber-600 mr-2 md:mb-2'} style={styles.tagStyle}>
        <p className={'font-Kanit italic text-dark text-xs pb-1 pt-1 pl-3 pr-3'} style={{fontWeight:'275'}}>{item}</p>
    </div>
)

const styles = {
    tagStyle:{
        borderWidth:1,
        borderRadius:50
    }
}