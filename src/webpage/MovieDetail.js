import React, { useEffect, useState } from 'react'
import axios from 'axios';
import { useParams } from 'react-router-dom';


const MovieDetail = () => {
    
    const imdbID = useParams();
    
    const axiosReq = axios.create();
    JSON.stringify(imdbID)
   
    const baseUrl = `https://www.omdbapi.com/?apikey=41059430&i=${imdbID.id}&type=movie`
    const [movies, setMovies] = useState([])


    useEffect(() => {

        const handleDetail = async () => {
            try {
                const { data } = await axiosReq.get(baseUrl);
            
                console.log(data);
               
                console.log(`https://www.omdbapi.com/?apikey=41059430&i=${imdbID.id}&type=movie`)
                setMovies(data)
            }
            catch (err) {
                console.log(err)
            }
        }
        handleDetail();
    }, [])


    return (
    
    <div>
         <p>{movies.Title}</p>
       {movies.Plot}
       

    </div>
    )
}

export default MovieDetail