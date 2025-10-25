import { useState } from "react";
import Preview from "../components/Preview.jsx";
import Header from "../components/Header.jsx";
import Form from "../components/Form.jsx";
import Buttons from "../components/Buttons.jsx";
import Footer from "../components/Footer";
import "../styles/form.css";

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

  const updateProjectImage = (file) => {
    if (file) setProjectImage(file);
  };

  const updateAutorImg = (file) => {
    if (file) setAuthorImage(file);
  };

  // Función para actualizar los datos desde los inputs
  const updateForm = (ev) => {
    const { name, value } = ev.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  return (
    <>
      <Header />
      <Form formData={formData} updateForm={updateForm} />
      <Preview
        formData={formData}
        authorImage={authorImage}
        projectImage={projectImage}
      />
      <Buttons
        updateProjectImage={updateProjectImage}
        updateAutorImg={updateAutorImg}
      />
      <Footer />
    </>
  );
};

export default AddProjectPage;
