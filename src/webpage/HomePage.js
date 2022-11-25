import React from 'react'
import styles from '../styles/HomePage.module.css'
import image from '../assets/movie-cut.mp4';
import imagemusic from '../assets/music.mp4'
import {
  NavLink
} from 'react-router-dom';
import { Container } from 'react-bootstrap';
import Carousel from 'react-bootstrap/Carousel';


const HomePage = () => {
  return (
    <Container>
      <h1> Movie and music searcher</h1>
      <hr/>
      <Carousel variant="dark">
        <Carousel.Item>
          <video variant="top" src={image} autoPlay loop muted playsInline> </video>
          <Carousel.Caption>
            <p>Take me to the movie search</p>
            <NavLink to="/movies" className={styles.MovieBtn} >Movies </NavLink>
          </Carousel.Caption>
        </Carousel.Item>

        <Carousel.Item>
          <video variant="top" src={imagemusic} autoPlay loop muted playsInline> </video>
          <Carousel.Caption>
           
            <p>Try our lyric finder </p>
            <NavLink to="/music" className={styles.MusicBtn} >Lyricfinder </NavLink>
          </Carousel.Caption>
        </Carousel.Item>
      </Carousel>
    </Container>

  )
}

export default HomePage