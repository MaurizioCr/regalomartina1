import React from "react";
import { Container, Row, Col, Button } from "react-bootstrap";
import { useNavigate } from "react-router-dom";
import background from "../Assets/bg.jpeg";

const Success = () => {
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
            <h1>🎉 Complimenti, hai completato il quiz! 🎉</h1>
            <Button onClick={() => navigate("/")} variant="success" size="lg">
              Torna alla Home
            </Button>
          </Col>
        </Row>
      </Container>
    </div>
  );
};

export default Success;
