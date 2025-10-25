import Header from "../components/Header.jsx";
import PreviewCard from "../components/PreviewCard.jsx"
import Footer from "../components/Footer.jsx";
import PropTypes from "prop-types";

const ListPage = ({formData, authorImage}) => {
  return (
    <>
    <Header />
     <button>Link para añadir proyecto nuevo</button>
      <ul>
        <li><PreviewCard formData={formData} authorImage={authorImage}/></li>
        <li><PreviewCard formData={formData} authorImage={authorImage}/></li>
        <li><PreviewCard formData={formData} authorImage={authorImage}/></li>
      </ul>
      <Footer />
    </>
  );
};

export default ListPage;

ListPage.propTypes = {
    formData: PropTypes.object.isRequired,
    authorImage: PropTypes.string.isRequired,
}