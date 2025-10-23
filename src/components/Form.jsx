import ProjectFields from "./ProjectFields";
import AuthorFields from "./AuthorFields";
import "../styles/form.css";

const Form = ({ formData, updateForm }) => {
  const handleSubmit = (ev) => {
    ev.preventDefault();
    console.log("Datos enviados:", formData);
  };
  return (
    <form className="form" onSubmit={handleSubmit}>
      <h2>Información</h2>
      <h3>Cuéntanos sobre el proyecto</h3>
      <ProjectFields data={formData} handleChange={updateForm} />
      <h3>Cuéntanos sobre la autora</h3>
      <AuthorFields data={formData} handleChange={updateForm} />
    </form>
  );
};
export default Form;
