import React, { useEffect, useState } from 'react'
import axios from 'axios';



const Music = () => {


  const [music, SetMusic] = useState([]);
  useEffect(() => {

    const options = {
      method: 'GET',
      url: 'https://shazam.p.rapidapi.com/search',
      params: {term: 'billie jean', locale: 'en-US', offset: '0', limit: '5'},
      headers: {
        'X-RapidAPI-Key': '77677621eamshcb48954032d980dp1e8fc7jsn8735e2ae11b4',
        'X-RapidAPI-Host': 'shazam.p.rapidapi.com'
      }
    };

    axios.request(options).then(function (response) {
      console.log(response.data.tracks.hits);
      SetMusic(response.data.tracks.hits)
      console.log(music)

    }).catch(function (error) {

      console.error(error);
    });




  }, [])

  return (

    <div>

    {music.map((musics)=>{

      return <div key={musics.key}> 
      
      
      <p> song name: {musics.snippet}</p>

      <p> Artis: {musics.track.subtitle}</p>
      <img src={musics.track.images.background} alt="artist avatar"></img>
      
      </div>

    })}

  </div>
  )
}

export default Music