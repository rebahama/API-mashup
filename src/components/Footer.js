import React from 'react'
import styles from '../styles/FooterPage.module.css'

const Footer = () => {
  return (
    <div className={styles.Footer}>

                  <ul>
                        <li className="list-inline-item"><a href="https://sv-se.facebook.com/" target="_blank"rel=" noopener noreferrer"> Facebook<i
                              className="fa-brands fa-facebook"> </i></a></li>
                        <li className="list-inline-item"><a href="https://www.instagram.com/" target="_blank" rel=" noopener noreferrer"> Instagram<i
                              className="fa-brands fa-instagram"> </i></a></li>
                        <li className="list-inline-item"><a href="https://twitter.com/?lang=sv" target="_blank" rel="noopener noreferrer"> Twitter<i
                              className="fa-brands fa-twitter"> </i></a></li>
                  </ul>
                  
            </div>

  )
}

export default Footer