import MainText from "../UI/Title/MainText";
import astridIcon from "../assets/images/astridIcon.png";

const NotSupportedScreen = () => {
    return (
        <div className="flex items-center justify-center h-screen" style={{backgroundColor:'#25262a'}}>
            <div className="pl-4 pr-4" >
                <div className="flex items-center justify-center">
                    <img
                        src={astridIcon}
                        alt="Your Company"
                        className="h-8 pr-2 mt-4 w-auto"
                    />
                    <MainText className="text-center text-white" style={styles.font16} text="Hey there!" />
                </div>
                <div className="mt-8 text-center">
                    <MainText className="text-white" style={styles.font16} text="We are sorry, but the website is optimized for desktop viewing to showcase the work in the best possible way. For the full experience, please switch to a desktop or larger screen." />
                    <MainText className="mt-4 text-white" style={styles.font16} text="Thank you for your understanding!" />
                </div>
            </div>
        </div>
    );
};

const styles = {
    font16: {
        fontSize: 16,
        fontWeight:'100'
    }
};

export default NotSupportedScreen;
