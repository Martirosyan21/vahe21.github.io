import { Cloudinary } from "@cloudinary/url-gen";
import { auto, fill } from "@cloudinary/url-gen/actions/resize";
import { autoGravity } from "@cloudinary/url-gen/qualifiers/gravity";

const cld = new Cloudinary({ cloud: { cloudName: "dbikljl1s" } });
export const optimizedImage = (image) => {
  return cld
    .image(image)
    .format("auto") // Optimize delivery by resizing and applying auto-format and auto-quality
    .quality("auto")
    .resize(auto().gravity(autoGravity())); // Transform the image: auto-crop to square aspect_ratio
};

export const optimizedVideo = (video) => {
  return cld.video(video).resize(fill());
};
