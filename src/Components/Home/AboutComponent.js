import React, { forwardRef, useState } from 'react';
import MainText from "../../UI/Title/MainText";
import UnorderedList from "../../UI/UnorderedList";
import { contentMaxWidth, leftSectionPoints, rightSectionPoints, topSkillsTags } from "../../constants";
import { ProjectTag } from "../../UI/Tag";
import prtik from "../../assets/images/prtik.png";
import arrowDown from "../../assets/images/arrowDown.png";
import AstridPhoto from "../../assets/images/AstridPhoto.png";
import RotationLines from "../../assets/images/RotationLines.png";
import { useMediaDimentionQuery } from "../../hooks/useMediaDimentonQuery";

const AboutComponent = ({}, ref) => {
    const { isL } = useMediaDimentionQuery();
    const [showToggle, setShowToggle] = useState(false);

    const handleShowMoreClick = () => {
        if (showToggle) {
            setShowToggle(false);
        } else {
            setShowToggle(true);
        }
    };

    return (
        <div ref={ref} className={'pb-36 relative justify-center items-center l:pr-0 l:pl-0 md:pl-4 md:pr-4'}>
            <div className="absolute" style={styles.rotationImageStyles}>
                <img src={RotationLines} alt="..." style={{ maxWidth: 563, maxHeight: 830 }} />
            </div>
            <div style={contentMaxWidth} className={'mx-auto'}>
                <div className={'pl-8 pr-8'}>
                    <div className="flex">
                        <MainText
                            text={`I love diving deep into the user's world to create experiences that truly resonate.`}
                            className={'self-end l:pr-4 l:pl-0 md:pl-24 l:text-s md:text-xxs l:text-left t'}
                            style={{ width: '50%' }}
                        />
                        <img src={AstridPhoto} alt="..." style={isL ? styles.imgSize : styles.smallImgSize} className={'mt-64'} />
                    </div>
                    <div>
                        <p className="l:text-4xl md:text-3.5xl text-center font-Agrandir_GrandLight font-extralight text-primary pt-3">
                            IT'S NOT JUST ABOUT PIXELS
                        </p>
                    </div>
                </div>
                <div>
                    <div className={'flex'} style={{width: '100%'}}>
                        <div className={'flex-1'}/>
                        <div className={'flex-1'}>
                            <MainText
                                text={`it's about understanding what makes users tick and building designs that speak to their hearts.`}
                            >
                                <div className={'bg-dark h-60 mt-5 ml-0.5'} style={styles.containerWidth}/>
                                <MainText
                                    text={`After five years exploring the design universe, I've spent the past three years immersing myself in UX/UI design. A creative soul at heart, I thrive on crafting seamless digital experiences that delight users. Renowned for my problem-solving prowess, collaborative spirit, and commitment to exceeding expectations, I excel in fast-paced environments and tackle challenges with enthusiasm. I'm constantly seeking to innovate and enhance user interactions. Committed to continuous learning and personal growth, staying updated with the latest industry trends and technologies to enhance my skills and deliver cutting-edge solutions.`}
                                />
                            </MainText>
                        </div>
                    </div>

                    {showToggle && (
                        <div >
                            <div className={'flex'} style={{width: '100%'}}>
                                <div className={'flex-1'}/>
                                <div className={'flex-1'}>
                                    <div className={'grid md:flex pt-0 justify-start items-center'}>
                                        <img src={prtik} alt="..." className="w-6 h-6 mt-5 mr-2.5"/>
                                        <MainText text={'Top skils'} style={{paddingRight: 4}}/>
                                    </div>
                                    <div className={'flex mt-4'} style={{flexWrap: 'wrap'}}>
                                        {topSkillsTags.map((item, index) => (
                                            <ProjectTag key={item.toString() + index} item={item}/>
                                        ))}
                                    </div>
                                </div>
                            </div>

                            <div className={'flex'}>
                                <div className={'mt-20 flex flex-1'}>
                                    <div className={'flex-1'}/>
                                    <UnorderedList
                                        list={leftSectionPoints}
                                        className={'list-inside'}
                                        itemClassNem={'pb-8 font-Kanit text-s text-dark'}
                                    />
                                </div>
                                <div style={{width: 20}}/>
                                <div className={'flex-1 mr-4'}>
                                    <UnorderedList
                                        list={rightSectionPoints}
                                        className={'list-inside pt-20'}
                                        itemClassNem={'pb-8 font-Kanit text-s text-dark'}
                                    />
                                </div>
                            </div>
                        </div>
                    )}
                    <div className={'flex  justify-center'}>
                        <div className={'flex-1'}/>
                        <div className={'flex-1 flex items-center pt-6'}>
                            <button
                                onClick={handleShowMoreClick}
                                className={'font-Kanit italic text-dark text-s pb-1  pt-1'}
                                style={{fontWeight: '275'}}
                            >
                                {!showToggle ? 'Show skills' : 'Hide skills'}
                            </button>
                            <img src={arrowDown} className={`w-4 h-4 ${!showToggle ? 'rotate-0' : 'rotate-180'}`}/>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

const styles = {
    containerWidth: { width: 1 },
    imgSize: { width: 244, height: 244 },
    smallImgSize: { width: 188, height: 188 },
    rotationImageStyles: { top: '6%', left: 0 },
};

export default forwardRef(AboutComponent);
