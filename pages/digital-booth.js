import DigitalboothMainsection from "@/components/DigitalBooth/DigitalboothMainsection";
import Applayout from "@/components/Layout/Applayout";
import React from "react";
import PageHead from "./pageHead";

function digitalBooth() {
  const pageTitle = "KSL Website / Digital Booth";
  return (
    <>
      <PageHead title={pageTitle} />
      <Applayout>
        <DigitalboothMainsection />
      </Applayout>
    </>
  );
}

export default digitalBooth;
