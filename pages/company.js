import CompanyMainsection from "@/components/Company/CompanyMainsection";
import Applayout from "@/components/Layout/Applayout";
import React from "react";
import Head from "next/head";
import PageHead from "./pageHead";

function company() {
  const pageTitle = "KSL Website / Company";
  return (
    <>
      <PageHead title={pageTitle} />

      <Applayout>
        <CompanyMainsection />
      </Applayout>
    </>
  );
}

export default company;
