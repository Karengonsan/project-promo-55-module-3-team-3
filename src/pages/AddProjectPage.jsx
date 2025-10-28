import { useState } from "react";
import { useNavigate } from "react-router-dom";
import Preview from "../components/Preview.jsx";
import Header from "../components/Header.jsx";
import Form from "../components/Form.jsx";
import Buttons from "../components/Buttons.jsx";
import Footer from "../components/Footer";
import "../styles/form.css";
import "../styles/add-project-page.css"

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
  const navigate = useNavigate(); // Para redirigir entre rutas, por lo visto

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

  // Guarda el proyecto, por lo visto va aqui porque es donde está toda la info, yo pensabe que iba en el buttons, pero nop
  const handleSaveProject = () => {
    const newProject = {
        id: crypto.randomUUID(), // Esto es para crear un id único
        ...formData, 
        projectImage,
        authorImage,
    };
    const storedProjects = JSON.parse(localStorage.getItem("projects")) || [];
    const updateProjects = [...storedProjects, newProject];
    localStorage.setItem("projects", JSON.stringify(updateProjects));
    navigate("/list"); // redirige al listado
  }

  return (
    <>
      <Header />
      <Preview formData={formData} authorImage={authorImage} projectImage={projectImage}/>
      <Form formData={formData} updateForm={updateForm} />
      <Buttons
          updateProjectImage={updateProjectImage}
          updateAutorImg={updateAutorImg} />
      <button className="addproject-button" onClick={handleSaveProject}>Guardar proyecto</button>
      <Footer />
    </>
  );
};

export default AddProjectPage;
