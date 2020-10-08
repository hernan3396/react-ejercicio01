import React from "react";
import styles from "./Tarjeta.module.css";

function Tarjeta({ nombre, publicacion, imagenUrl, puntaje }) {
  const estiloPuntaje = styles[puntaje];
  return (
    <>
      <div className={styles.tarjeta}>
        <p className={estiloPuntaje}>
          {nombre} ({publicacion})
        </p>
        <img className={styles.img} src={imagenUrl} alt={nombre} />
      </div>
    </>
  );
}

export default Tarjeta;
