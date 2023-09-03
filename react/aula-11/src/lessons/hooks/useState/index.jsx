import React, { useState } from "react";

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

  return (
    <>
      <h1>Hooks: useState</h1>
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
    </>
  );
}

export default SampleUseState;
