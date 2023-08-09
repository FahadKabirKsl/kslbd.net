import BoMainsection from "@/components/Homepage/Bo/BoMainsection";
import Applayout from "@/components/Layout/Applayout";
import React from "react";
import PageHead from "./pageHead";

function BoAccount() {
  const pageTitle = "KSL Website / Bo Account";
  return (
    <>
      <PageHead title={pageTitle} />
      <Applayout>
        <BoMainsection />
      </Applayout>
    </>
  );
}

export default BoAccount;
