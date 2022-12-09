import React from "react";
import image from "../assets/placeholder.mp4";
import styles from "../styles/MoviePage.module.css";
import { Card } from "react-bootstrap";
import { Link } from "react-router-dom";

// Movie details: https://www.omdbapi.com/?apikey=41059430&i=tt1285016&type=movie
const MovieProps = (props) => {
  const { imdbID, Title, Year, Poster, Type } = props;


  if (Poster === "N/A") {
    return (
      <div>
        <Card className={styles.CardStyles}>
          <video
            variant="top"
            src={image}
            autoPlay
            loop
            muted
            playsInline
            className={styles.VideoStyle}
          >
          </video>
          <Card.Body>
            <hr />
            <Card.Title>{Title} </Card.Title>
            <hr />
            <p> Year: {Year}</p>
            <hr />
            <p> Type: {Type}</p>
            <hr />
            <Card.Text></Card.Text>
            <Link to={`/moviedetails/${imdbID}`} className={styles.viewMore}>
              View more
            </Link>
          </Card.Body>
        </Card>
      </div>
    );
  } else if (Poster !== "N/A") {
    return (
      <div>
        <Card className={styles.CardStyles}>
          <Card.Img
            variant="top"
            src={Poster}
            className={styles.cardImage}
          ></Card.Img>
          <Card.Body>
            <Card.Title>{Title} </Card.Title>
            <hr />
            <p> Year: {Year}</p>
            <hr />
            <p> Type: {Type}</p>
            <hr />
            <Card.Text>
              <Link to={`/moviedetails/${imdbID}`} className={styles.viewMore}>
                View more
              </Link>
            </Card.Text>
          </Card.Body>
        </Card>
      </div>
    );
  }

};
export default MovieProps;
