//Libraries
import { Link, Route, Routes } from "react-router-dom";
//Layouts
import IndexLayout from "../components/Layouts/IndexLayout";
//Pages
import Index from "../pages/Index/Index";
import Three from "../pages/Three/Three";
import Librerias from "../pages/Librerias/Librerias";

const RouterComponent = () => {
	return (
		<Routes>
			<Route path="/" element={<IndexLayout />}>
				<Route index element={<Index />} />
				<Route path="three" element={<Three />} />
				<Route path="librerias">
					<Route index element={<Librerias />} />
					<Route path="three" element={<Three />} />
				</Route>
				<Route path="teoria">
					<Route
						index
						element={
							<>
								<ul>
									<li>
										<Link to="clean">clean</Link>
									</li>
								</ul>
							</>
						}
					/>
					<Route
						path="clean"
						element={
							<>
								<h1>Arquitectura</h1>
							</>
						}
					/>
				</Route>
			</Route>
		</Routes>
	);
};

export default RouterComponent;
