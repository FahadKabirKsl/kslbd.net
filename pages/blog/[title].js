import React from "react";
import Applayout from "@/components/Layout/Applayout";
import { useRouter } from "next/router";
import SingleKslBlog from "@/components/Blog/SingleKslBlog";

function BLOGPage({ blogData }) {
  const router = useRouter();
  const { title } = router.query;
  const selectedBlogData = blogData.find((blog) => blog.title === title);

  if (!selectedBlogData) {
    return <p>Blog not found.</p>;
  }
  return (
    <>
      <Applayout>
        <SingleKslBlog blogData={selectedBlogData} />
      </Applayout>
    </>
  );
}
export async function getServerSideProps(context) {
  try {
    const response = await fetch(
      `${process.env.NEXT_PUBLIC_BACKEND_URL}/api/blog`,
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
    const blogData = await response.json();
    return {
      props: {
        blogData,
      },
    };
  } catch (error) {
    console.error("Error fetching IPO data:", error);
    return {
      props: {
        blogData: [],
      },
    };
  }
}
export default BLOGPage;

// function BLOGPage() {
//   const router = useRouter();
//   const { title } = router.query;
//   if (!title) {
//     return <p>News not found.</p>;
//   }

//   return (
//     <>
//       <Applayout>
//         <SingleKslBlog BlogList={blogdata} />
//       </Applayout>
//     </>
//   );
// }
