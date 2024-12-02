import React from "react";
import { useNavigate } from "react-router-dom";
import { Container, Row, Col, Button } from "react-bootstrap";
import background from "../Assets/bg.jpeg";

const ProvaCheSeiMartina = () => {
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
            <h1>Dimostrami che sei davvero Martina...</h1>
            <p>Sei pronta?</p>
            <Button onClick={() => navigate("/Chisei")} variant="danger" size="lg">
              Inizia
            </Button>
          </Col>
        </Row>
      </Container>
    </div>
  );
};

export default ProvaCheSeiMartina;
