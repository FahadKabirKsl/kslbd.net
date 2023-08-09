import ContactusMainsection from "@/components/ContactUs/ContactusMainsection";
import Applayout from "@/components/Layout/Applayout";
import React from "react";
import PageHead from "./pageHead";

function contactUs() {
  const pageTitle = "KSL Website / Contact Us";
  return (
    <>
      <PageHead title={pageTitle} />
      <Applayout>
        <ContactusMainsection />
      </Applayout>
    </>
  );
}

export default contactUs;
