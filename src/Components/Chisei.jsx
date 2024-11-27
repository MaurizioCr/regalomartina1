import { Button, Col, Container, Row } from "react-bootstrap";
import { Navigate } from "react-router-dom";
import { useNavigate } from "react-router-dom";
import background from "../Assets/bg.jpeg";


const Chisei = () => {
    const navigate = useNavigate();
    return (
        <>
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
            <h1>Per prima cosa... sei tu Martina? 🎄</h1>
            
            <Button className="me-3" onClick={() => navigate("/Chisei")} variant="danger" size="lg">
              Si
            </Button>
            <Button onClick={() => navigate("/NonSeiMartina")} variant="danger" size="lg">
              No
            </Button>
            
          </Col>
        </Row>
      </Container>
        </div>
        </>
    
    
    );
}
  
export default Chisei;