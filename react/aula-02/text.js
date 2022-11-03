"use strict";

function Text(props) {
  return (
    <div>
      <p style={{ color: "red" }}>Texto gerado com um elemento React.</p>
      <p style={{ color: "red" }}>Texto gerado com um elemento React.</p>
    </div>
  );
}

const container = document.getElementById("root");
const root = ReactDOM.createRoot(container);

root.render(<Text />);
