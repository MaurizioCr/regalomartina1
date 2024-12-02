import React from "react";
import { useNavigate, useLocation } from "react-router-dom";
import { Container, Row, Col, Button } from "react-bootstrap";

const DynamicQuestion = ({ questions }) => {
  const navigate = useNavigate();
  const location = useLocation();

  // Trova la domanda corrente
  const currentQuestion = questions.find((q) => q.path === location.pathname);

  if (!currentQuestion) {
    return null; // Gestito altrove
  }

  return (
    <div
      className="d-flex justify-content-center align-items-center text-center"
      style={{
        backgroundImage: `url(${currentQuestion.background})`,
        backgroundSize: "cover",
        backgroundPosition: "center",
        height: "100vh",
      }}
    >
      <Container>
        <Row>
          <Col>
            <h1>{currentQuestion.question}</h1>
            {currentQuestion.options.map((option, index) => (
              <Button
                key={index}
                className="m-2"
                onClick={() => navigate(option.path)}
                variant="warning" // Usa un unico colore per tutti i pulsanti
                size="lg"
              >
                {option.label}
              </Button>
            ))}
          </Col>
        </Row>
      </Container>
    </div>
  );
};

export default DynamicQuestion;
