import React from "react";
import { NavLink } from "react-router-dom";

const Home = () => {
  return (
    <div>
      <section id="home">
        <div className="container">
          <div className="row">
            <div className="col-md-12">
              <div className="row justify-content-center">
                <div className="col-md-8 mt-5">
                  <h1 className="display-4 fw-bolder mb-4 text-center text-white">
                    Feels the Fresh Business Prespective
                  </h1>
                  <p className="lead text-center fs-4 mb-5 text-white">
                    Lorem ipsum dolor sit, amet consectetur adipisicing elit.
                    Exercitationem rem illo vitae, mollitia quos aspernatur
                    distinctio hic natus soluta in sequi modi, sit quasi dolore.
                  </p>
                  <div className="buttons d-flex justify-content-center">
                    <NavLink
                      to="/contact"
                      className="btn btn-light me-4 rounded-pill px-4 py-2"
                    >
                      Get Quotes
                    </NavLink>
                    <NavLink
                      to="/services"
                      className="btn btn-outline-light rounded-pill px-4 py-2"
                    >
                      Our Services
                    </NavLink>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Home;
