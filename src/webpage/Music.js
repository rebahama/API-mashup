import React, { useEffect, useState } from 'react'
import styles from '../styles/MusicPage.module.css';
import axios from 'axios';
import { Container, Form, Button } from 'react-bootstrap';




const Music = () => {


  const [music, SetMusic] = useState([]);
  const [lyric, setLyrics] = useState("");


  const options = {
    method: 'GET',
    url: 'https://shazam.p.rapidapi.com/search',
    params: { term: lyric, locale: 'en-US', offset: '0', limit: '5' },
    headers: {
      'X-RapidAPI-Key': '77677621eamshcb48954032d980dp1e8fc7jsn8735e2ae11b4',
      'X-RapidAPI-Host': 'shazam.p.rapidapi.com'
    }
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    axios.request(options).then(function (response) {
      console.log(response.data.tracks.hits);
      SetMusic(response.data.tracks.hits)
     
      console.log(music)

    }).catch(function (error) {

      console.error(error);
    });

  }
 


  return (

    <div>

      <Container>
        <h2> Welcome to the lyric finder, type in atleast 5 sentences of a song and a list of possible songs will be displayed starting with the top being the most likely song that you are looking for</h2>
      <Form onSubmit={handleSubmit}>
        <Form.Control as="textarea"
          value={lyric}
          onChange={(e) => setLyrics(e.target.value)}
        />
        <p> {lyric.length}/100</p>
        <Button type="submit"> Search</Button>
      </Form>
      </Container>
      {music.map((musics) => {
        
        return <div key={musics.track.key} className={styles.ArtistContainer}>
          
          <img src={musics.track.images.background}  alt="artist avatar" className={styles.ArtistAvatar}></img>
          
          <p> Song: {musics.track.title}</p>
          <p> Artist: {musics.track.subtitle}</p>
          <a href={musics.track.url} target='_blank' rel='noopener noreferrer'> Click here to hear song </a>
          <hr/>
        </div>})}

    </div>
  )
}

export default Music