import ServiceMAinsection from "@/components/Homepage/Service/ServiceMainsection";
import Applayout from "@/components/Layout/Applayout";
import React from "react";
import PageHead from "./pageHead";

function service() {
  const pageTitle = "KSL Website / Service";

  return (
    <>
      <PageHead title={pageTitle} />
      <Applayout>
        <ServiceMAinsection />
      </Applayout>
    </>
  );
}

export default service;
