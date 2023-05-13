import React from "react";
import About from "./about/About";
import Footer from "./footer/Footer";
import Gallery from "./gallery/Gallery";
import Home from "./home/Home";
import Nav from "./nav/Nav";
import Services from "./services/Services";
import Team from "./team/Team";
import Testimonial from "./testimonial/Testimonial";

const MainPage = () => {
  return (
    <>
      <Nav />
      <Home />
      <About />
      <Services />
      <Team />
      <Gallery />
      <Testimonial />
      <Footer />
    </>
  );
};

export default MainPage;
