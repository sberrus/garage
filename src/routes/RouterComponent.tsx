//Libraries
import { Route, Routes } from "react-router-dom";
//Layouts
import IndexLayout from "../components/Layouts/IndexLayout";
//Pages
import Index from "../pages/Index/Index";
import Three from "../pages/Three/Three";
import Librerias from "../pages/Librerias/Librerias";
import Teoria from "../pages/Teoria/Teoria";
import CleanCode from "../pages/CleanCode/CleanCode";

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
					<Route index element={<Teoria />} />
					<Route path="clean-code" element={<CleanCode />} />
				</Route>
			</Route>
		</Routes>
	);
};

export default RouterComponent;
