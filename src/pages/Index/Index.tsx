import { Card, Col, Row } from "react-bootstrap";
import { Link } from "react-router-dom";

//assets
import LibraryImg from "../../assets/img/library.svg";
import TheoryImg from "../../assets/img/theory.svg";

const Index = () => {
	return (
		<>
			<h1 className="display-1 text-center">Samdev`s Garage</h1>
			<a href="https://github.com/sberrus/garage" rel="noreferrer" target="_blank">
				<span className="badge bg-dark px-3 py-2">
					github <i className="bi bi-github"></i>
				</span>
			</a>
			<p className="text-center my-5">
				Este sitio se dedica exclusivamente a la demostración, prueba y recopilación de clases de distintos rubros
				en un solo lugar. En principio es un lugar solo para realizar pequeñas integraciones y adaptaciones antes de
				realizarlas en un proyecto en producción.
			</p>
			<Row>
				<Col md={6} className="mb-3">
					<Card className="p-5 px-3 text-center">
						<Card.Img variant="top" src={LibraryImg} style={{ height: "150px", margin: "auto" }} />
						<Card.Body>
							<Card.Title>Librerias</Card.Title>
							<Card.Text style={{ minHeight: "50px" }}>
								Librerias js para interactuar de distintas formas con la web.
							</Card.Text>
							<Link className="btn btn-outline-primary" to="librerias">
								Ir a Librerias
							</Link>
						</Card.Body>
					</Card>
				</Col>
				<Col md={6} className="mb-3">
					<Card className="p-5 px-3 text-center">
						<Card.Img variant="top" src={TheoryImg} style={{ height: "150px", margin: "auto" }} />
						<Card.Body>
							<Card.Title>Teoría</Card.Title>
							<Card.Text style={{ minHeight: "50px" }}>
								Joyas de sabiduria en el desarrollo de software.
							</Card.Text>
							<Link to="teoria" className="btn btn-outline-primary">
								Ir a Teoria
							</Link>
						</Card.Body>
					</Card>
				</Col>
			</Row>
		</>
	);
};

export default Index;
