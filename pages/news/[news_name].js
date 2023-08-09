import React from "react";
import Applayout from "@/components/Layout/Applayout";
import { useRouter } from "next/router";
import newsdata from "@/data4";
import SingleNewsPage from "@/components/Homepage/News/SingleNewsPage";
function NEWSPage() {
  const router = useRouter();
  const { news_name } = router.query;
  if (!news_name) {
    return <p>News not found.</p>;
  }

  return (
    <>
      <Applayout>
        <SingleNewsPage newsList={newsdata} />
      </Applayout>
    </>
  );
}
export default NEWSPage;
