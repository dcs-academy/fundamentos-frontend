import React, { useState, useEffect } from "react";

function Card() {
  useEffect(() => {
    console.log("Card montando em tela (DidMount)");

    return () => {
      console.log("Card desmontando da tela (WillUnmount)");
    };
  }, []);

  return (
    <div style={{ backgroundColor: "white", padding: "5px" }}>
      <h1>Card</h1>
    </div>
  );
}

function SampleUseState() {
  const [firstName, setFirstName] = useState("Daniel");
  const [user, setUser] = useState({ name: "Daniel", age: 30 });
  const [profile, setProfile] = useState({
    user: {
      name: "Daniel",
      age: 30,
      social: {
        twitter: "@odanieldcs",
        instagram: "@odanieldcs",
      },
    },
    permissions: {
      canEdit: true,
      canList: true,
    },
  });
  const [showCard, setShowCard] = useState(false);

  // componentDidMount()
  // useEffect(() => {
  //   console.log("sampleUseState: DidMount");
  // });

  useEffect(() => {
    console.log("sampleUseState: DidMount 1x");

    return () => {
      console.log("sampleUseState: WillUnmount");
    };
  }, []);

  // componentDidUpdate()
  useEffect(() => {
    console.log("sampleUseState: DidUpdate, user foi atualizado");
  }, [user]);

  // componentWillUnmount()

  return (
    <>
      <h1>Hooks: useEffect</h1>
      <p style={{ color: "white" }}>Nome: {firstName}</p>
      <button onClick={() => setFirstName("Silva")}>Atualizar nome</button>
      <p style={{ color: "white" }}>
        {user.name}, {user.age}
      </p>
      <button
        onClick={() =>
          setUser((prevState) => ({
            ...prevState,
            age: prevState.age + 1,
          }))
        }
      >
        Atualizar idade
      </button>

      <p style={{ color: "white" }}>
        {profile.user.name}, {profile.user.age}, candEdit:
        {profile.permissions.canEdit ? "Sim" : "Não"}, candList:
        {profile.permissions.canList ? "Sim" : "Não"}
      </p>
      <button
        onClick={() =>
          setProfile((prevState) => ({
            ...prevState,
            permissions: {
              ...prevState.permissions,
              canEdit: false,
            },
          }))
        }
      >
        Atualizar perfil
      </button>

      <button onClick={() => setShowCard(!showCard)}>Mostrar card</button>
      {showCard && <Card />}
    </>
  );
}

export default SampleUseState;
