import React from "react";
import { Outlet } from "react-router-dom";
import Footer from "../components/Footer/Footer";
import Header from "../components/Header/Header";

const RootLayout = () => {
  return (
    <>
      <Header></Header>
      <div className="container">
        <Outlet />
      </div>
      <Footer></Footer>
    </>
  );
};

export default RootLayout;
