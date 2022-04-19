import { Button, Card, Col, Container, Row } from "react-bootstrap";
import { Link, useNavigate } from "react-router-dom";

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
		<>
			<h1 className="display-1">Samdev`s Garage</h1>
			<a href="https://github.com/sberrus/garage" rel="noreferrer" target="_blank">
				<span className="badge bg-dark px-3 py-2">
					github <i className="bi bi-github"></i>
				</span>
			</a>
			<p>
				Este sitio se dedica exclusivamente a la demostración, prueba y recopilación de clases de distintos rubros
				en un solo lugar. En principio es un lugar solo para realizar pequeñas integraciones y adaptaciones antes de
				realizarlas en un proyecto en producción.
			</p>
			<Row>
				<Col xs={6}>
					<Card>
						<Card.Img variant="top" src="holder.js/100px180" />
						<Card.Body>
							<Card.Title>Threejs</Card.Title>
							<Card.Text>Impleentando modelos 3d en aplicaciones web</Card.Text>
							<Link className="btn btn-success" to="librerias/three">
								Ir a Threejs
							</Link>
						</Card.Body>
					</Card>
				</Col>
				<Col xs={6}>
					<Card>
						<Card.Img variant="top" src="holder.js/100px180" />
						<Card.Body>
							<Card.Title>Card Title</Card.Title>
							<Card.Text>
								Some quick example text to build on the card title and make up the bulk of the card's content.
							</Card.Text>
							<Button variant="primary">Go somewhere</Button>
						</Card.Body>
					</Card>
				</Col>
			</Row>
		</>
	);
};

export default Index;
