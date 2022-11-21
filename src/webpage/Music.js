import React, { useEffect, useState } from 'react'
import axios from 'axios';



const Music = () => {


  const [music, SetMusic] = useState([]);
  useEffect(() => {

    const options = {
      method: 'GET',
      url: 'https://shazam.p.rapidapi.com/songs/list-artist-top-tracks',
      params: { id: '40008598', locale: 'en-US' },
      headers: {
        'X-RapidAPI-Key': '77677621eamshcb48954032d980dp1e8fc7jsn8735e2ae11b4',
        'X-RapidAPI-Host': 'shazam.p.rapidapi.com'
      }
    };

    axios.request(options).then(function (response) {
      console.log(response.data.tracks);
      SetMusic(response.data.tracks)
      console.log(music)

    }).catch(function (error) {

      console.error(error);
    });




  }, [])

  return (

    <div>

    {music.length}

  </div>
  )
}

export default Music