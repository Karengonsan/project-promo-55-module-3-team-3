import Header from "../components/Header";
import Footer from "../components/Footer";
import PropTypes from "prop-types";
import "../styles/previewCard.css";
import "../styles/PreviewProjectImage.css"
import "../styles/header.css"
import "../styles/preview.css"
import Preview from "../components/Preview.jsx";



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
