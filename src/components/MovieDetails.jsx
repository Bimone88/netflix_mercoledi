import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

const MovieDetails = () => {
  const { movieId } = useParams();
  const [movieDetails, setMovieDetails] = useState(null);
  const [comments, setComments] = useState([]);

  useEffect(() => {
    fetch(`https://www.omdbapi.com/?apikey=f89aaea3&i=${movieId}`)
      .then((response) => response.json())
      .then((data) => setMovieDetails(data));

    fetch(`https://striveschool-api.herokuapp.com/api/comments/${movieId}`, {
      headers: {
        Authorization:
          "Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI2NWMzOGYzODZkZTM0YTAwMTk3YTEyOTMiLCJpYXQiOjE3MDczMTUwMDEsImV4cCI6MTcwODUyNDYwMX0.IKzgK9LtPrT_eSWx3rryKpRnaJshe3kwQj1KMJ36OsU",
      },
    })
      .then((response) => response.json())
      .then((data) => setComments(data));
  }, [movieId]);

  return (
    <div>
      <h1>{movieDetails?.Title}</h1>
      <p>{movieDetails?.Plot}</p>
      <div>
        <h2>Comments</h2>
        {comments.map((comment, index) => (
          <div key={index}>
            <p>
              <strong>{comment.author}</strong>: {comment.comment}
            </p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default MovieDetails;
