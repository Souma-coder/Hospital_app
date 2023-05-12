import React from "react";
import service1 from "../../images/service1.png";
import service2 from "../../images/service2.png";
import service3 from "../../images/service3.png";
import service4 from "../../images/service4.png";
import service5 from "../../images/service5.png";
import service6 from "../../images/service6.png";
import "./services.css";

const Services = () => {
  return (
    <section id="services" className="services_wrapper wrapper">
      <div className="container">
        <div className="row">
          <div className="col-sm-12 text-center mb-5">
            <h3>Our Services</h3>
          </div>
        </div>
        <div className="row">
          <div className="col-lg-4 col-md-6 mb-4">
            <div className="card">
              <div className="icon-box">
                <img src={service1} alt="service1" />
              </div>
              <div className="card-inner-box">
                <h4>Complete hospitality</h4>
                <p>
                  We provide a complete package of hospitality to our clients
                </p>
                <a href="" className="main-btn mt-4">
                  Read More
                </a>
              </div>
            </div>
          </div>
          <div className="col-lg-4 col-md-6 mb-4">
            <div className="card">
              <div className="icon-box">
                <img src={service2} alt="service2" />
              </div>
              <div className="card-inner-box">
                <h4>X-ray services</h4>
                <p>
                  You can have your X-rays checked by our new technical facility
                </p>
                <a href="" className="main-btn mt-4">
                  Read More
                </a>
              </div>
            </div>
          </div>
          <div className="col-lg-4 col-md-6 mb-4">
            <div className="card">
              <div className="icon-box">
                <img src={service3} alt="service3" />
              </div>
              <div className="card-inner-box">
                <h4>Blood services</h4>
                <p>Blood tests are done in a hygienic manner</p>
                <a href="" className="main-btn mt-4">
                  Read More
                </a>
              </div>
            </div>
          </div>
          <div className="col-lg-4 col-md-6 mb-4">
            <div className="card">
              <div className="icon-box">
                <img src={service4} alt="service4" />
              </div>
              <div className="card-inner-box">
                <h4>Laboratory services</h4>
                <p>We provide your report as soon as possible</p>
                <a href="" className="main-btn mt-4">
                  Read More
                </a>
              </div>
            </div>
          </div>
          <div className="col-lg-4 col-md-6 mb-4">
            <div className="card">
              <div className="icon-box">
                <img src={service5} alt="service5" />
              </div>
              <div className="card-inner-box">
                <h4>Emergengy rooms</h4>
                <p>Our patients don't have to worry about their emergencies</p>
                <a href="" className="main-btn mt-4">
                  Read More
                </a>
              </div>
            </div>
          </div>
          <div className="col-lg-4 col-md-6 mb-4">
            <div className="card">
              <div className="icon-box">
                <img src={service6} alt="service6" />
              </div>
              <div className="card-inner-box">
                <h4>Surgical services</h4>
                <p>
                  Our advance technology will give you a new surgical experience
                </p>
                <a href="" className="main-btn mt-4">
                  Read More
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Services;
