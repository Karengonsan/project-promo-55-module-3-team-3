import "react";
import PropTypes from "prop-types";
import "../styles/form.css";

const InputTextArea = ({ name, placeholder, value, onChange }) => {
  return (
    <>
      <label htmlFor={name} className="sr-only"></label>
      <textarea
        name={name}
        id={name}
        value={value}
        onChange={onChange}
        placeholder={placeholder}
        maxLength={200}
      />
    </>
  );
};

InputTextArea.propTypes = {
  name: PropTypes.string.isRequired,
  value: PropTypes.string.isRequired,
  onChange: PropTypes.func.isRequired,
  placeholder: PropTypes.string,
};

export default InputTextArea;
