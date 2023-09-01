import React from "react";

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
