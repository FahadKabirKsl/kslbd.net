import React, { useState } from "react";
import Image from "next/image";
import { FaUserAstronaut, FaCalendarDay } from "react-icons/fa";
import { BsSearch } from "react-icons/bs";
import singleNews from "../../public/assets/Homepage/news/signle-news.png";
import newsimg from "../../public/assets/Homepage/news/news-img.png";
import RecentPosts from "./RecentPosts";
import Subscribe from "../Homepage/Subscribe";

function SingleKslBlog({ blogData }) {
  const [searchQuery, setSearchQuery] = useState("");
  const filteredBlog = blogData.filter((blog) => {
    const { header, tag, text, date, writer } = blog;
    const lowercaseQuery = searchQuery.toLowerCase();
    return (
      header.toLowerCase().includes(lowercaseQuery) ||
      (tag && tag.toLowerCase().includes(lowercaseQuery)) ||
      (text && text.toLowerCase().includes(lowercaseQuery)) ||
      (date && date.toLowerCase().includes(lowercaseQuery)) ||
      (writer && writer.toLowerCase().includes(lowercaseQuery))
    );
  });

  return (
    <>
      <div className="bg-ksl_light_red">
        <div className="xsm:px-5 sm:px-5 md:px-10 mdl:px-10 xl:px-10 px-80">
          <div className="pt-40 pb-10">
            <h1 className="font-lato font-semi-bold pb-10">Home/Blog</h1>
            <div className="grid grid-cols-4 xsm:grid-cols-1 sm:grid-cols-1 gap-6">
              <div className="col-span-4 xsm:col-span-1 sm:col-span-1">
                <h2 className="text-text_36 xsm:text-2xl sm:text-2xl font-lato font-bold">
                  <div
                    dangerouslySetInnerHTML={{
                      __html: blogData.title,
                    }}
                  ></div>
                </h2>
              </div>
              <div className="col-span-4 xsm:col-span-1 sm:col-span-1">
                <div className="flex flex-row font-lato">
                  <div className="flex flex-row text-ksl_dark_red">
                    <FaUserAstronaut className="my-auto" />
                    <p className="font-semibold pl-1 pt-1">{blogData.author}</p>
                  </div>
                  <p className="mx-3 pt-1">|</p>
                  <div className="flex flex-row text-ksl_dark_gray">
                    <FaCalendarDay className="my-auto" />
                    <p className=" pl-1 pt-1">{blogData.created_at.format('Y-m-d')}</p>
                  </div>
                </div>
              </div>
              <div className="col-span-4 xsm:col-span-1 sm:col-span-1">
                <Image
                  src={
                    process.env.NEXT_PUBLIC_BACKEND_URL +
                    "/storage/" +
                    blogData.image
                  }
                  // src={blogData.image}
                  alt="single news"
                  className="rounded-xl w-auto h-auto"
                />
              </div>
              <div className="col-span-3 xsm:col-span-1 sm:col-span-1 text-justify">
                <div
                  dangerouslySetInnerHTML={{
                    __html: blogData.description,
                  }}
                ></div>
                {/* <p>{blogData.description}</p> */}
              </div>
              <div className="col-span-1 xsm:col-span-1 sm:col-span-1">
                <div
                  data-aos="zoom-in"
                  data-aos-offset="200"
                  data-aos-duration="1000"
                  data-aos-easing="ease-out"
                >
                  <p className="text-xl font-bold text-ksl_dark_gray ">
                    Search
                  </p>
                  <label className="relative block py-2">
                    <input
                      className="w-full bg-transparent border-b py-2 pl-3 pr-10 focus:outline-none"
                      type="text"
                      value={searchQuery}
                      onChange={(e) => setSearchQuery(e.target.value)}
                      placeholder="Search by date, text, tags, or writer..."
                    />

                    <span className="absolute top-0 right-0 mt-5 mr-3">
                      <BsSearch className="h-5 w-5 text-gray-400" />
                    </span>
                  </label>
                </div>

                <RecentPosts blogData={filteredBlog} />
              </div>
            </div>
          </div>
        </div>
        <div>
          <Subscribe />
        </div>
      </div>
    </>
  );
}

export default SingleKslBlog;
