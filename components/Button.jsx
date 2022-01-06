import React from "react";
import styles from "../styles/Button.module.css";

function Button({ text, onClick }) {
  return (
    <div>
      <div class={styles.wrapper}>
        <button
          onClick={() => {
            onClick();
          }}
          class={styles.neons}
        >
          {text}
        </button>
      </div>
    </div>
  );
}

export default Button;
