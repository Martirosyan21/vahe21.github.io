import { AdvancedImage, AdvancedVideo } from "@cloudinary/react";
import React from "react";
import { optimizedImage, optimizedVideo } from "../hooks/useCloudinary";
import { useMediaDimentionQuery } from "../hooks/useMediaDimentonQuery";
import BackButton from "../UI/Buttons/BackButton";
import { TextButton } from "../UI/Buttons/TextButton";
import MainText from "../UI/Title/MainText";

const Octave = () => {
  const { isSmallScreen } = useMediaDimentionQuery();
  return (
    <div
      style={{ backgroundColor: "#181A1E" }}
      className={"flex-col items-center justify-center "}
    >
      <div
        className={
          "absolute flex justify-between items-end pt-0 pl-12 pr-12 w-full "
        }
        style={{
          paddingLeft: isSmallScreen ? "10.5%" : "19%",
          paddingRight: isSmallScreen ? "9%" : "18%",
        }}
      >
        <div>
          <BackButton />
          <MainText
            text={"UX/UI Design"}
            className={"l:text-xs sm:text-xxs text-light "}
            style={{ paddingTop: 56 }}
          />
        </div>
        <div className={"flex justify-center items-center"}>
          <MainText
            text={"Live project (2024) "}
            className={"l:text-xs sm:text-xxs text-light "}
          />
          <TextButton
            useWhite={true}
            title={"Visit"}
            link={"https://www.octavehq.com/"}
            className={"text-light pl-1 l:text-xs sm:text-xxs"}
          />
        </div>
      </div>

      <AdvancedImage
        cldImg={optimizedImage(
          isSmallScreen ? "Octave_1_lfhw5s" : "Octave_1_g6iudz"
        )}
      />
      <AdvancedImage
        cldImg={optimizedImage(
          isSmallScreen ? "Octave_2_pviom2" : "Octave_2_srvqdq"
        )}
      />

      <div className="w-full relative bg-octave-background z-0 pb-10 display">
        <AdvancedImage
          cldImg={optimizedImage(
            isSmallScreen ? "Octave_3_stxh8h" : "Octave_3_qkn8p0"
          )}
        />
        <AdvancedImage
          cldImg={optimizedImage(
            isSmallScreen ? "Octave_4_c7dfxf" : "Octave_4_nbvpuz"
          )}
        />
        <AdvancedImage
          cldImg={optimizedImage(
            isSmallScreen ? "Octave_5_kfuaph" : "Octave_5_xsd1f7"
          )}
        />
        <AdvancedImage
          cldImg={optimizedImage(
            isSmallScreen ? "Octave_6_actsro" : "Octave_6_s97pak"
          )}
        />
        <AdvancedImage
          cldImg={optimizedImage(
            isSmallScreen ? "Octave_7_c9qicn" : "Octave_7_ofijwd"
          )}
        />
        <AdvancedImage
          cldImg={optimizedImage(
            isSmallScreen ? "Octave_8_mz72ng" : "Octave_8_dvnure"
          )}
        />
        <AdvancedImage
          cldImg={optimizedImage(
            isSmallScreen ? "Octave_9_hykh1f" : "Octave_9_ek0t98"
          )}
        />
        <div className="justify-center pt-20">
          <div
            style={{
              marginLeft: isSmallScreen ? "11%" : "19%",
              maxWidth: isSmallScreen ? "78%" : "62%",
            }}
          >
            <AdvancedVideo
              cldVid={optimizedVideo("octaveVideo2_tob0hi")}
              controls
              style={{
                paddingBottom: 150,
              }}
              className={"h-auto max-w-full"}
            />
          </div>
        </div>
        <AdvancedImage
          cldImg={optimizedImage(
            isSmallScreen ? "Octave_10_o8ffsn" : "Octave_10_omfhli"
          )}
        />
      </div>
      <div className="w-full relative bg-octave-background  pb-40 ">
        <div
          style={{
            marginLeft: isSmallScreen ? "11%" : "19%",
            maxWidth: isSmallScreen ? "78%" : "62%",
          }}
        >
          <AdvancedVideo
            cldVid={optimizedVideo("octaveVideo1_vzioek")}
            controls
            style={{
              paddingBottom: 150,
            }}
            className={"h-auto max-w-full  "}
          />
        </div>

        <AdvancedImage
          cldImg={optimizedImage(
            isSmallScreen ? "Octave_11_nk7zwu" : "Octave_11_yak48h"
          )}
          style={{ paddingBottom: 100 }}
        />
      </div>
    </div>
  );
};

export default Octave;
