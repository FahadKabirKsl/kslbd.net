import Applayout from "@/components/Layout/Applayout";
import MediaMainsecton from "@/components/Media/MediaMainsecton";
import React from "react";
import PageHead from "./pageHead";

function media() {
  const pageTitle = "KSL Website / Media";
  return (
    <>
      <PageHead title={pageTitle} />
      <Applayout>
        <MediaMainsecton />
      </Applayout>
    </>
  );
}

export default media;
