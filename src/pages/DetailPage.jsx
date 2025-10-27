import Header from "../components/Header";
import PreviewProjectImage from "../components/PreviewProjectImage.jsx";
import PreviewCard from "../components/PreviewCard.jsx";
import Footer from "../components/Footer";
import PropTypes from "prop-types";

const DetailPage = ({ projectImage, formData, authorImage }) => {
  return (
    <>
      <Header />
      <PreviewProjectImage projectImage={projectImage} />
      <PreviewCard formData={formData} authorImage={authorImage} />
      <Footer />
    </>
  );
};

DetailPage.propTypes = {
  projectImage: PropTypes.string.isRequired,
  formData: PropTypes.object.isRequired,
  authorImage: PropTypes.string.isRequired,
};

export default DetailPage;
