import React from "react";
import styles from "../styles/Button.module.css";

function Button({ text, onClick }) {
  return (
    <div>
      <div className={styles.wrapper}>
        <button
          onClick={() => {
            onClick();
          }}
          className={styles.neons}
        >
          {text}
        </button>
      </div>
    </div>
  );
}

export default Button;
