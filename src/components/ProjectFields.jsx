import InputText from "./InputText";
import InputUrl from "./InputUrl";
import InputTextArea from "./InputTextArea";
import PropTypes from "prop-types";
import "../styles/form.css";

const ProjectFields = ({ data, onChange }) => {
  return (
    <fieldset className="group-project">
      <legend className="sr-only">Detalles del proyecto</legend>

      <InputText
        name="name"
        placeholder="Nombre del proyecto"
        value={data.name}
        onChange={onChange}
      />

      <InputText
        name="slogan"
        placeholder="Slogan"
        value={data.slogan}
        onChange={onChange}
      />
      <div className="input-row">
        <InputUrl
          name="repo"
          placeholder="Repositorio"
          value={data.repo}
          onChange={onChange}
        />
        <InputUrl
          name="demo"
          placeholder="Demo"
          value={data.demo}
          onChange={onChange}
        />
      </div>
      <InputText
        name="technologies"
        placeholder="Tecnologías"
        value={data.technologies}
        onChange={onChange}
      />
      <InputTextArea
        name="desc"
        placeholder="Descripción"
        value={data.desc}
        onChange={onChange}
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
  onChange: PropTypes.func.isRequired,
};

export default ProjectFields;
