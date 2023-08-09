import BlogMainsection from "@/components/Blog/BlogMainsection";
import Applayout from "@/components/Layout/Applayout";
import React from "react";
import PageHead from "./pageHead";

function blog() {
  const pageTitle = "KSL Website / Blogs";
  return (
    <>
      <PageHead title={pageTitle} />
      <Applayout>
        <BlogMainsection />
      </Applayout>
    </>
  );
}

export default blog;
