import React, { useState, useEffect } from "react";
import InputText from "../../components/InputText";

function FunctionalComponent() {
  const [state, setState] = useState({
    showEmail: true,
    name: "",
    email: "",
  });

  useEffect(() => {
    console.log(`functional component foi montado!`);
  }, []);

  React.useEffect(() => {
    console.log(`o estado do functional component foi atualizado!`);
  }, [state]);

  React.useEffect(() => {
    console.log(`o nome ou email do functional component foi atualizado!`);
  }, [state.name, state.email]);

  function onChangeState(input) {
    setState({
      ...state,
      [input.target.name]: input.target.value,
    });
  }

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
            value={state.name}
            onChange={onChangeState}
          />
        </div>

        {state.showEmail && (
          <div className="row">
            <InputText
              label="E-mail"
              type="email"
              name="email"
              id="email"
              placeholder="Informe seu e-mail"
              value={state.email}
              onChange={onChangeState}
            />
          </div>
        )}

        <button type="submit">Enviar</button>
      </form>
      <button
        onClick={() => setState({ ...state, showEmail: !state.showEmail })}
      >
        {state.showEmail ? "Ocultar" : "Mostrar"}
      </button>
    </>
  );
}

export default FunctionalComponent;
