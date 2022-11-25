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
      <h2> Welcome on this page you can either search and find info about a movie or try our lyric finder that finds a song based on a couple of sentences</h2>
      <Carousel variant="dark">
        <Carousel.Item>
          <video variant="top" src={image} autoPlay loop muted playsInline> </video>
          <Carousel.Caption>
          
            <NavLink to="/movies" className={styles.MovieBtn} >Movies </NavLink>
          </Carousel.Caption>
        </Carousel.Item>

        <Carousel.Item>
          <video variant="top" src={imagemusic} autoPlay loop muted playsInline> </video>
          <Carousel.Caption>

            <NavLink to="/music" className={styles.MusicBtn} >Lyricfinder </NavLink>
          </Carousel.Caption>
        </Carousel.Item>
      </Carousel>
      
    </Container>
   

  )
}

export default HomePage