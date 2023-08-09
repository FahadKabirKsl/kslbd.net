import React, { useEffect, useState } from "react";

import Image from "next/image";
import { FaCalendarAlt } from "react-icons/fa";

function KslBlog() {
  const [blogPosts, setBlogPosts] = useState([]);
  async function fetchBlogPosts() {
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
      const data = await response.json();
      console.log(data);
      setBlogPosts(data);
    } catch (error) {
      console.error("Error fetching blog posts:", error);
    }
  }

  useEffect(() => {
    fetchBlogPosts();
  }, []);

  return (
    <>
      <div className="bg-ksl_light_red backdrop-blur-lg">
        <div className="px-80">
          
          <div className="py-10">
            <div className="flex justify-between">
              <div className="grid grid-cols-2 gap-4">
                {blogPosts.map((blogs,index) => (
                  <div key={index}>
                    <div className="max-w-lg bg-white rounded-t-3xl rounded-b-lg shadow">
                      <div className="relative">
                        <div>
                          <Image
                            src={`/${blogs.image}`}
                            alt={blogs.image}
                            width={100}
                            height={100}
                            className="w-auto rounded-3xl h-auto"
                          />
                        </div>

                        <div className="absolute top-0 inset-5 w-4/12">
                          {/* <p className="border text-center rounded-3xl bg-ksl_dark_red text-white px-5 py-2 mt-5">
                            {blogs.tag}
                          </p> */}
                        </div>
                      </div>
                      <div className="flex flex-col p-6">
                        <p className="text-2xl font-lato font-bold text-ksl_dark_black">
                          {blogs.title}
                        </p>
                        <div className="flex justify-between py-5">
                          <div className="flex flex-row">
                            <FaCalendarAlt className="text-xl text-ksl_dark_red" />
                            {/* <p className="font-mulish text-ksl_light_gray pl-2">
                              {blogs.publication_date}
                            </p> */}
                          </div>
                        </div>
                        <p className="font-mulish text-ksl_dark_gray">
                          {blogs.description}
                        </p>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default KslBlog;

{
  /*  */
}

{
  /* <div className="flex flex-row">
  <AiOutlineShareAlt className="text-xl text-ksl_dark_red" />
  <p className="font-mulish text-ksl_light_gray pl-2  ">Share Now</p>
</div>; */
}

{
  /* <Link href="/" className="pt-5 text-ksl_dark_red font-mulish text-xl">
  See full story
</Link>; */
}
