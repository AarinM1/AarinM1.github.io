import React from 'react';
import { getImageUrl } from '../../utils';
import styles from './Intro.module.css';

export const Intro = () => {
    return <section className={styles.container}>
        <div className={styles.content}>
            <h1 className={styles.title}>Hi, I'm Aarin</h1>
            <p className={styles.description}>A Computer Scientist & Software Engineer</p>
            <a href="#contact" className={styles.contactBtn}>Contact Me</a>
        </div>
        <img src={getImageUrl("intro/backImg.png")} alt='backgroundImg' className={styles.heroImg}/>
        <div className={styles.topBlur}/>
        <div className={styles.bottomBlur}/>

    </section>
};