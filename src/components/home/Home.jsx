import React from "react";
import "./home.css";

const Home = () => {
  return (
    <section id="home" className="home">
      <div className="banner_wrapper wrapper">
        <div className="container">
          <div className="row align-items-center">
            <div className="col-md-6 order-md-1 order-2">
              <h3>Better life thoughts</h3>
              <h1>Better Hospitality</h1>
              <p>
                Join us to a fun and friendly environment. Our professionals are
                working so far to see smile on your face that you deserve! We
                are dedicated to our duties.
              </p>
              <a href="" className="main-btn mt-4 fill-btn">
                Appointment
              </a>
              <a href="" className="main-btn mt-4 ms-3">
                Learn more
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Home;
