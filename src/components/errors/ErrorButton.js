"use client"

import React from 'react';
import styles from "@/app/home.module.css";


const ErrorButton = () => {
  const handleClick = async () => {
    try {
      const response = await fetch(`${process.env.API_URL}/server-error`, {method: 'POST'});
      const data = await response.json();
      alert(`Response: ${response.status}, Message: ${data.message}`);
    } catch (error) {
      console.error('Error fetching data:', error);
      alert('Error fetching data');
    }
  };

  return <div className={styles.buttons}>
    <button className={styles.buttonerror} onClick={handleClick}>Trigger Error</button>
  </div>
};

export default ErrorButton;