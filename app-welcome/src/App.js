
import React, { useState } from 'react';
import './App.css';

function App() {
  const [nombre, setNombre] = useState('');
  const [edad, setEdad] = useState('');
  const [mensaje, setMensaje] = useState('');

  const handleSubmit = (event) => {
    event.preventDefault();
    if (edad < 18) {
      setMensaje(`Hola ${nombre}, eres muy joven para usar esta aplicación`);
    } else {
      setMensaje(`Bienvenido ${nombre}, gracias por usar nuestra aplicación`);
    }
    setNombre('');
    setEdad('');
  }

  return (
    <div className="app">
      <form onSubmit={handleSubmit} className="form">
        <label className="label">
          Nombre:
          <input type="text" value={nombre} onChange={(e) => setNombre(e.target.value)} className="input" />
        </label>
        <label className="label">
          Edad:
          <input type="number" value={edad} onChange={(e) => setEdad(e.target.value)} className="input" />
        </label>
        <input type="submit" value="Enviar" className="submit" />
      </form>
      <p className="message">{mensaje}</p>
    </div>
  );
}

export default App;
