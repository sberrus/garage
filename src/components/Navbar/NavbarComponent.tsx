import React from "react";
import { Container, Nav, Navbar } from "react-bootstrap";
import { Link } from "react-router-dom";

const NavbarComponent = () => {
	return (
		<Navbar bg="dark" variant="dark" expand="lg">
			<Container>
				<Navbar.Brand as="span">
					<Link to="/" className="navbar-brand border-end pe-5">
						Samdev`s Garage
					</Link>
				</Navbar.Brand>
				<Navbar.Toggle aria-controls="basic-navbar-nav" />
				<Navbar.Collapse id="basic-navbar-nav">
					<Nav className="me-auto">
						<Nav.Link as="span">
							<Link to="/librerias" className="nav-link">
								Librerias
							</Link>
						</Nav.Link>
						<Nav.Link as="span">
							<Link to="/teoria" className="nav-link">
								Teoría
							</Link>
						</Nav.Link>
					</Nav>
				</Navbar.Collapse>
			</Container>
		</Navbar>
	);
};

export default NavbarComponent;
