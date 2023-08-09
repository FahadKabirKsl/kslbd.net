import SingleStocksPage from "@/components/Homepage/Stocks/SingleStocksPage";
import Applayout from "@/components/Layout/Applayout";
import React from "react";
import Image from "next/image";
// import dummydata2 from "@/data";
import { dummydata2 } from "@/data2";

function stockPage({ stockData }) {
  if (!stockData) {
    return <p>Company not found.</p>;
  }
  return (
    <>
      <Applayout>
        <SingleStocksPage stockData={stockData} />
      </Applayout>
    </>
  );
}
export async function getServerSideProps(context) {
  const { company } = context.query;
  const stockData = dummydata2.find((stocks) => stocks.company === company);

  return {
    props: {
      stockData,
    },
  };
}

export default stockPage;
