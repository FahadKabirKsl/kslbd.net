// import MarketMainsection from "@/components/Homepage/Market/MarketMainsection";
import Applayout from "@/components/Layout/Applayout";
import React from "react";
import PageHead from "./pageHead";
import MarketMainsection from "@/components/Homepage/Market/MarketMainsection";

function market() {
  const pageTitle = "KSL Website / Market";
  return (
    <>
      <PageHead title={pageTitle} />
      <Applayout>
        <MarketMainsection />
      </Applayout>
    </>
  );
}

export default market;
