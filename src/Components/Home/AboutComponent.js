import React, {forwardRef} from 'react'
import MainText from "../../UI/Title/MainText";
import UnorderedList from "../../UI/UnorderedList";
import {contentMaxWidth, leftSectionPoints, rightSectionPoints, topSkillsTags} from "../../constants";

import {ProjectTag} from "../../UI/Tag";
import prtik from "../../assets/images/prtik.png";
import AstridPhoto from "../../assets/images/AstridPhoto.png";
import RotationLines from "../../assets/images/RotationLines.png";

const AboutComponent = ({},ref)=>{
    return(
      <div ref={ref} className={'pb-36 relative justify-center items-center l:pr-0 l:pl-0 md:pl-4 md:pr-4'}>
          <div style={contentMaxWidth} className={'mx-auto'}>
            <div className="absolute" style={styles.rotationImageStyles}>
                <img src={RotationLines} alt="..." className="h-auto max-w-full"/>
            </div>
            <div className="flex justify-center mr-52">
                <MainText text={`I love diving deep into the user's world to create experiences that truly resonate.`} className={'w-fit self-end pr-4'}/>
                <img src={AstridPhoto} alt="..." style={styles.imgSize} className={'mt-64'}/>
            </div>
            <p className=" lg:text-4xl md:text-3xl text-center font-Agrandir_GrandLight font-extralight	text-primary pt-3">
                IT'S NOT JUST ABOUT PIXELS
            </p>
            <div>
                <div className={'flex'} style={{width:'100%',}}>
                    <div className={'flex-1 '} />
                    <div className={'flex-1'} >
                        <MainText text={`it's about understanding what makes users tick and building designs that speak to their hearts.`}>
                            <div className={'bg-dark h-60 mt-5 ml-0.5'} style={styles.containerWidth}/>
                            <MainText text={`After five years exploring the design universe, I've spent the past three years immersing myself in UX/UI design. A creative soul at heart, I thrive on crafting seamless digital experiences that delight users. Renowned for my problem-solving prowess, collaborative spirit, and commitment to exceeding expectations, I excel in fast-paced environments and tackle challenges with enthusiasm. I'm constantly seeking to innovate and enhance user interactions. Committed to continuous learning and personal growth, staying updated with the latest industry trends and technologies to enhance my skills and deliver cutting-edge solutions.`} />
                            <div className={'grid md:flex  pt-0 justify-start items-center'}>
                                <img src={prtik} alt="..." className="w-6 h-6 mt-5 mr-2.5"/>
                                <MainText text={'Top skils'} style={{paddingRight: 4}}/>
                            </div>
                            <div className={'flex mt-4'} style={{flexWrap:'wrap'}}>
                                {
                                    topSkillsTags.map((item, index) => (
                                        <ProjectTag key={item.toString() + index} item={item}/>
                                    ))
                                }
                            </div>
                        </MainText>
                    </div>
                </div>
                <div className={'flex'}>
                    <div className={'mt-20 flex flex-1'}>
                        <div className={'flex-1'}/>
                        <UnorderedList list={leftSectionPoints} className={'list-inside'}
                                       itemClassNem={'pb-8 font-Kanit text-s text-dark '}/>
                    </div>
                    <div style={{width:50, paddingLeft:16}}/>
                    <div className={'flex-1 mr-4  '}  >
                        <UnorderedList list={rightSectionPoints} className={'list-inside pt-20'} itemClassNem={'pb-8 font-Kanit text-s text-dark'}/>
                    </div>
                </div>
            </div>
          </div>
      </div>
    )
}

const styles = {
    containerWidth:{width:1},
    imgSize: {width: 244, height: 244},
    rotationImageStyles:{left:0, top:'3%', zIndex:-1}
}

export default forwardRef(AboutComponent)