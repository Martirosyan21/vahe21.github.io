import { AdvancedImage } from "@cloudinary/react";
import React from "react";
import { augustImages } from "../constants";
import { optimizedImage } from "../hooks/useCloudinary";
import BackButton from "../UI/Buttons/BackButton";

const August = () => {
  return (
    <div>
      <div
        className={
          "absolute flex justify-between items-end pt-0 pl-12 pr-12 w-full "
        }
        style={{ paddingLeft: (window.innerWidth - 1200) / 2 }}
      >
        <BackButton />
      </div>
      <div
        style={{ backgroundColor: "#181A1E" }}
        className={"pr-12 pl-12 pt-24 pb-24"}
      >
        <div className={"items-center justify-center flex"}>
          <div style={{ maxWidth: 1200 }} className={"justify-center"}>
            {augustImages?.map((augustChunk, index) => (
              <AdvancedImage
                key={index}
                cldImg={optimizedImage(augustChunk.image)}
                className="h-full w-full"
                style={{ paddingBottom: augustChunk?.paddingBottom }}
              />
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default August;
