import { Route, Routes } from "react-router-dom";
import Index from "../components/Index/Index";
import IndexLayout from "../components/Layouts/IndexLayout";
import Three from "../components/Three/Three";

const RouterComponent = () => {
  return (
    <Routes>
      <Route path="/" element={<IndexLayout />}>
        <Route index element={<Index />} />
        <Route path="three" element={<Three />} />
      </Route>
    </Routes>
  );
};

export default RouterComponent;
