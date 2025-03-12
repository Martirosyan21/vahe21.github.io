import { AdvancedImage, AdvancedVideo } from "@cloudinary/react";
import React from "react";
import { peerTreeImages } from "../constants";
import { optimizedImage, optimizedVideo } from "../hooks/useCloudinary";
import BackButton from "../UI/Buttons/BackButton";

const PeerTree = () => (
  <div>
    <div
      className={
        "absolute flex justify-between items-end pt-0 pl-12 pr-12 w-full "
      }
      style={{ paddingLeft: (window.innerWidth - 1200) / 2 }}
    >
      <BackButton darkMode />
    </div>
    <div
      style={{ backgroundColor: "#FAFAFA" }}
      className={"pr-12 pl-12  pb-24"}
    >
      <div className={"items-center justify-center flex"}>
        <div style={{ maxWidth: 1200 }} className={"justify-center"}>
          {peerTreeImages.slice(0, 8)?.map((peerTreeChunk, index) => (
            <AdvancedImage
              key={index}
              cldImg={optimizedImage(peerTreeChunk.image)}
              className="h-full w-full"
              style={{ paddingBottom: peerTreeChunk?.paddingBottom }}
            />
          ))}
          <p style={styles.font16}>Builder</p>
          <div className={"justify-center"} style={{ display: "flex" }}>
            <div className={"justify-center mt-4 mb-40"}>
              <AdvancedVideo
                cldVid={optimizedVideo("PT_eoqonm")}
                controls
                className={"h-auto max-w-full "}
              />
            </div>
          </div>
          {peerTreeImages
            .slice(8, peerTreeImages?.length - 1)
            ?.map((peerTreeChunk, index) => (
              <AdvancedImage
                key={index}
                cldImg={optimizedImage(peerTreeChunk.image)}
                className="h-full w-full"
                style={{ paddingBottom: peerTreeChunk?.paddingBottom }}
              />
            ))}
        </div>
      </div>
    </div>
  </div>
);

const styles = {
  font16: {
    fontSize: 40,
    fontWeight: "700",
    letterSpacing: "-3%",
  },
};
export default PeerTree;
