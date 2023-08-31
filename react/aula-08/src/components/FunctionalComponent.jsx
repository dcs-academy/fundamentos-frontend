import React, { useState, useEffect } from "react";

export default function FunctionalComponent(props) {
  // useState
  const [title, setTitle] = useState(props.title);
  const [name, setName] = useState("");

  useEffect(() => {
    console.log("Componente Funcional montado!");
  }, []);

  useEffect(() => {
    const timer = setTimeout(() => {
      console.log("Timeout executado!");
    }, 1000);

    return () => {
      clearTimeout(timer);
      console.log("Componente desmontado!");
    };
  }, []);

  useEffect(() => {
    console.log("Título atualizou!");
  }, [title]);

  useEffect(() => {
    console.log("Name atualizou!");
  }, [name]);

  useEffect(() => {
    console.log("Qualquer atualização!");
  });

  const onChangeTitle = (input) => {
    setTitle(input.target.value);
  };

  const onChangeName = (input) => {
    setName(input.target.value);
  };

  return (
    <>
      <h1>{title}</h1>
      <input type="text" value={title} onChange={onChangeTitle} />
      <input type="text" value={name} onChange={onChangeName} />
    </>
  );
}
