import Applayout from "@/components/Layout/Applayout";
import PartnerMainsection from "@/components/PartnerWithUS/PartnerMainsection";
import React from "react";
import PageHead from "./pageHead";

function PartnerWithus() {
  const pageTitle = "KSL Website / Partner With Us";
  return (
    <>
      <PageHead title={pageTitle} />
      <Applayout>
        <PartnerMainsection />
      </Applayout>
    </>
  );
}

export default PartnerWithus;
