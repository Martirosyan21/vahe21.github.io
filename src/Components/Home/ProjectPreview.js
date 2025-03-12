import { AdvancedImage } from "@cloudinary/react";
import React from "react";
import { optimizedImage } from "../../hooks/useCloudinary";
import { TextButton } from "../../UI/Buttons/TextButton";
import { ProjectTag } from "../../UI/Tag";
import MainText from "../../UI/Title/MainText";

const ProjectPreview = ({ project }) => (
  <div className={"l:flex pt-35 pb-14"}>
    <AdvancedImage
      cldImg={optimizedImage(project.image)}
      style={{ maxWidth: 430, maxHeight: 306 }}
    />
    <div className={"ml-10 pb-12"} />
    <div
      style={{
        display: "flex",
        flexDirection: "column",
        justifyContent: "space-between",
      }}
    >
      <div>
        <p
          className={"font-Kanit text-dark text-s pb-2"}
          style={{ fontWeight: "275" }}
        >
          {project.title}
        </p>
        <div className={"flex-row flex"}>
          {project.tags.map((item, index) => (
            <ProjectTag key={item.toString() + index} item={item} />
          ))}
        </div>
        <MainText text={project?.description} />
      </div>
      <div>
        <div className={"flex row pb-1"}>
          {project?.links?.map((item) => (
            <TextButton
              key={item?.title}
              newTab={item?.newTab}
              link={item?.linkTo}
              title={item?.title}
            />
          ))}
        </div>
      </div>
    </div>
  </div>
);

export default ProjectPreview;
