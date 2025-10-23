import "react"
import Header from "../components/Header";
import Form from "../components/Form";
import "../styles/form.css"

const AddProjectPage = () => {
  return (
    <>
      {/* Menú hamburguesa con link a otras secciones */}
      <Header />
      <ul>
        <li>Lista de proyectos</li>
      </ul>
      <img src="preview tarjeta" alt="" />
      
        <Form />
        
        <button>Subir foto autora</button>
        <button>Subir foto proyecto</button>
        <button>Subir proyecto</button>     
    </>
  );
};

export default AddProjectPage;
