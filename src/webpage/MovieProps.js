import React from 'react'
import styles from '../styles/MoviePage.module.css';
import { Card, Col, Container, Row } from 'react-bootstrap'


// Movie details: https://www.omdbapi.com/?apikey=41059430&i=tt1285016&type=movie
const MovieProps = (props) => {
    const { imdbID, Title, Year, Poster } = props
    return (
        <div>
            <Container>
                <Row>
                    <Col md={4} className="offset-md-5">
                        <Card className={styles.CardStyles}>
                            <Card.Img variant="top" src={Poster} />
                            <Card.Body>
                                <Card.Title>{Title}</Card.Title>
                                <Card.Text>
                                    {Year}

                                    <a href={` https://www.imdb.com/title/${imdbID}`} target="_blanc">Read more</a>
                                </Card.Text>

                            </Card.Body>
                        </Card>
                    </Col>
                </Row>
            </Container>


        </div>
    )
}

export default MovieProps