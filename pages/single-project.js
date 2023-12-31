import React from "react";
import NavbarTwo from "../components/Layouts/NavbarTwo";
import PageBanner from "../components/Common/PageBanner";
import SingleProjectContent from "../components/SingleProject/SingleProjectContent";
import Footer from "../components/Layouts/Footer";

const SingleProject = () => {
  return (
    <>
      <NavbarTwo />

      <PageBanner
        pageTitle="Project Details"
        breadcrumbTextOne="Home"
        breadcrumbTextTwo="Project Details"
        breadcrumbUrl="/"
      />

      <SingleProjectContent />

      <Footer />
    </>
  );
};

export default SingleProject;
