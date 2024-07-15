import React, { useState } from "react";
import styles from "./AllProjs.module.css";
import { getImageUrl } from '../utils';
import { useNavigate } from 'react-router-dom';

export const AllProjs = () => {
  const navigate = useNavigate();

  const images = [
    "projects/01_starting_page.png",
    "projects/02_news_page.png",
    "projects/03_todays_stock_info_page.png",
    "projects/04_6month_range.png",
    "projects/05_5yr_range.png"
  ];

  const [popupImage, setPopupImage] = useState(null);

  const handleImageClick = (image) => {
    setPopupImage(image);
  };

  const closePopup = () => {
    setPopupImage(null);
  };

  const buttonClick = () => {
    navigate('/');
  };

  return (
    <div className={styles.container}>
      <button onClick={buttonClick} className={styles.goBackButton}>Go back</button>
      
      <div className={styles.content}>
        <div className={styles.box}>
          <h1><b>Bloomberg Terminal</b></h1>
          <p>This is a mock Bloomberg terminal that uses machine learning to predict whether the price of a given stock will increase or decrease on a given day. 
            The terminal gives real-time updates and recent news articles based on the stock's fluctuations. 
            I implemented the frontend for the user to effectively get news/stock information and see it in a 
            visually appealing manner. 
            <br /><br />
            Implemented a Random Forest classifier with rolling average predictors and a backtesting mechanism to evaluate performance over time. 
            Achieved reliable predictions by focusing on avoiding overfitting and setting a 60% confidence threshold. 
          </p>
          <a href="https://github.com/AarinM1/bloomberg-terminal" target="_blank" rel="noopener noreferrer"><h3>GitHub Repository</h3></a>
          <div className={styles.imagesContainer}>
            <div className={styles.images}>
              {images.map((image, index) => (
                <img 
                  key={index} 
                  src={getImageUrl(image)} 
                  alt={`Project Image ${index + 1}`} 
                  onClick={() => handleImageClick(getImageUrl(image))}
                  className={styles.clickableImage}
                />
              ))}
            </div>
          </div>
        </div>
        <div className={styles.box}>
          <h1>Markov Model - Text Generator</h1>
          <p>
          Markov models are widely used in speech and handwriting recognition, information retrieval, and data compression. 
          This text generator uses an order K Markov Model to generate new, stylized pseudo-random text that mimics the patters found in the original input. 
          Inspiration for this project was taken from trying to get a better understanding of AI-driven chatbots and predictive text.
          </p>
          <a href="https://github.com/AarinM1/markovModel" target="_blank" rel="noopener noreferrer"><h3>GitHub Repository</h3></a>
        </div>
      </div>

      {popupImage && (
        <div className={styles.popup} onClick={closePopup}>
          <span className={styles.close}>&times;</span>
          <img src={popupImage} alt="Popup Image" className={styles.popupImage} />
        </div>
      )}
    </div>
  );
};
