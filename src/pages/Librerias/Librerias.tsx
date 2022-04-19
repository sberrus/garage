import { Card, Col, Row } from "react-bootstrap";
import { Link } from "react-router-dom";
import ModelImg from "../../assets/img/3dModel.svg";
const Librerias = () => {
	return (
		<>
			<h1 className="display-1 text-center">Librerias de JS</h1>
			<p>Probando librerias que me resultan interesantes que sus respectivos miniproyectos.</p>
			<Row>
				<Col md={6}>
					<Card className="p-5 px-3 text-center">
						<Card.Img variant="top" src={ModelImg} style={{ height: "150px", margin: "auto" }} />
						<Card.Body>
							<Card.Title>Threejs</Card.Title>
							<Card.Text style={{ minHeight: "50px" }}>Insertando modelos 3d en aplicaciones web.</Card.Text>
							<Link className="btn btn-outline-primary" to="three">
								Ir a Threejs
							</Link>
						</Card.Body>
					</Card>
				</Col>
			</Row>
		</>
	);
};

export default Librerias;
