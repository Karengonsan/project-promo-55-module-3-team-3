import "react";
import "../styles/form.css";
import PropTypes from "prop-types";

const InputUrl = ({ type = "url", name, placeholder, value, onChange }) => {
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


export default InputUrl;

InputUrl.propTypes = {
  type: PropTypes.string,
  name: PropTypes.string.isRequired,
  id: PropTypes.string.isRequired,
  value: PropTypes.string.isRequired,
  onChange: PropTypes.func.isRequired,
  placeholder: PropTypes.string,
};
