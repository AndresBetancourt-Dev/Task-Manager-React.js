import React from "react";
import Navbar from "./Navbar";
import Footer from "./Footer";
import "./css/Layout.css";

const Layout = (props) => {
  return (
    <React.Fragment>
      <Navbar />
      <main className="Main">{props.children}</main>
      <Footer />
    </React.Fragment>
  );
};

export default Layout;
