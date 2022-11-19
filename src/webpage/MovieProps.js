import React from 'react'
import image from '../assets/placeholder.mp4'
import styles from '../styles/MoviePage.module.css';
import { Card, Col, Container, Row } from 'react-bootstrap'
import { Link } from 'react-router-dom';


// Movie details: https://www.omdbapi.com/?apikey=41059430&i=tt1285016&type=movie
const MovieProps = (props) => {

    const { imdbID, Title, Year, Poster } = props

    if (Poster === "N/A") {

        return <Container>
            <Row>
                <Col md={4} className="offset-md-5">
                    <Card className={styles.CardStyles}>
                        <video variant="top" src={image} autoPlay loop muted playsInline> </video>
                        <Card.Body>
                            <Card.Title>{Title} {Year}</Card.Title>
                            <Card.Text>
                                <a href={` https://www.imdb.com/title/${imdbID}`} target="_blanc">Read more on imdb</a>
                            </Card.Text>
                        </Card.Body>
                        <Link to={`/moviedetails/${imdbID}`}> View more</Link>
                    </Card>
                </Col>
            </Row>
        </Container>
    }

    else if (Poster !== "N/A") {
        return     <Col md={6} className="offset-md-5">
                    <Card className={styles.CardStyles}>
                        <Card.Img variant="top" src={Poster}  ></Card.Img>
                        <Card.Body>
                            <Card.Title>{Title} {Year}</Card.Title>
                            <Card.Text>
                                <a href={` https://www.imdb.com/title/${imdbID}`} target="_blanc">Read more on imdb</a>
                            </Card.Text>
                        </Card.Body>
                        <Link to={`/moviedetails/${imdbID}`}> View more</Link>
                    </Card>
                </Col>
       
    }
}

export default MovieProps