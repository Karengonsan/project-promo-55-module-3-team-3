import "react";
import ImageProjectDefault from "../images/PreviewImage.jpg";

const PreviewProjectImage = ({ projectImage }) => {
  return <img src={projectImage ? projectImage : ImageProjectDefault} />;
};

export default PreviewProjectImage;
