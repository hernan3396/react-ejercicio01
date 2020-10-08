import React from "react";
import styles from "./Persona.module.css";

const Welcome = ({ name }) => {
  return <h2 className={styles.red}> Bienvenido {name} </h2>;
};

export default Welcome;
