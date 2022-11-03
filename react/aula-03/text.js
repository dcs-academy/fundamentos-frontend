"use strict";

const container = document.getElementById("root");
const root = ReactDOM.createRoot(container);

function text() {
  const element = (
    <div>
      <h1>Olá Mundo!</h1>
      <p style={{ color: "red" }}>Texto gerado com um elemento React.</p>
      <p>Agora são {new Date().toLocaleTimeString()}.</p>
    </div>
  );

  root.render(element);
}

setInterval(text, 1000);
