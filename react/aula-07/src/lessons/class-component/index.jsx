import React from "react";
import InputText from "../../components/InputText";

class ClassComponent extends React.Component {
  constructor() {
    super();

    this.state = {
      showEmail: true,
      name: "",
      email: "",
    };

    this.onChangeState = this.onChangeState.bind(this);
  }

  componentDidMount() {
    console.log(`class component foi montado!`);
  }

  componentDidUpdate(prevProps, prevState) {
    console.log(prevProps, prevState);
    console.log(`class component foi atualizado!`);
  }

  onChangeState = (input) => {
    this.setState({
      ...this.state,
      [input.target.name]: input.target.value,
    });
  };

  render() {
    return (
      <>
        <h1>Formulário de Contato</h1>
        <form>
          <div className="row">
            <InputText
              label="Nome"
              type="text"
              name="name"
              placeholder="Informe seu nome"
              value={this.state.name}
              onChange={this.onChangeState}
            />
          </div>

          {this.state.showEmail && (
            <div className="row">
              <InputText
                label="E-mail"
                type="email"
                name="email"
                id="email"
                placeholder="Informe seu e-mail"
                value={this.state.email}
                onChange={this.onChangeState}
              />
            </div>
          )}

          <button type="submit">Enviar</button>
        </form>
        <button
          onClick={() =>
            this.setState({ ...this.state, showEmail: !this.state.showEmail })
          }
        >
          {this.state.showEmail ? "Ocultar" : "Mostrar"}
        </button>
      </>
    );
  }
}

export default ClassComponent;
