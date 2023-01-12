
import React from "react";

import styles from "./loader.module.css";
export const Loader = ({message}) => {
  return (
    <div className={styles.main}>
      <h2>{message}</h2>
      <div className={styles.loading}>
        <span> Loading.... </span>
      </div>
    </div>
  );
};
