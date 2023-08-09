import StocksMainsection from "@/components/Homepage/Stocks/StocksMainsection";
import Applayout from "@/components/Layout/Applayout";
import React from "react";
import PageHead from "./pageHead";

function stocks() {
  const pageTitle = "KSL Website / Stocks";
  return (
    <>
      <PageHead title={pageTitle} />
      <Applayout>
        <StocksMainsection />
      </Applayout>
    </>
  );
}

export default stocks;
