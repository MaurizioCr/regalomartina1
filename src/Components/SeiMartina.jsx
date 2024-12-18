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
            <h1>🎉 Adesso è il momento di scoprire il tuo regalo..Sei pronta? 🎉</h1>
            <a href="https://www.ryanair.com/it/it/trip/manage/e25d6cdd-46f9-428e-9b3c-2562e2fe0369">
            <Button variant="success" size="lg">
              Scopri il regalo
            </Button>
            </a>
          </Col>
        </Row>
      </Container>
    </div>
  );
};

export default Success;
