import { Button, Card, Col, Container, Row } from "react-bootstrap";
import { useNavigate } from "react-router-dom";

const Index = () => {
  const navigate = useNavigate();

  const handleRedirectButton = (route: string) => {
    console.log(route.trim().length <= 0);
    if (!(route.trim().length <= 0)) {
      navigate(route);
    } else {
      console.error("La ruta especificada no es válida");
    }
  };

  return (
    <Container>
      <h1>Pruebas express de librerias para React</h1>
      <Row>
        <Col xs={6}>
          <Card>
            <Card.Img variant="top" src="holder.js/100px180" />
            <Card.Body>
              <Card.Title>Three.js</Card.Title>
              <Card.Text>
                Implementaciones para insertar dentro de THREE.js
              </Card.Text>
              <Button
                variant="primary"
                onClick={() => {
                  handleRedirectButton("three");
                }}
              >
                Go somewhere
              </Button>
            </Card.Body>
          </Card>
        </Col>
      </Row>
    </Container>
  );
};

export default Index;
