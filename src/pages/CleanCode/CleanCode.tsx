import { Col, Container, Row } from "react-bootstrap";

const CleanCode = () => {
	return (
		<Container>
			<h1 className="display-1 text-center">Clean Code</h1>
			<Row>
				<Col sm={12} md={9} className="m-auto">
					<div id="introHeader">
						<p>
							Al mismo tiempo que desarrollamos software de mejor calidad, observamos que ciertos patrones y
							arquitecturas son útiles para resolver problemas recurrentes.
						</p>
						<p>
							Una de esas soluciones es la de la arquitectura <b>Clean</b> siendo esta una de las más populares
							en la actualidad.
						</p>
					</div>
					{/* highlight section */}
					<div className="border-start border-4 border-primary ps-3">
						<p>
							Todos los conceptos que se van a ver estan decritos en más detalle en este post{" "}
							<a
								href="https://dev.to/aidy1991/introduction-to-clean-architecture-for-frontend-engineer-part1-42mi"
								rel="noreferrer"
								target="_blank"
							>
								<span className="badge rounded-pill bg-primary">
									<i className="bi bi-link"></i> dev.to: Introduction to Clean Architecture for TypeScript:
									PART1
								</span>
							</a>
						</p>
					</div>
				</Col>
			</Row>
		</Container>
	);
};

export default CleanCode;
