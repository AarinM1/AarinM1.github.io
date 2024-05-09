import React from "react";
import styles from "./Projects.module.css";
import { useNavigate } from 'react-router-dom';


export const Projects = () => {
  let navigate = useNavigate();

  const handleClick = () => {
    navigate('/AllProjs');
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

