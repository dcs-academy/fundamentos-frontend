import React from "react";
import PropTypes from "prop-types";

class InputText extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      value: props.value,
    };
  }

  componentDidMount() {
    console.log(`${this.props.name} foi montado!`);
  }

  componentWillUnmount() {
    console.log(`${this.props.name} foi desmontado!`);
  }

  render() {
    return (
      <>
        <label htmlFor={this.props.name}>{this.props.label}</label>
        <input
          type={this.props.type}
          name={this.props.name}
          id={this.props.name}
          value={this.props.value}
          placeholder={this.props.placeholder}
          onChange={this.props.onChange}
        />
      </>
    );
  }
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
