import { Container } from "react-bootstrap";
import { Outlet } from "react-router-dom";
import NavbarComponent from "../Navbar/NavbarComponent";

const IndexLayout = () => {
	return (
		<>
			<NavbarComponent />
			<Container>
				<Outlet />
			</Container>
		</>
	);
};

export default IndexLayout;
