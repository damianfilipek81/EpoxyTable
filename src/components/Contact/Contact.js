import React from 'react';
import styles from './Contact.module.scss';
import { Container } from '@material-ui/core';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faFacebookF, faInstagram } from '@fortawesome/free-brands-svg-icons';
import { settings } from '../../settings.js';

const Contact = () => (
  <div className={styles.root}>
    <Container className={styles.container}>
      <h2 className={styles.title}>Kontakt</h2>
      <div className={styles.contactWrapper}>
        <div className={styles.leftInfo}>
          <form action="/send-message" method="POST">
            <label>
              Twoje Imię: <input type="text" name="name" />
            </label>
            <label>
              E-mail: <input type="email" name="email" />
            </label>
            <label>
              Nr telefonu (opcjonalnie): <input type="tel" name="tel" />
            </label>
            <label>
              Wiadomość: <textarea name="message"></textarea>
            </label>
            <button type="submit">Wyślij wiadomość</button>
          </form>
        </div>
        <div className={styles.rightInfo}>
          <h3>Adres:</h3>
          <p>EPOXYTABLE Dominik Solecki ul. Jarowa 159, 35-083 Rzeszów</p>
          <h3>Nip:</h3>
          <p>8133859607</p>
          <h3>Nr. telefonu:</h3>
          <p>664 879 248</p>
          <h3>E-mail:</h3>
          <p>DominikSolecki@interia.pl</p>
          <div className={styles.social}>
            <a href={settings.social.facebook}><span><FontAwesomeIcon icon={faFacebookF} /></span></a>
            <a href={settings.social.instagram}><span><FontAwesomeIcon icon={faInstagram} /></span></a>
          </div>
        </div>
      </div>
    </Container>
  </div>
)

export default Contact;