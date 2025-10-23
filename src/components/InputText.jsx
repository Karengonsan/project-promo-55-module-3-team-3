import "react";
import PropTypes from "prop-types";
import "../styles/form.css";

const InputText = ({ type = "text", name, placeholder, value, onChange }) => {
  return (
    <>
      <label htmlFor={name} className="sr-only"></label>
      <input
        type={type}
        name={name}
        id={name}
        value={value}
        onChange={onChange}
        placeholder={placeholder}
      />
    </>
  );
};

export default InputText;

InputText.protoTypes = {
  type: PropTypes.string,
  name: PropTypes.string.isRequired,
  placeholder: PropTypes.string,
  value: PropTypes.string.isRequired,
  onChange: PropTypes.func.isRequired,
};
