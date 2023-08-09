import IpoMainsection from "@/components/Homepage/IPO/IpoMainsection";
import Applayout from "@/components/Layout/Applayout";
import React from "react";
import PageHead from "./pageHead";

function ipo() {
  const pageTitle = "KSL Website / IPO";
  return (
    <>
      <PageHead title={pageTitle} />
      <Applayout>
        <IpoMainsection />
      </Applayout>
    </>
  );
}

export default ipo;
