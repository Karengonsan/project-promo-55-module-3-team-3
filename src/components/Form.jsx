import "react";
import ProjectFields from "./ProjectFields";
import AuthorFields from "./AuthorFields";
import Buttons from "./Buttons";
import "../styles/form.css";

const Form = ({
  formData,
  updateForm,
  updateProjectImage,
  updateAutorImg,
  handleSaveProject,
  handleResetForm,
}) => {
  const handleSubmit = (ev) => {
    ev.preventDefault();
    handleSaveProject();
  };
  return (
    <div className="form-container">
      <form className="form" onSubmit={handleSubmit}>
        <h2>Información</h2>
        <h3>Cuéntanos sobre el proyecto</h3>
        <ProjectFields data={formData} onChange={updateForm} />
        <h3>Cuéntanos sobre la autora</h3>
        <AuthorFields data={formData} onChange={updateForm} />

        <Buttons
          updateProjectImage={updateProjectImage}
          updateAutorImg={updateAutorImg}
        />
        <div className="form-buttons">
          <button type="submit" className="addproject-button">
            Guardar proyecto
          </button>
          <button
            type="button"
            className="resetproject-button"
            onClick={handleResetForm}
          >
            Limpiar Formulario
          </button>
        </div>
      </form>
    </div>
  );
};
export default Form;
