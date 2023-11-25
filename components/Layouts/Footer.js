import React, { Component } from "react";
import Link from "next/link";

const Footer = () => {
  const currentYear = new Date().getFullYear();
  return (
    <>
      <footer className="footer-section pt-100 pb-70">
        <div className="container">
          <div className="row">
            <div className="col-lg-4 col-md-6 col-sm-6">
              <div className="footer-area">
                <div className="footer-heading">
                  <h3>About Us</h3>
                </div>

                <p>
                We are more than a team; we are a collective force of diverse talents, united by a passion for crafting impactful digital experiences. 
                In close collaboration with Ethiopian Airlines, our team includes digital marketing virtuosos, UI/UX visionaries, code maestros, cybersecurity guardians, 
                and payment integration wizards, leading the way in comprehensive digital solutions. 
                Together, we embark on a journey to elevate your brand's presence and redefine the digital skies.
                </p>

                <ul className="footer-social">
                  <li>
                    <a
                      href="https://www.linkedin.com/"
                      target="_blank"
                      className="bg-3955bc"
                    >
                      <i className="fab fa-linkedin-in"></i>
                    </a>
                  </li>
                  <li>
                    <a
                      href="https://www.facebook.com/"
                      target="_blank"
                      className="bg-1da1f2"
                    >
                      <i className="fab fa-facebook-f"></i>
                    </a>
                  </li>
                  <li>
                    <a
                      href="https://twitter.com/"
                      target="_blank"
                      className="bg-004dff"
                    >
                      <i className="fab fa-twitter"></i>
                    </a>
                  </li>
                  <li>
                    <a
                      href="https://www.instagram.com/"
                      target="_blank"
                      className="bg-0273af"
                    >
                      <i className="fab fa-instagram"></i>
                    </a>
                  </li>
                </ul>
              </div>
            </div>

            <div className="col-lg-2 col-md-6 col-sm-6">
              <div className="footer-item-area">
                <div className="footer-heading">
                  <h3>Important Links</h3>
                </div>

                <ul className="footer-quick-links">
                  <li>
                    <Link href="/about-us">
                      About Us
                    </Link>
                  </li>
                  <li>
                    <Link href="/projects">
                      Project
                    </Link>
                  </li>
                  <li>
                    <Link href="/services">
                      Services
                    </Link>
                  </li>
                  <li>
                    <Link href="/team">
                      Team
                    </Link>
                  </li>
                  <li>
                    <Link href="/contact">
                      Contact
                    </Link>
                  </li>
                </ul>
              </div>
            </div>

            <div className="col-lg-2 col-md-6 col-sm-6">
              <div className="footer-item-area">
                <div className="footer-heading">
                  <h3>Featured Service</h3>
                </div>

                <ul className="footer-quick-links">
                  <li>
                    <Link href="/single-service">
                      SEO Marketing
                    </Link>
                  </li>
                  <li>
                    <Link href="/single-service">
                      SEO Services
                    </Link>
                  </li>
                  <li>
                    <Link href="/single-service">
                      Services
                    </Link>
                  </li>
                  <li>
                    <Link href="/single-service">
                      Pay-Per-Click
                    </Link>
                  </li>
                  <li>
                    <Link href="/single-service">
                      Social Media
                    </Link>
                  </li>
                </ul>
              </div>
            </div>

            <div className="col-lg-4 col-md-6 col-sm-6">
              <div className="mb-30">
                <div className="footer-heading">
                  <h3>Contact</h3>
                </div>

                <div className="footer-info-contact">
                  <i className="flaticon-call-answer"></i>
                  <h3>Phone</h3>
                  <span>(251) 917-253752</span>
                </div>

                <div className="footer-info-contact">
                  <i className="flaticon-envelope"></i>
                  <h3>Email</h3>
                  <span>hello@neemo.com</span>
                </div>

                <div className="footer-info-contact">
                  <i className="flaticon-placeholder-filled-point"></i>
                  <h3>Address</h3>
                  <span>Bole, Addis Ababa, Ethiopia</span>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Shape Images */}
        <div className="default-animation">
          <div className="shape-img1">
            <img src="/images/shape/12.svg" alt="image" />
          </div>
          <div className="shape-img2">
            <img src="/images/shape/13.svg" alt="image" />
          </div>
          <div className="shape-img3">
            <img src="/images/shape/14.png" alt="image" />
          </div>
          <div className="shape-img4">
            <img src="/images/shape/15.png" alt="image" />
          </div>
          <div className="shape-img5">
            <img src="/images/shape/2.png" alt="image" />
          </div>
        </div>
      </footer>

      {/* Copyright footer */}
      <div className="copyright-area">
        <div className="container">
          <div className="row align-items-center">
            <div className="col-lg-6">
              <p>
                © {currentYear} Guramayle Digital Solutions. All Rights Reserved by{" "}
                <a href="#" target="_blank">
                Guramayle Digital Solutions
                </a>
              </p>
            </div>

            {/* <div className="col-lg-6">
              <ul>
                <li>
                  <Link href="/terms-conditions">
                    Terms & Conditions
                  </Link>
                </li>
                <li>
                  <Link href="/privacy-policy">
                    Privacy Policy
                  </Link>
                </li>
              </ul>
            </div> */}
          </div>
        </div>
      </div>
    </>
  );
};

export default Footer;
