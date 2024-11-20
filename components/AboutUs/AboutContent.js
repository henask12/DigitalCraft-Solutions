import React from "react";

const AboutContent = () => {
  return (
    <>
      <section className="about-section pt-100">
        <div className="container">
          <div className="row align-items-center">
            <div className="col-lg-6 col-md-12">
              <div className="about-image">
                <img src="/images/about-image.png" alt="image" />
              </div>
            </div>

            <div className="col-lg-6 col-md-12">
              <div className="about-area-content">
                <span>About Us</span>
                <h3>We are Dynamic Team of Digital Solutions Agency</h3>
                <strong>
                  Welcome to Ras Tech Solutions, where expertise meets
                  innovation to transform the digital world.{" "}
                </strong>
                <p>
                  Our team, with over six years of experience, has worked with
                  leading organizations like Ethiopian Airlines to deliver
                  cutting-edge solutions. Comprising skilled professionals in
                  digital marketing, UI/UX design, software development,
                  cybersecurity, and payment integration, we are dedicated to
                  crafting impactful and seamless digital experiences. At Ras
                  Tech Solutions, we are committed to elevating your brand and
                  driving success in todays ever-evolving digital landscape.
                </p>
              </div>

              {/* <div className="row">
                <div className="col-lg-6 col-6 col--6">
                  <div className="single-fun-facts">
                    <h3>
                      1,165
                      <span className="sign-icon">+</span>
                    </h3>
                    <p>Project Completed</p>
                  </div>
                </div>

                <div className="col-lg-6 col-6 col-6">
                  <div className="single-fun-facts">
                    <h3>
                      2,665
                      <span className="sign-icon">+</span>
                    </h3>
                    <p>Satisfied Clients</p>
                  </div>
                </div>
              </div> */}
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default AboutContent;
