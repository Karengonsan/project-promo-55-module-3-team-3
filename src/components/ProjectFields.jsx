import InputText from "./InputText";
import InputTextArea from "./InputTextArea";
import InputUrl from "./InputUrl";
import PropTypes from "prop-types";
import "../styles/form.css";

const ProjectFields = ({ data, handleChange }) => {
  return (
    <fieldset className="group-project">
      <legend className="sr-only">Detalles del proyecto</legend>

      <InputText
        name="name"
        placeholder="Nombre del proyecto"
        value={data.name}
        onChange={handleChange}
      />

      <InputText
        name="slogan"
        placeholder="Slogan"
        value={data.slogan}
        onChange={handleChange}
      />
      <div className="input-row">
      <InputUrl
        name="repo"
        placeholder="Repositorio"
        value={data.repo}
        onChange={handleChange}
      />
      <InputUrl
        name="demo"
        placeholder="Demo"
        value={data.demo}
        onChange={handleChange}
      />
      </div>
      <InputText
        name="technologies"
        placeholder="Tecnologías"
        value={data.technologies}
        onChange={handleChange}
      />
      <InputTextArea
        name="desc"
        placeholder="Descripción"
        value={data.desc}
        onChange={handleChange}
      />
    </fieldset>
  );
};
ProjectFields.propTypes = {
  data: PropTypes.shape({
    name: PropTypes.string.isRequired,
    slogan: PropTypes.string.isRequired,
    repo: PropTypes.string.isRequired,
    demo: PropTypes.string.isRequired,
    technologies: PropTypes.string.isRequired,
    desc: PropTypes.string.isRequired,
  }).isRequired,
  handleChange: PropTypes.func.isRequired,
};

export default ProjectFields;
