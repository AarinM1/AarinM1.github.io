import React from "react";
import { getImageUrl } from "../../utils";
import styles from "./About.module.css";

export const About = () => {
    return <section className={styles.container}>
        <h2 className={styles.title} id="about">About</h2>
        <div className={styles.content}>
            <img src={getImageUrl("about/aboutImage.png")} alt="Image of me"
                className={styles.aboutImage}/>
            <ul className={styles.aboutItems}>
                <li className={styles.aboutItem}><img src={getImageUrl("about/cursorIcon.png")} alt="CursorIcon" /></li>
                <div className={styles.aboutItemText}>
                    <h3>H1 </h3>
                    <p>h1 explanation text</p>
                </div>

                <li className={styles.aboutItem}><img src={getImageUrl("about/serverIcon.png")} alt="ServerIcon" /></li>
                <div className={styles.aboutItemText}>
                    <h3>H2 </h3>
                    <p>h2 explanation text</p>
                </div>

                <li className={styles.aboutItem}><img src={getImageUrl("about/uiIcon.png")} alt="uiIcon" /></li>
                <div className={styles.aboutItemText}>
                    <h3>H3 </h3>
                    <p>h3 explanation text</p>
                </div>
            </ul>
        </div>
        </section>
};