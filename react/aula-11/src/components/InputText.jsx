import React from "react";
import PropTypes from "prop-types";

function InputText(props) {
  const [state, setState] = React.useState({
    value: props.value,
  });

  React.useEffect(() => {
    console.log(`o input ${props.name} foi montado!`);

    return () => {
      console.log(`o input ${props.name} foi desmontado!`);
    };
  }, [props]);

  return (
    <>
      <label htmlFor={props.name}>{props.label}</label>
      <input
        type={props.type}
        name={props.name}
        id={props.name}
        value={props.value}
        placeholder={props.placeholder}
        onChange={props.onChange}
      />
    </>
  );
}

export default InputText;

InputText.propTypes = {
  label: PropTypes.string,
  type: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
  value: PropTypes.string.isRequired,
  placeholder: PropTypes.string,
  onChange: PropTypes.func.isRequired,
};

InputText.defaultProps = {
  label: "Informe o label",
  placeholder: "Informe o campo",
};
