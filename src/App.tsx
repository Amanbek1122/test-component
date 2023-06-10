import { useState } from "react";
import "./App.css";
import Modal from "./Modal";

function App() {
  const [isOpen, setOpen] = useState(false);
  const [isOpen2, setOpen2] = useState(false);
  const [isOpen3, setOpen3] = useState(false);
  return (
    <div className="App">
      <button onClick={() => setOpen(true)}>Open First Modal</button>
      <button onClick={() => setOpen2(true)}>Open Second Modal</button>
      <button onClick={() => setOpen3(true)}>Open Second Modal</button>
      <Modal
        isOpen={isOpen}
        onClose={() => {
          setOpen(false);
        }}
      >
        Hello
      </Modal>
      <Modal
        isOpen={isOpen2}
        onClose={() => {
          setOpen2(false);
        }}
      >
        <h2>Title</h2>
        <div>Hello</div>
      </Modal>
      <Modal
        isOpen={isOpen3}
        onClose={() => {
          setOpen3(false);
        }}
      >
        <TestComponent />
      </Modal>
    </div>
  );
}

export default App;

function TestComponent() {
  return (
    <div>
      <h2>Some Title</h2>
      <p>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolor nemo
        saepe animi, amet veniam itaque.
      </p>
    </div>
  );
}
