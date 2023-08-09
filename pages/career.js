import Applayout from "@/components/Layout/Applayout";
import React from "react";
import PageHead from "./pageHead";
import CareerMainsection from "@/components/Career/CareerMainsection";

function career() {
  const pageTitle = "KSL Website / Career";
  return (
    <>
      <PageHead title={pageTitle} />
      <Applayout>
        <CareerMainsection />
      </Applayout>
    </>
  );
}

export default career;
