import React, { useEffect, useState } from 'react'
import axios from 'axios';


const MovieDetail = () => {
    const axiosReq = axios.create();
    const baseUrl = "https://www.omdbapi.com/?apikey=41059430&i=tt1285016&type=movie"
    const [movies, setMovies] = useState([])


    useEffect(() => {

        const handleDetail = async () => {
            try {
                const { data } = await axiosReq.get(baseUrl);
                console.log(data);
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