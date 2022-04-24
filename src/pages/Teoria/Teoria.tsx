import { Card, Col, Row } from "react-bootstrap";
import { Link } from "react-router-dom";
import ModelImg from "../../assets/img/3dModel.svg";
const Teoria = () => {
	return (
		<>
			<h1 className="display-1 text-center">Teoria</h1>
			<p>Patrones de diseño, arquitecturas, etc...</p>
			<Row>
				<Col md={6}>
					<Card className="p-5 px-3 text-center">
						<Card.Img variant="top" src={ModelImg} style={{ height: "150px", margin: "auto" }} />
						<Card.Body>
							<Card.Title>Arquitectura Clean</Card.Title>
							<Card.Text style={{ minHeight: "50px" }}>
								Conceptos básicos de clean code para el desarrollo de software de calidad
							</Card.Text>
							<Link className="btn btn-outline-primary" to="clean-code">
								Ir a Clean Code
							</Link>
						</Card.Body>
					</Card>
				</Col>
			</Row>
		</>
	);
};

export default Teoria;
