import React from "react";
import MainText from "../UI/Title/MainText";
import {useUserSource} from "../hooks/useUserSource";
import astridIcon from "../assets/images/astridIcon.png";
import {ClipboardWithTooltip} from "../UI/Buttons/ClipboardWithTooltip";

const NotSupportedScreen = () => {
    const {userSource}=useUserSource()

    return (
        <div className="flex items-center justify-center h-screen" style={{backgroundColor:'#25262a'}}>
            <div className="pl-7 pr-4">
                <div className="flex items-center justify-center">
                    <img
                        src={astridIcon}
                        alt="Your Company"
                        className="h-8 pr-2 mt-4 w-auto"
                    />
                    <MainText className="text-center text-white" style={styles.font16} text="Hey there!"/>
                </div>
                <div className="mt-8 text-center">
                    <MainText className="text-white" style={styles.font16}
                              text="We are sorry, but the website is optimized for desktop viewing to showcase the work in the best possible way. For the full experience, please switch to a desktop or larger screen."/>
                    <MainText className="mt-4 text-white" style={styles.font16}
                              text="Thank you for your understanding!"/>
                </div>
                <div style={{
                    marginTop:100,
                    display: 'flex',
                    alignItems:'center',
                    justifyContent: 'center',
                }}>
                    <div style={{alignItems:'center',textAlign:'center', justifyContent:'center'}}>
                        {userSource.map((source) => {
                            if (source?.hoverText) {
                                return (
                                    <ClipboardWithTooltip key={source?.name.toString()} title={source.name} fromNonSupported={true}/>
                                );
                            }
                            return (
                                <div className={"group"} key={source.name}>
                                    <button
                                        className={'text-light text-center font-Kanit text-s dark:hover:text-gray-400 '}
                                        style={{...styles.opacity_08, ...styles.buttonTextStyles}}
                                        onClick={source.action}>
                                        {source.name}
                                    </button>
                                </div>
                            );
                        })}
                    </div>
                </div>

            </div>
        </div>
    );
};

const styles = {
    font16: {
        fontSize: 16,
        fontWeight: '100'
    },
    buttonTextStyles: {
        fontWeight: '200',
    },
    opacity_08: {
        opacity: 0.8
    }
};

export default NotSupportedScreen;
