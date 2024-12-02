import React from "react";
import { useNavigate } from "react-router-dom";
import { Container, Row, Col, Button } from "react-bootstrap";
import grinch from "../Assets/grinch.jpeg";

const NonSeiMartina = () => {
  const navigate = useNavigate();

  return (
    <div
      className="d-flex justify-content-center align-items-center text-center"
      style={{
        backgroundImage: `url(${grinch})`,
        backgroundSize: "cover",
        backgroundPosition: "center",
        height: "100vh",
      }}
    >
      <Container>
        <Row>
          <Col>
            <h1>FERMA QUI! NON TI LASCERO' ROVINARE IL NATALE!! 🎄</h1>
            <Button onClick={() => navigate("/")} variant="danger" size="lg">
              Torna alla Home
            </Button>
          </Col>
        </Row>
      </Container>
    </div>
  );
};

export default NonSeiMartina;
