import React from 'react'
import image from '../assets/placeholder.mp4'
import styles from '../styles/MoviePage.module.css';
import { Card} from 'react-bootstrap'
import { Link } from 'react-router-dom';


// Movie details: https://www.omdbapi.com/?apikey=41059430&i=tt1285016&type=movie
const MovieProps = (props) => {

    const { imdbID, Title, Year, Poster } = props

    if (Poster === "N/A") {

        return   <div>
                    <Card className={styles.CardStyles}>
                        <video variant="top" src={image} autoPlay loop muted playsInline className={styles.VideoStyle}> </video>
                        <Card.Body>
                            <Card.Title>{Title} {Year}</Card.Title>
                            <Card.Text>
                                <a href={` https://www.imdb.com/title/${imdbID}`} target="_blanc">Read more on imdb</a>
                            </Card.Text>
                        </Card.Body>
                        <Link to={`/moviedetails/${imdbID}`}> View more</Link>
                    </Card>
                </div>
       
    }

    else if (Poster !== "N/A") {
        return     <div>
                    <Card className={styles.CardStyles}>
                        <Card.Img variant="top" src={Poster}  ></Card.Img>
                        <Card.Body>
                            <Card.Title>{Title} {Year}</Card.Title>
                            <Card.Text>
                               
                            </Card.Text>
                        </Card.Body>
                        <Link to={`/moviedetails/${imdbID}`}> View more</Link>
                    </Card>
                </div>
       
    }
}

export default MovieProps