import React from "react";
import Applayout from "@/components/Layout/Applayout";
import SingleCompanyPage from "@/components/Homepage/IPO/SingleCompanyPage";
import { useRouter } from "next/router";

function IPOPage({ ipoData }) {
  const router = useRouter();
  const { company_name } = router.query;
  const selectedIpoData = ipoData.find(ipo => ipo.company_name === company_name);

  if (!selectedIpoData) {
    return <p>Company not found.</p>;
  }
  return (
    <>
      <Applayout>
        <SingleCompanyPage ipoData={selectedIpoData} />
      </Applayout>
    </>
  );
}
export async function getServerSideProps(context) {
  try {
    const response = await fetch(
      `${process.env.NEXT_PUBLIC_BACKEND_URL}/api/ipo`,
      {
        headers: {
          "Content-Type": "application/json",
          Accept: "application/json",
        },
      }
    );
    if (!response.ok) {
      throw new Error("API request failed");
    }
    const ipoData = await response.json();
    return {
      props: {
        ipoData,
      },
    };
  } catch (error) {
    console.error("Error fetching IPO data:", error);
    return {
      props: {
        ipoData: [],
      },
    };
  }
}

export default IPOPage;

