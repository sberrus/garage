import React from "react";
import { Outlet } from "react-router-dom";
import NavbarComponent from "../Navbar/NavbarComponent";

const IndexLayout = () => {
  return (
    <>
      <NavbarComponent />
      <Outlet />
    </>
  );
};

export default IndexLayout;
