import React, { useEffect, useState } from 'react'
import axios from 'axios'



const Movies = () => {

  const axiosReq = axios.create();
  const [query, setQuery] = useState("revenant");
  const baseUrl = `https://www.omdbapi.com/?apikey=41059430&s=${query}&type=movie`
  const [movies, setMovies] = useState([]);
  

  useEffect(() => {
    const handleData = async () => {
      try {
        const {data} = await axiosReq.get(baseUrl)
        console.log(data.Search)
        setMovies(data.Search)
        

      }
      
      catch (err) {
        console.log(err)
      }
    };
    
    
    handleData()
    

  }, [query])

  return (

    <div>

     {movies.map((movie)=>{

return <li key={movie.imdbID}> <p>{movie.Title} </p>

</li>
      
    })}

    </div>
  )
}

export default Movies