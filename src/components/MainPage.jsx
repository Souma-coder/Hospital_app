import React from "react";
import About from "./about/About";
import Footer from "./footer/Footer";
import Nav from "./nav/Nav";
import Testimonial from "./testimonial/Testimonial";

const MainPage = () => {
  return (
    <>
      <Nav />
      <About />
      <Testimonial />
      <Footer />
    </>
  );
};

export default MainPage;
