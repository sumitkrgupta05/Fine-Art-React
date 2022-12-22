import React from "react";

const footer = () => {
  return (
    <>
      <footer>
        <div className="container">
          <div className="row ">
            <div className="col-md-12">
              <div className="row ">
                <div className="col-md-6 d-md-block d-none ">
                  <div className="row z mt-1">
                    <div className="col-sm-3 ">
                      <img src="/assets/logo.gif" alt="logo" className="w-50" />
                    </div>
                    <div className="col-sm-9">
                      <h5 className="display-6">Fine Art</h5>
                    </div>
                    <div className="col-md-12 m-4 d-flex">
                      <h3 className="lead">The Heart Of Tech</h3>
                    </div>
                    <a className="col-sm-2 ">links1</a>
                    <a className="col-sm-2">links2</a>
                    <a className="col-sm-2">links3</a>
                    <a className="col-sm-2">links4</a>
                    <a className="col-sm-2">links5</a>
                    <a className="col-sm-2">links6</a>
                  </div>
                </div>
                <div className="col-md-3 d-md-block d-none">
                  <h3 className="d-flex  text-align-center justify-content-center">
                    More FA
                  </h3>
                  <hr className=" " />
                  <div className="z row d-flex text-align-center justify-content-center text-white">
                    <a className="col-md-8 col-sm-2 ">Program</a>
                    <a className="col-md-8 col-sm-2">Event</a>
                    <a className="col-md-8 col-sm-2">Media</a>
                    <a className="col-md-8 col-sm-2">Spaces</a>
                    <a className="col-md-8 col-sm-2">Newsletters</a>
                    <a className="col-md-8 col-sm-2">Deals</a>
                  </div>
                </div>
                <div className="col-md-3 d-md-block d-none">
                  <h3 className="">About FA</h3>
                  <hr />
                  <div className="z row d-flex text-align-center justify-content-center">
                    <a className="col-md-8 col-sm-2">Partner with us</a>
                    <a className="col-md-8 col-sm-2">Jobs</a>
                    <a className="col-md-8 col-sm-2">Terms and Conditions</a>
                    <a className="col-md-8 col-sm-2">Cookies</a>
                    <a className="col-md-8 col-sm-2">Statement</a>
                    <a className="col-md-8 col-sm-2">Policy</a>
                  </div>
                </div>
                <hr className="mt-3" />
              </div>
            </div>
            <div className="row foot">
              <div className="lead">
                Fine Art is a <b>TECH </b>Company
              </div>
              <div>
                Copywrite &copy; 2021-2025 The next web by <b>Sumit😁</b>
              </div>
            </div>
          </div>
        </div>
      </footer>
    </>
  );
};

export default footer;
