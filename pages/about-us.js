import React from "react";
import Navbar from "../components/Layouts/Navbar";
import PageBanner from "../components/Common/PageBanner";
import AboutContent from "../components/AboutUs/AboutContent";
import FeaturesArea from "../components/HomeOne/FeaturesContent";
import ServicesContent from "../components/Common/ServicesContent";
import PricingContent from "../components/PricingPlans/PricingContent";
import ProjectsStyleTwo from "../components/Projects/ProjectsStyleTwo";
import TeamCard from "../components/Common/TeamCard";
import SubscribeStyleTwo from "../components/Common/SubscribeStyleTwo";
import PartnerLogos from "../components/Common/PartnerLogos";
import Footer from "../components/Layouts/Footer";

const AboutUs = () => {
  return (
    <>
      <Navbar />

      <PageBanner
        pageTitle="About Us"
        breadcrumbTextOne="Home"
        breadcrumbTextTwo="About Us"
        breadcrumbUrl="/"
      />

      <AboutContent />

      <FeaturesArea />

      <ServicesContent />

      {/* <PricingContent /> */}

      <ProjectsStyleTwo />

      <TeamCard />

      <SubscribeStyleTwo />

      {/* <div className="ptb-100">
        <PartnerLogos />
      </div> */}

      <Footer />
    </>
  );
};

export default AboutUs;
