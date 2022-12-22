import React from "react";

const About = () => {
  return (
    <div>
      <section id="about">
        <div className="container my-5 py-5">
          <div className="row">
            <div className="col-md-6">
              <img src="/assets/about2.gif" alt="About" className="w-75 mt-5" />
            </div>
            <div className="col-md-6">
              <h3 className="fs-5 mb-0">About Us</h3>
              <h1 className="display-6 mb-2">
                Who <b> We</b> Are
              </h1>
              <hr className="w-50" />
              <p className="lead mb-4">
                Lorem ipsum dolor sit amet, consectetur adipisicing elit. Itaque
                at odio blanditiis fugiat praesentium aut, similique adipisci
                distinctio magni, temporibus quisquam odit. Aut, id ullam.
                Eveniet animi tenetur non molestiae cumque eos totam ipsam harum
                incidunt perferendis consectetur saepe, blanditiis culpa qui
                laudantium eaque repudiandae eum! Magni, nisi quam? Distinctio?
              </p>
              <button className="btn btn-primary rounded-pill py-2">
                Get Started
              </button>
              <button className="btn btn-outline-primary rounded-pill py-2 ms-2">
                Contact Us
              </button>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default About;
