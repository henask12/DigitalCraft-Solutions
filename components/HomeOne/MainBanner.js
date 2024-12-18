import React, { useState } from "react";
import FsLightbox from "fslightbox-react";
import Link from "next/link";

const MainBanner = () => {
  const [toggler, setToggler] = useState(false);

  return (
    <>
      <FsLightbox
        toggler={toggler}
        sources={["https://www.youtube.com/watch?v=_ysd-zHamjk"]}
      />

      <div className="main-banner">
        <div className="d-table">
          <div className="d-table-cell">
            <div className="container">
              <div className="row align-items-center">
                <div className="col-lg-6 col-md-12">
                  <div className="main-banner-content">
                    <h1>Digital Solutions For Your Business</h1>
                    <p>
                      Ras Tech Solutions is a leading provider of innovative and
                      reliable technology solutions designed to help businesses
                      thrive in the digital age.
                    </p>

                    <div className="banner-btn">
                      <Link href="/about-us" className="default-btn-one">
                        More About Us
                      </Link>

                      <div
                        onClick={() => setToggler(!toggler)}
                        className="video-btn popup-youtube"
                      >
                        Watch Video <i className="flaticon-play-button"></i>
                      </div>
                    </div>
                  </div>
                </div>

                <div className="col-lg-6 col-md-12">
                  <div className="banner-image">
                    <img
                      src="/images/saas-image/arrow.png"
                      className="animate__animated animate__fadeInLeft animate__delay-0.5s"
                      alt="arrow"
                    />
                    <img
                      src="/images/saas-image/box1.png"
                      className="animate__animated animate__fadeInUp animate__delay-0.5s"
                      alt="box1"
                    />
                    <img
                      src="/images/saas-image/boy1.png"
                      className="animate__animated animate__fadeInLeft animate__delay-0.5s"
                      alt="boy1"
                    />
                    <img
                      src="/images/saas-image/boy2.png"
                      className="animate__animated animate__zoomIn animate__delay-0.5s"
                      alt="boy2"
                    />
                    <img
                      src="/images/saas-image/boy3.png"
                      className="animate__animated animate__bounceIn animate__delay-0.5s"
                      alt="boy3"
                    />
                    <img
                      src="/images/saas-image/digital-screen.png"
                      className="animate__animated animate__fadeInDown animate__delay-0.5s"
                      alt="digital-screen"
                    />
                    <img
                      src="/images/saas-image/filter1.png"
                      className="animate__animated animate__zoomIn animate__delay-0.5s"
                      alt="filter1"
                    />
                    <img
                      src="/images/saas-image/filter2.png"
                      className="animate__animated animate__fadeInUp animate__delay-0.5s"
                      alt="filter2"
                    />
                    <img
                      src="/images/saas-image/filter3.png"
                      className="animate__animated animate__rotateIn animate__delay-0.5s"
                      alt="filter3"
                    />
                    <img
                      src="/images/saas-image/girl1.png"
                      className="animate__animated animate__fadeInUp animate__delay-0.5s"
                      alt="girl1"
                    />
                    <img
                      src="/images/saas-image/girl2.png"
                      className="animate__animated animate__zoomIn animate__delay-0.5s"
                      alt="girl2"
                    />
                    <img
                      src="/images/saas-image/monitor.png"
                      className="animate__animated animate__fadeInRight animate__delay-0.5s"
                      alt="monitor"
                    />
                    <img
                      src="/images/saas-image/4.png"
                      className="animate__animated animate__zoomIn animate__delay-0.5s"
                      alt="4"
                    />
                    <img
                      src="/images/saas-image/7.png"
                      className="animate__animated animate__zoomIn animate__delay-0.5s"
                      alt="7"
                    />

                    {/* Main Image */}
                    <img
                      src="/images/saas-image/main-image.png"
                      className="animate__animated animate__zoomIn animate__delay-0.5s"
                      alt="main-image.png"
                    />
                  </div>
                </div>
              </div>

              <div className="banner-bg-text">SEO</div>
            </div>
          </div>
        </div>

        {/* Shape Images */}
        {/* <div className="shape-img1">
          <img src="/images/shape/1.png" alt="image" />
        </div>
        <div className="shape-img2">
          <img src="/images/shape/2.png" alt="image" />
        </div>
        <div className="shape-img3">
          <img src="/images/shape/3.png" alt="image" />
        </div>
        <div className="shape-img4">
          <img src="/images/shape/4.png" alt="image" />
        </div>
        <div className="shape-img5">
          <img src="/images/shape/5.png" alt="image" />
        </div>
        <div className="shape-img6">
          <img src="/images/shape/6.png" alt="image" />
        </div>
        <div className="shape-img7">
          <img src="/images/shape/2.png" alt="image" />
        </div>
        <div className="shape-img8">
          <img src="/images/shape/10.png" alt="image" />
        </div>
        <div className="shape-img9">
          <img src="/images/shape/7.png" alt="image" />
        </div>
        <div className="shape-img10">
          <img src="/images/shape/5.png" alt="image" />
        </div>
        <div className="shape-img11">
          <img src="/images/shape/11.png" alt="image" />
        </div> */}
      </div>
    </>
  );
};

export default MainBanner;
