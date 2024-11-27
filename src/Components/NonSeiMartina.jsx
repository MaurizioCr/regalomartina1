import React from "react";
import { Col, Container, Row } from "react-bootstrap";
import grinch from "../Assets/grinch.jpeg";

const Intro = () => {


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
          <Col className="text-danger">
            <h1>FERMA QUI! NON TI LASCERO' ROVINARE IL NATALE DI MARTINA!! 🎄</h1>
            
          </Col>
        </Row>
      </Container>
    </div>
  );
};

export default Intro;