import React from "react";
import Navbar from "../components/Layouts/Navbar";
import MainBanner from "../components/HomeOne/MainBanner";
import FeaturesContent from "../components/HomeOne/FeaturesContent";
import AboutContent from "../components/HomeOne/AboutContent";
import ServicesContent from "../components/Common/ServicesContent";
import WhyChooseUs from "../components/Common/WhyChooseUs";
import TabsContent from "../components/HomeOne/TabsContent";
import ProjectsStyleOne from "../components/Projects/ProjectsStyleOne";
import TeamCard from "../components/Common/TeamCard";
import TestimonialSection from "../components/HomeOne/TestimonialSection";
import AnalysisFormContent from "../components/HomeOne/AnalysisFormContent";
import BlogCardSection from "../components/Common/BlogCardSection";
import PartnerLogos from "../components/HomeOne/PartnerLogos";
import SubscribeStyleOne from "../components/Common/SubscribeStyleOne";
import Footer from "../components/Layouts/Footer";

const Index = () => {
  return (
    <>
      <Navbar />

      <MainBanner />
      <div className="pb-100">
        <AboutContent />
      </div>
       <FeaturesContent />

      {/* <ServicesContent /> */}

      {/* <TabsContent />

      <WhyChooseUs /> */}

      <ProjectsStyleOne />

      <TeamCard />

      {/* <TestimonialSection /> */}

      <AnalysisFormContent />

      {/* <BlogCardSection /> */}

      {/* <div className="pb-100 mt-4">
        <PartnerLogos />
      </div> */}

      <SubscribeStyleOne />

      <Footer />  
    </>
  );
};

export default Index;
