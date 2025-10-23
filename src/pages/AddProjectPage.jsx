import {useState} from "react";
import Preview from "../components/PreviewCard.jsx";
import "../styles/preview.css";

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
    image:"",
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
      {/* Menú hamburguesa con link a otras secciones */}

      <Preview {...formData} />
     {/*  <Form formData={formData} setFormData={updateForm} /> */}

      <ul>
        <li>Lista de proyectos</li>
      </ul>
      <img src="preview tarjeta" alt="" />
      <form>
        {/* Formulario para crear nuevo proyecto con 10 inputs */}
        <button>Subir foto autora</button>
        <button>Subir foto proyecto</button>
        <button>Subir proyecto</button>
      </form>
    </>
  );
};

export default AddProjectPage;
