import "react";
import PreviewProjectImage from "./PreviewProjectImage.jsx";
import PreviewCard from "./PreviewCard.jsx";
import PropTypes from "prop-types";
import '../styles/preview.css'

const Preview = ({ formData, projectImage, authorImage }) => {
  return (
    <div className="preview-section">
      <div className="preview-project-image">
        <PreviewProjectImage projectImage={projectImage} />
      </div>
      <div className="preview-card">
        <PreviewCard formData={formData} authorImage={authorImage} />
      </div>
    </div>
  );
};

export default Preview;

Preview.propTypes = {
  projectImage: PropTypes.string.isRequired,
  formData: PropTypes.object.isRequired,
  authorImage: PropTypes.string.isRequired,
};
