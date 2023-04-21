import React from "react";
import About from "./about/About";
import Footer from "./footer/Footer";
import Home from "./home/Home";
import Nav from "./nav/Nav";
import Testimonial from "./testimonial/Testimonial";

const MainPage = () => {
  return (
    <>
      <Nav />
      <Home />
      <About />
      <Testimonial />
      <Footer />
    </>
  );
};

export default MainPage;
