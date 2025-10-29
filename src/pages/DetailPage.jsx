import { useParams } from "react-router-dom";
import Header from "../components/Header";
import Preview from "../components/Preview.jsx";
import Footer from "../components/Footer";
import "../styles/header.css";
import "../styles/preview.css";
import "../styles/preview-project-image.css";
import "../styles/preview-card.css";

const DetailPage = () => {
  const { id } = useParams();
  const projects = JSON.parse(localStorage.getItem("projects")) || [];
  const project = projects.find((item) => item.id === id);
  
  if (!project) {
    return <p>Proyecto no encontrado</p>;
  }
  return (
    <>
      <Header />
      <Preview
        formData={project}
        projectImage={project.projectImage}
        authorImage={project.authorImage}
      />
      <Footer />
    </>
  );
};

export default DetailPage;
