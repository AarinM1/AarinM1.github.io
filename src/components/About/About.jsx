import React from "react";
import styles from "./About.module.css";
import { getImageUrl } from "../../utils";

export const About = () => {
  return (
    <section className={styles.container} id="about">
      <h2 className={styles.title}>About</h2>
      <div className={styles.content}>
        <div className={styles.aboutText}>
          <h2>
            I am an innovative problem solver passionate about leveraging technology for positive change. 
            With expertise in full-stack development and machine learning, I develop groundbreaking solutions 
            that challenge limits and make a meaningful impact on people's lives.
          </h2>
        </div>
        <ul className={styles.aboutItems}>
          <li className={styles.aboutItem}>
            <img src={getImageUrl("about/cursorIcon.png")} alt="Cursor icon" />
            <div className={styles.aboutItemText}>
              <h3>Engineer</h3>
              <p>
                Actively seeking a full-time role in software development or any tech-related field starting in Fall 2025.
              </p>
            </div>
          </li>
          <li className={styles.aboutItem}>
            <img src={getImageUrl("about/serverIcon.png")} alt="Server icon" />
            <div className={styles.aboutItemText}>
              <h3>Student</h3>
              <p>
                Senior at UT Austin majoring in Electrical and Computer Engineering & Business.
              </p>
            </div>
          </li>
          <li className={styles.aboutItem}>
            <img src={getImageUrl("about/uiIcon.png")} alt="UI icon" />
            <div className={styles.aboutItemText}>
              <h3>Interests</h3>
              <p>
                Passionate about machine learning, artificial intelligence, computer science, and all things tech.
              </p>
            </div>
          </li>
        </ul>
      </div>
    </section>
  );
};
