import React from "react";
import { useNavigate } from "react-router-dom";
import { Container, Row, Col, Button } from "react-bootstrap";
import background from "../Assets/bg.jpeg";

const Intro = () => {
  const navigate = useNavigate();

  return (
    <div
      className="d-flex justify-content-center align-items-center text-center"
      style={{
        backgroundImage: `url(${background})`,
        backgroundSize: "cover",
        backgroundPosition: "center",
        height: "100vh",
      }}
    >
      <Container>
        <Row>
          <Col>
            <h1>Buon Natale, Martina! 🎄</h1>
            <p>Ho preparato un regalo speciale per te ma... sarai tu a sceglierlo!</p>
            <Button onClick={() => navigate("/scelta-meta")} variant="danger" size="lg">
              Inizia
            </Button>
          </Col>
        </Row>
      </Container>
    </div>
  );
};

export default Intro;
