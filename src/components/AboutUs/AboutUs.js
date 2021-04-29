import React from 'react';
import styles from './AboutUs.module.scss';
import { settings } from '../../settings.js';
import { Container } from '@material-ui/core';

const AboutUs = () => (
  <div className={styles.root}>
    <Container>
      <h2 className={styles.title}>O nas</h2>
      <div className={styles.sectionWrapper}>
        <div className={styles.imageWrapper}>
          <img alt='' src={settings.aboutUs.image_1}></img>
        </div>
        <div className={styles.description}>
          <h3>Lorem ipsum dolor</h3>
          <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus felis nulla, feugiat id viverra vehicula, rutrum a justo.</p>
        </div>
      </div>
      <div className={styles.sectionWrapper}>
        <div className={styles.description}>
          <h3>Lorem ipsum dolor</h3>
          <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus felis nulla, feugiat id viverra vehicula, rutrum a justo.</p>
        </div>
        <div className={styles.imageWrapper}>
          <img alt='' src={settings.aboutUs.image_2}></img>
        </div>
      </div>
    </Container>
  </div>
)

export default AboutUs;