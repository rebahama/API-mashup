import React, { useEffect, useState } from 'react'
import image from '../assets/placeholder.mp4'
import axios from 'axios';
import styles from '../styles/MovieDetailPage.module.css';
import { useParams } from 'react-router-dom';
import { Container } from 'react-bootstrap';


const MovieDetail = () => {

    const imdbID = useParams();

    const axiosReq = axios.create();
    JSON.stringify(imdbID);

    const baseUrl = `https://www.omdbapi.com/?apikey=41059430&i=${imdbID.id}&type=movie`;
    const [movies, setMovies] = useState([]);


    useEffect(() => {

        const handleDetail = async () => {
            try {
                const { data } = await axiosReq.get(baseUrl);

                console.log(data);

                console.log(`https://www.omdbapi.com/?apikey=41059430&i=${imdbID.id}&type=movie`)
                setMovies(data);
            }
            catch (err) {
                console.log(err)
            }
        }
        handleDetail();
    }, [])

    if(movies.Poster === "N/A"){

    return (

        <div>
            <Container className={styles.DetailContainer}>
 
            <h2>{movies.Title}</h2>
            <hr/>
                <div className={styles.RatingContainer }>

                <video variant="top" src={image} autoPlay loop muted playsInline className={styles.VideoStyle}> </video>
                    <p className={styles.DescribeText}> {movies.Plot}</p>

                </div>
            <div className={styles.DetailInfoContainer}>
                    <p>Year: {movies.Year}</p>
                    <p> Length: {movies.Runtime}</p>
                    <p> Genre: {movies.Genre}</p>
                    <p> Rating: {movies.imdbRating}</p>
                    <p> Director: {movies.Director}</p>
                    <a href={` https://www.imdb.com/title/${movies.imdbID}`} target="_blanc">Read more on imdb</a>
                    </div>
            </Container>

        </div>
    )
    }
    else if(movies.Poster !== "N/A"){

        return (

            <div>
                <Container className={styles.DetailContainer}>
     
                <h2>{movies.Title}</h2>
                <hr/>
                    <div className={styles.RatingContainer }>
    
                    <img src={movies.Poster} alt="poster" />
                        <p className={styles.DescribeText}> {movies.Plot}</p>
    
                    </div>
                <div className={styles.DetailInfoContainer}>
                        <p>Year: {movies.Year}</p>
                        <p> Length: {movies.Runtime}</p>
                        <p> Genre: {movies.Genre}</p>
                        <p> Rating: {movies.imdbRating}</p>
                        <p> Director: {movies.Director}</p>
                        <a href={` https://www.imdb.com/title/${movies.imdbID}`} target="_blanc">Read more on imdb</a>
                        </div>
                </Container>
    
            </div>
        )




    }
}

export default MovieDetail