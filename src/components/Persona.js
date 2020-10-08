import React from "react";

function Persona({ nombre, edad }) {
  return (
    <>
      <p>{nombre}</p>
      <p>
        {edad >= 18 ? (
          <h1>Invitar a tomar algo</h1>
        ) : (
          <h1>No tiene edad para tomar alcohol</h1>
        )}
      </p>
    </>
  );
}

export default Persona;
