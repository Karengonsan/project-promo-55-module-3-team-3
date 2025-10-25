import { useState } from "react";
import Preview from "../components/Preview.jsx";
import Header from "../components/Header.jsx";
import Form from "../components/Form.jsx";
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
    image: "",
  });

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
      <Preview formData={formData}/>

      <ul>
        <li>Lista de proyectos</li>
      </ul>
      <img src="preview tarjeta" alt="" />

      <button>Subir foto autora</button>
      <button>Subir foto proyecto</button>
      <button>Subir proyecto</button>
      <Footer />
    </>
  );
};

export default AddProjectPage;
