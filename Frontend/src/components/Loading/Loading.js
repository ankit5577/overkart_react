import React from "react";
import styles from "./Loading.module.css";

function Loading(prop) {
  return (
    <div className={`${prop.fullscreen && 'h-screen'}`}>
      <div className={`${styles.loader} mx-auto`}></div>
    </div>
  );
}

export default Loading;
