import React from "react";
import logo from "./logo.svg";
import "./App.css";
import Welcome from "./components/Welcome";
import Persona from "./components/Persona";
import Tarjeta from "./components/Tarjeta";

function App() {
  return (
    <div className="app">
      <Tarjeta
        nombre="Spider-man"
        publicacion="(2019)"
        comentario="malo"
        puntaje="malo"
        imagenUrl="https://dam.smashmexico.com.mx/wp-content/uploads/2018/03/femme-fatale-spider-man-homecoming-2-jessica-drew.jpg"
      />

      <Tarjeta
        nombre="Batman"
        publicacion="(1989)"
        comentario="Excelente!"
        puntaje="bueno"
        imagenUrl="https://i.pinimg.com/originals/92/b4/a6/92b4a64312055fc4ade1e6254835d6bf.png"
      />

      <Tarjeta
        nombre="Batman & Robin"
        publicacion="(1997)"
        comentario="Regular"
        puntaje="regular"
        imagenUrl="https://upload.wikimedia.org/wikipedia/en/3/37/Batman_%26_Robin_poster.jpg"
      />
    </div>
  );
}

export default App;
