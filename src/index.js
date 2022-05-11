import React from 'react';
import ReactDOM from 'react-dom';

import App from './App';
import Comp from './comp';

import React, { useState } from 'react';

/**-------------- HOOK USESTATE FOR PRINT STRING----------- */
function CambiarTituloHook() {
  const [titulo, setTitulo] = React.useState('Hola React');

  function handleInputChange(event) {
    setTitulo(event.target.value);
  }

  return (
    <div className="test1">
      <h1>{titulo}</h1>
      <input placeholder="Actualizar titulo" onChange={handleInputChange} />
    </div>
  );
}

/**-------------- HOOK USESTATE SHOW COUNTER----------- */
function ContadorHook() {
  // Declara una nueva variable de estado, que llamaremos "count".
  const [count, setCount] = useState(0);
  return (
    <div>
      <p>You clicked {count} times</p>
      <button onClick={() => setCount(count + 1)}>Click me</button>
    </div>
  );
}
/**---------------------------------------- */

function App1(props) {
  return (
    <>
      <h1>Componente interno 1</h1>
      <p>{props.name}</p>
      <p>{props.lastname}</p>
      <p>{props.age}</p>
    </>
  );
}

function App2(props) {
  return (
    <>
      <h1>Componente interno 2</h1>
      <App1 name="Fernando" />
      <Comp name="sergio" />
    </>
  );
}

// <CambiarTituloHook />
// <App2 />
// <ContadorHook />
ReactDOM.render(<CambiarTituloHook />, document.getElementById('root'));
