import React from "react";
import { Card, Row, Col } from "react-bootstrap";
import "../styles/Movie.css";

function Movie(props) {
  const { Title, Year, imdbID, Type, Poster } = props.movie;
  return (
    <div className="movie">
      <Row className="row">
        <Col className="column">
          <Card className="card">
            <div
              className="poster"
              onClick={() => {
                props.onMovieSelect(imdbID);
                window.scrollTo({ top: 0, behavior: "smooth" });
              }}
            >
              <Card.Img
                variant="top"
                className="img"
                src={Poster}
                alt={`The movie titled: ${Title}`}
              />
            </div>
            <Card.Body className="flex__card">
              <Card.Title className="text" style={{ fontSize: "18px" }}>
                {Title}
              </Card.Title>
              <Card.Text className="info">
                <span> Year : {Year}</span>
                <span> Type : {Type}</span>
              </Card.Text>
            </Card.Body>
          </Card>
        </Col>
      </Row>
    </div>
  );
}

export default Movie;
