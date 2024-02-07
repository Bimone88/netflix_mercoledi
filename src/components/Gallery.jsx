import React, { Component } from "react";
import { Container, Row, Col, Card, Button } from "react-bootstrap";
import { Link } from "react-router-dom";

class Gallery extends Component {
  state = {
    movies: [],
    isLoading: true,
    error: null,
  };

  componentDidMount() {
    this.fetchMovies();
  }

  fetchMovies = () => {
    const { queries } = this.props;
    Promise.all(
      queries.map((query) =>
        fetch(
          `https://www.omdbapi.com/?apikey=d95f447d&s=${encodeURIComponent(
            query
          )}`
        )
          .then((response) => {
            if (!response.ok) {
              throw new Error("Network response was not ok");
            }
            return response.json();
          })
          .then((data) => {
            if (data.Response === "True") {
              return data.Search;
            } else {
              throw new Error(data.Error);
            }
          })
      )
    )
      .then((results) => {
        const movies = results.flat().slice(0, 18); // Combina i risultati e prendi i primi 18
        this.setState({ movies, isLoading: false });
      })
      .catch((error) => this.setState({ error, isLoading: false }));
  };

  render() {
    const { isLoading, error, movies } = this.state;

    return (
      <Container fluid className="gallery-container bg-black">
        <div className="container-fluid mt-4">
          <div className="d-flex justify-content-between align-items-center mb-3">
            <h1 className="h2 me-3 text-white">TV Shows</h1>
            <div className="d-flex align-items-center">
              <Button variant="outline-light sourches" className="me-2">
                Sources
              </Button>
              <i className="bi bi-list me-2 iconcine"></i>
              <i className="bi bi-hand-thumbs-up iconcine"></i>
            </div>
          </div>
        </div>
        {isLoading ? (
          <div>Loading...</div>
        ) : error ? (
          <div>Error: {error.message}</div>
        ) : (
          <Row noGutters className="gallery-row">
            {movies.map((movie, index) => (
              <Col
                key={movie.imdbID}
                xs={4}
                sm={6}
                md={4}
                lg={3}
                xl={2}
                className={`movie-card-small ${
                  index % 6 === 0 ? "first-in-row" : ""
                }`}
              >
                <Link to={`/movie-details/${movie.imdbID}`}>
                  <Card className="movie-card">
                    <Card.Img
                      variant="top"
                      src={movie.Poster}
                      alt={movie.Title}
                    />
                  </Card>
                </Link>
              </Col>
            ))}
          </Row>
        )}
      </Container>
    );
  }
}

export default Gallery;
