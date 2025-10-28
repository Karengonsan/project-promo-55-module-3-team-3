import ProjectFields from "./ProjectFields";
import AuthorFields from "./AuthorFields";
import "../styles/form.css";

const Form = ({ formData, updateForm }) => {
  const handleSubmit = (ev) => {
    ev.preventDefault();
    console.log("Datos enviados:", formData);
  };
  return (
    <div className="form-container">
      <form className="form" onSubmit={handleSubmit}>
        <h2>Información</h2>
        <h3>Cuéntanos sobre el proyecto</h3>
        <ProjectFields data={formData} onChange={updateForm} />
        <h3>Cuéntanos sobre la autora</h3>
        <AuthorFields data={formData} onChange={updateForm} />
      </form>
    </div>
  );
};
export default Form;
