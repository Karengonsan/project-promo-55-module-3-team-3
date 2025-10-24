import "react";
import InputText from "./InputText";
import PropTypes from "prop-types";
import "../styles/form.css";

const AuthorFields = ({ data, onChange }) => {
  return (
    <fieldset className="group-author">
      <legend className="sr-only">Datos de la autora</legend>
      <InputText
        name="autor"
        placeholder="Nombre"
        value={data.autor} 
        onChange={onChange}
      />
      <InputText
        name="job"
        placeholder="Trabajo"
        value={data.job}
        onChange={onChange}
      />
    </fieldset>
  );
};

export default AuthorFields;

AuthorFields.propTypes = {
  data: PropTypes.shape({
    autor: PropTypes.string.isRequired,
    job: PropTypes.string.isRequired,
  }).isRequired,
  onChange: PropTypes.func.isRequired,
};
