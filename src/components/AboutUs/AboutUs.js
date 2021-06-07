import React from 'react';
import styles from './AboutUs.module.scss';
import { settings } from '../../settings.js';
import { Container } from '@material-ui/core';

const AboutUs = () => {
  const arr = [];

  for (let i = 0; i < 15; i++){
    arr.push(i);
  }
  return (
    <div className={styles.root}>
      <div className={styles.bubbles}>
        {arr.map(index=>(
          <div key={index} className={styles.bubble}></div>
        ))}
      </div>
      <Container>
        <h2 className={styles.title}>O nas</h2>
        <div className={styles.sectionWrapper}>
          <div className={styles.imageWrapper}>
            <img alt='' src={settings.aboutUs.aboutUs1}></img>
          </div>
          <div className={styles.description}>
            <h3>Jakość</h3>
            <p>Jesteśmy firmą która starannie dobiera odpowiednie kawałki drewna do każdego zamówienia tak by każdy blat był unikatowy.</p>
          </div>
        </div>
        <div className={styles.sectionWrapper}>
          <div className={styles.description}>
            <h3>Precyzja</h3>
            <p>Cenimy sobie staranność i precyzję wykonywanych zamówień, a na rynku wyróżnia nas indywidualne podejście do Klienta i konkurencyjne ceny.</p>
          </div>
          <div className={styles.imageWrapper}>
            <img alt='' src={settings.aboutUs.aboutUs2}></img>
          </div>
        </div>
      </Container>
    </div>
  )
}

export default AboutUs;