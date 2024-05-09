import React from "react";

import styles from "./Projects.module.css";


export const Projects = () => {
  const handleClick = () => {
    console.log("Button clicked! Implement your logic here.");
    // Add your logic for handling the button click
  };

  return (
    <section className={styles.container} id="projects">
      <h2 className={styles.title}>Projects</h2>
      <div className={styles.content}>
        <button onClick={handleClick} className={styles.projBtn}>Click to see what I'm working on</button>
      </div>
    </section>
  );
};

