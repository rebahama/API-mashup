import React from 'react'

const MovieProps = (props) => {
    const {imdbID,Title, Year}=props
  return (
    <div>
        
        <p>{Title} {Year} <a href={` https://www.imdb.com/title/${imdbID}`} target="_blanc">Read more</a> </p>
        
      
        
    

    </div>
  )
}

export default MovieProps