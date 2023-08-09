import React from "react";
import Navbar from "../Navbar/Navbar";
import Footer from "../Footer/Footer";

const Applayout = ({ header, children }) => {
  return (
    <>
      <Navbar />
      <main>{children}</main>
      <Footer />
    </>
  );
};

export default Applayout;
