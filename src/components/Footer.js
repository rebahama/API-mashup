import React from 'react'
import styles from '../styles/FooterPage.module.css'

const Footer = () => {
  return (
    <div className={styles.Footer}>

                  <ul className={styles.FooterLinks}>
                        <li className="list-inline-item"><a href="https://sv-se.facebook.com/" target="_blank"rel=" noopener noreferrer"> Facebook </a></li>
                        <li className="list-inline-item"><a href="https://www.instagram.com/" target="_blank" rel=" noopener noreferrer"> Instagram</a></li>
                        <li className="list-inline-item"><a href="https://twitter.com/?lang=sv" target="_blank" rel="noopener noreferrer"> Twitter</a></li>
                  </ul>
                  
            </div>

  )
}

export default Footer