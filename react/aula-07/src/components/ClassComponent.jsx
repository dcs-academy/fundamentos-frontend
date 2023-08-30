import React from "react";

export default class ClassComponent extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      titulo: props.titulo,
    };

    this.onChangeTitle = this.onChangeTitle.bind(this);
  }

  // Executa toda vez que o componente é montado pela primeira vez.
  componentDidMount() {
    console.log("Componente montado!");
  }

  // Executa toda vez é desmontado
  componentWillUnmount() {
    console.log("Componente desmontado!");
  }

  // Executa toda vez que o componente é atualizado
  componentDidUpdate(prevProps, prevState) {
    console.log("Componente atualizado!");
    console.log("Props: ", prevProps, this.props);
    console.log("State: ", prevState, this.state);
  }

  onChangeTitle = (input) => {
    this.setState({
      titulo: input.target.value,
    });
  };

  render() {
    return (
      <>
        <h1>{this.state.titulo}</h1>
        <input
          type="text"
          value={this.state.titulo}
          onChange={this.onChangeTitle}
        />
      </>
    );
  }
}
