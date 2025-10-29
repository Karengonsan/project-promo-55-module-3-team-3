import { useState } from "react";
import { useNavigate } from "react-router-dom";
import Header from "../components/Header.jsx";
import Preview from "../components/Preview.jsx";
import Form from "../components/Form.jsx";
import Footer from "../components/Footer";
import "../styles/form.css";
import "../styles/add-project-page.css";

const AddProjectPage = () => {
  const [formData, setFormData] = useState({
    name: "",
    slogan: "",
    repo: "",
    demo: "",
    technologies: "",
    desc: "",
    autor: "",
    job: "",
  });

  const [projectImage, setProjectImage] = useState(null);
  const [authorImage, setAuthorImage] = useState(null);
  const navigate = useNavigate();

  const updateProjectImage = (base64Image) => {
    setProjectImage(base64Image);
  };

  const updateAutorImg = (base64Image) => {
    setAuthorImage(base64Image);
  };

  const updateForm = (ev) => {
    const { name, value } = ev.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const handleSaveProject = () => {
    const newProject = {
      id: crypto.randomUUID(),
      ...formData,
      projectImage,
      authorImage,
    };
    const storedProjects = JSON.parse(localStorage.getItem("projects")) || [];
    const updateProjects = [...storedProjects, newProject];
    localStorage.setItem("projects", JSON.stringify(updateProjects));
    navigate("/list");
  };

  const handleResetForm = () => {
    setFormData({
      name: "",
      slogan: "",
      repo: "",
      demo: "",
      technologies: "",
      desc: "",
      autor: "",
      job: "",
    });
    setProjectImage(null);
    setAuthorImage(null);
  };

  return (
    <>
      <Header />
      <Preview
        formData={formData}
        authorImage={authorImage}
        projectImage={projectImage}
      />
      <Form
        formData={formData}
        updateForm={updateForm}
        updateProjectImage={updateProjectImage}
        updateAutorImg={updateAutorImg}
        handleSaveProject={handleSaveProject}
        handleResetForm={handleResetForm}
      />
      <Footer />
    </>
  );
};

export default AddProjectPage;
