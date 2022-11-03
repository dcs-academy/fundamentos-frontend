"use strict";

const container = document.getElementById("root");
const root = ReactDOM.createRoot(container);

function Title(props) {
  return <h1 className="title">{props.children}</h1>;
}

function Paragraph(props) {
  return (
    <p style={{ color: props.color, fontSize: props.fontSize }}>
      {props.children}
    </p>
  );
}

function Card({ children, ...props }) {
  return (
    <div
      style={{
        borderRadius: 20,
        backgroundColor: props.backgroundColor,
        maxWidth: 380,
        padding: 20,
      }}
    >
      {children}
    </div>
  );
}

function App() {
  return (
    <Card backgroundColor="#444">
      <Title>Olá Mundo!</Title>
      <Paragraph fontSize="20px" color="red">
        Texto gerado com um elemento React.
      </Paragraph>
      <p>Agora são {new Date().toLocaleTimeString()}.</p>
    </Card>
  );
}

root.render(<App />);
