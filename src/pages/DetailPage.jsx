import PropTypes from "prop-types";
import Header from "../components/Header";
import Preview from "../components/Preview.jsx";
import Footer from "../components/Footer";
import "../styles/header.css";
import "../styles/preview.css";
import "../styles/PreviewProjectImage.css";
import "../styles/previewCard.css";

const DetailPage = () => {
  return (
    <>
      <Header />
      <Preview />
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
