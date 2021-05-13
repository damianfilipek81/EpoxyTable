import React from 'react';
import styles from './Contact.module.scss';
import { Container } from '@material-ui/core';

const Contact = () => (
  <div className={styles.root}>
    <Container className={styles.container}>
      <h2 className={styles.title}>Kontakt</h2>
      <div className={styles.contactWrapper}>
        <div className={styles.leftInfo}>

        </div>
        <div className={styles.rightInfo}>

        </div>
      </div>
    </Container>
  </div>
)

export default Contact;