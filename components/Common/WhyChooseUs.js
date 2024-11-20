import React from "react";
import Link from "next/link";

const WhyChooseUs = () => {
  return (
    <>
      <section className="choose-section">
        <div className="container">
          <div className="row align-items-center">
            <div className="col-lg-6 col-md-12">
              <div className="choose-content-area">
                <span>Why Choose Us</span>
                <h3>Our Outstanding Experience</h3>
                <p>
                Work with a team that brings years of experience and a history of success. We have a strong track record of delivering great results and bring our expertise to every project. Let’s build a partnership that exceeds expectations and sets new standards in the digital world.
                </p>

                <div className="choose-text">
                  <i className="flaticon-check-mark"></i>
                  <h4>Aviation-Rooted Expertise</h4>
                  <p>
                  With deep roots in the aviation industry, we understand the unique needs of your sector. Our experience working with Ethiopian Airlines shows our ability to deliver results and handle industry challenges effectively.
                  </p>
                </div>

                <div className="choose-text">
                  <i className="flaticon-check-mark"></i>
                  <h4>Comprehensive Digital Prowess</h4>
                  <p>
                  Our team offers a wide range of services to meet your needs. From creative campaigns to user-friendly designs, we provide all-in-one solutions. Backed by our experience with Ethiopian Airlines, we ensure tailored strategies to help your business stand out.
                  </p>
                </div>

                <div className="choose-text">
                  <i className="flaticon-check-mark"></i>
                  <h4>Client-Centric Partnership</h4>
                  <p>
                  We work closely with you to understand your goals and create the best strategies for your success. Our team combines aviation insights with a variety of digital skills to deliver creative campaigns and effective designs.
                  </p>
                </div>

                <div className="choose-text">
                  <i className="flaticon-check-mark"></i>
                  <h4>Dedicated Team Member</h4>
                  <p>
                  Our team is committed to providing top-quality solutions with care and expertise. Your success is our focus, and we’re here to help your business grow with passion and dedication.
                  </p>
                </div>

                <div className="choose-btn">
                  <Link href="/about-us" className="default-btn-one">
                    Discover More
                  </Link>
                </div>
              </div>
            </div>

            <div className="col-lg-6 col-md-12">
              <div className="choose-image">
                <img src="/images/choose-image.png" alt="image" />
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default WhyChooseUs;
