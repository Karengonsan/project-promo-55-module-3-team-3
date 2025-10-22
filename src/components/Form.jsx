import { useState } from "react";
import ProjectFields from "./ProjectFields";
import AuthorFields from "./AuthorFields";
import "../styles/form.css";

const Form = () => {
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

  const handleChange = (ev) => {
    setFormData({
      ...formData,
      [ev.target.name]: ev.target.value,
    });
  };

  const handleSubmit = (ev) => {
    ev.preventDefault();
    console.log("Datos enviados:", formData);
  };
  return (
    <form className="form" onSubmit={handleSubmit}>
      <h2>Información</h2>
      <h3>Cuéntanos sobre el proyecto</h3>
      <ProjectFields data={formData} handleChange={handleChange} />
      <h3>Cuéntanos sobre la autora</h3>
      <AuthorFields data={formData} handleChange={handleChange} />
    </form>
  );
};
export default Form;
