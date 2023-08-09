import React, { useEffect, useState } from "react";
import Link from "next/link";
import Image from "next/image";
import { BsSearch } from "react-icons/bs";
import Subscribe from "../Homepage/Subscribe";
import RecentPosts from "./RecentPosts";
function KslBlogs() {
  const [filteredBlog, setFilteredBlog] = useState([]);
  const [currentPage, setCurrentPage] = useState(1);
  const [blogPerPage] = useState(4);
  const [searchText, setSearchText] = useState("");
  const [activeTag, setActiveTag] = useState("All");
  const [tags, setTags] = useState([]);

  useEffect(() => {
    fetchData();
  }, []);

  const fetchData = async () => {
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
      if (response.ok) {
        const data = await response.json();
        setFilteredBlog(data);
      } else {
        console.error("Failed to fetch blog data");
      }
    } catch (error) {
      console.error("Error while fetching blog data:", error);
    }
  };

  const handleTagFilter = (tag) => {
    if (tag === "All") {
      setFilteredBlog(BlogList);
    } else {
      const filtered = BlogList.filter((blog) => blog.tag === tag);
      setFilteredBlog(filtered);
    }
    setCurrentPage(1);
    setActiveTag(tag);
  };

  const indexOfLastBlog = currentPage * blogPerPage;
  const indexOfFirstBlog = indexOfLastBlog - blogPerPage;
  const currentBlog = filteredBlog.slice(indexOfFirstBlog, indexOfLastBlog);
  const totalPages = Math.ceil(filteredBlog.length / blogPerPage);
  const renderTagButtons = () => {
    return tags.map((tag, index) => (
      <button
        key={index}
        className={`py-3 px-6 rounded-lg block font-mulish font-bold text-base mx-5 xsm:mx-2 sm:mx-2 ${
          activeTag === tag
            ? "text-white bg-ksl_dark_red"
            : "bg-ksl_light_red hover:text-white hover:bg-ksl_dark_red duration-700 "
        }`}
        onClick={() => handleTagFilter(tag)}
      >
        {tag}
      </button>
    ));
  };

  const renderNewsCards = () => {
    return currentBlog.map((blog, index) => (
      <div key={index}>
        <div className="xsm:w-full sm:w-full">
          <div className="flex flex-row xsm:flex-col sm:flex-col p-4 ">
            <div className="relative">
              <div>
                <Image
                  // src={blog.image}
                  src={
                    process.env.NEXT_PUBLIC_BACKEND_URL +
                    "/storage/" +
                    blog.image
                  }
                  alt={blog.image}
                  className="w-60 h-60 xsm:w-auto sm:w-auto rounded-lg"
                />
              </div>
              <div className="absolute bottom-0 right-0">
                <p className="bg-ksl_dark_red text-white px-3 py-2 rounded-br-lg">
                  {blog.created_at}
                </p>
              </div>
            </div>
            <div className="flex flex-col my-auto px-5 xsm:px-0 sm:px-0">
              <div className="text-text_15 font-lato font-semibold text-ksl_dark_black">
                <div
                  dangerouslySetInnerHTML={{
                    __html: blog.title,
                  }}
                ></div>
                {/* {blog.title} */}
                {/* {blog.title.split(" ").slice(0, 15).join(" ")} */}
              </div>
              <div className=" hidden">
                <div className="flex flex-col pl-3 my-auto xsm:w-4/5 sm:w-4/5">
                  <p className="text-sm font-mulish">{blog.author}</p>
                  <p className="text-sm font-mulish">{blog.tags}</p>
                </div>
              </div>
              <div className="text-sm text-ksl_dark_gray font-mulish font-light">
                <div
                  dangerouslySetInnerHTML={{
                    __html: blog.description,
                  }}
                ></div>
                {/* {blog.description} */}
                ...
                {/* {blog.description.split(" ").slice(0, 20).join(" ")}
                ... */}
              </div>
              <div>
                <button className="cursor-pointer text-ksl_dark_red  pt-2 font-mulish font-semibold">
                  <Link href={`/blog/${blog.title}`}>
                    <p className="text-sm ">Read More...</p>
                  </Link>
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    ));
  };

  const handlePageChange = (pageNumber) => {
    setCurrentPage(pageNumber);
  };

  const renderPaginationButtons = () => {
    const pageButtons = [];
    for (let i = 1; i <= totalPages; i++) {
      pageButtons.push(
        <button
          key={i}
          className={`px-3 py-1 rounded ${
            currentPage === i ? "bg-ksl_dark_red text-white" : "bg-white"
          }`}
          onClick={() => handlePageChange(i)}
        >
          {i}
        </button>
      );
    }
    return pageButtons;
  };
  const handleSearch = (event) => {
    const searchTerm = event.target.value.toLowerCase();

    const filtered = BlogList.filter((news) => {
      const { tag, text, date, writer } = news;
      return (
        (tag && tag.toLowerCase().includes(searchTerm)) ||
        (text && text.toLowerCase().includes(searchTerm)) ||
        (date && date.toLowerCase().includes(searchTerm)) ||
        (writer && writer.toLowerCase().includes(searchTerm))
      );
    });

    setFilteredBlog(filtered);
    setSearchText(searchTerm);
    setCurrentPage(1);
  };
  return (
    <>
      <div>
        <div className="absolute inset-x-0 top-56 mt-2 flex justify-center items-center px-80 xsm:px-5 sm:px-5 md:px-10 mdl:px-10 xl:px-10 ">
          <div className=" w-full">
            <div className="flex justify-center xsm:flex-row sm:flex-row overflow-x-scroll scrollbar-hide list-none xsm:w-full sm:w-full ">
              {renderTagButtons()}
            </div>
          </div>
        </div>
        <div className="bg-ksl_light_red">
          <div className="pt-20 xsm:pt-60">
            <div className="px-80 xsm:px-5 sm:px-5 md:px-10 mdl:px-10 xl:px-10 ">
              <div className="flex justify-between xsm:flex-col-reverse sm:flex-col-reverse">
                <div className="w-9/12 xsm:w-full sm:w-full">
                  <div className="grid grid-cols-1 gap-2 ">
                    {renderNewsCards()}
                  </div>
                  <div className="flex justify-center mt-5">
                    {renderPaginationButtons()}
                  </div>
                </div>
                <div className="mx-5"></div>

                {/* recentpost section */}

                <div className="flex flex-col w-3/12 xsm:w-full sm:w-full">
                  <div>
                    <p className="text-xl font-bold text-ksl_dark_gray ">
                      Search
                    </p>
                    <label className="relative block py-2">
                      <input
                        className="w-full bg-transparent border-b py-2 pl-3 pr-10 focus:outline-none"
                        placeholder="Type to search"
                        type="text"
                        value={searchText}
                        onChange={handleSearch}
                      />

                      <span className="absolute top-0 right-0 mt-5 mr-3">
                        <BsSearch className="h-5 w-5 text-gray-400" />
                      </span>
                    </label>
                  </div>

                  <div className="py-2 xsm:hidden sm:hidden">
                    <RecentPosts blogData={filteredBlog} />
                  </div>
                </div>
              </div>
            </div>
            <div className="py-10">
              <Subscribe />
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
export default KslBlogs;

{
  /* <div className="py-2 xsm:hidden sm:hidden">
                    <div className="bg-white rounded-lg p-6">
                      <p className="text-center text-xl font-medium  pb-5">
                        Popular Word Search
                      </p>
                      <div className="grid grid-flow-row-dense grid-cols-4 gap-2">
                        <div className="bg-ksl_light_red text-center rounded-lg p-2">
                          IPO
                        </div>
                        <div className=" col-span-2 bg-ksl_light_red text-center rounded-lg p-2">
                          Market
                        </div>
                        <div className=" bg-ksl_light_red text-center rounded-lg p-2">
                          Stock
                        </div>
                        <div className="col-span-2 bg-ksl_light_red text-center rounded-lg p-2">
                          Market
                        </div>
                        <div className=" bg-ksl_light_red text-center rounded-lg p-2">
                          IPO
                        </div>

                        <div className="bg-ksl_light_red text-center rounded-lg p-2">
                          Stock
                        </div>
                        <div className="bg-ksl_light_red text-center rounded-lg p-2">
                          IPO
                        </div>
                        <div className=" col-span-2 bg-ksl_light_red text-center rounded-lg p-2">
                          Market
                        </div>
                        <div className=" bg-ksl_light_red text-center rounded-lg p-2">
                          Stock
                        </div>
                        <div className="col-span-2 bg-ksl_light_red text-center rounded-lg p-2">
                          Market
                        </div>
                        <div className=" bg-ksl_light_red text-center rounded-lg p-2">
                          IPO
                        </div>

                        <div className="bg-ksl_light_red text-center rounded-lg p-2">
                          Stock
                        </div>
                      </div>
                    </div>
                  </div> */
}

{
  /* <div className="text-center w-auto my-auto xsm:min-w-max sm:min-w-max xsm:pl-80">
                <button
                  className={`py-3 px-6 rounded-lg block font-mulish font-bold text-base mx-5 xsm:mx-2 sm:mx-2 ${
                    activeTag === "All"
                      ? "text-white bg-ksl_dark_red"
                      : "bg-ksl_light_red hover:text-white hover:bg-ksl_dark_red duration-700 "
                  }`}
                  onClick={() => handleTagFilter("All")}
                >
                  All News
                </button>
              </div>
              <div className="text-center w-auto my-auto xsm:min-w-max sm:min-w-max">
                <button
                  className={`py-3 px-6 rounded-lg block font-mulish font-bold text-base mx-5 xsm:mx-2 sm:mx-2 ${
                    activeTag === "Business"
                      ? "text-white bg-ksl_dark_red "
                      : "bg-ksl_light_red hover:text-white hover:bg-ksl_dark_red duration-700 "
                  }`}
                  onClick={() => handleTagFilter("Business")}
                >
                  Business News
                </button>
              </div>
              <div className="text-center w-auto my-auto xsm:min-w-max sm:min-w-max ">
                <button
                  className={`py-3 px-6 rounded-lg block font-mulish font-bold text-base mx-5 xsm:mx-2 sm:mx-2 ${
                    activeTag === "Sports"
                      ? "text-white bg-ksl_dark_red"
                      : "bg-ksl_light_red hover:text-white hover:bg-ksl_dark_red duration-700 "
                  }`}
                  onClick={() => handleTagFilter("Sports")}
                >
                  Sports News
                </button>
              </div>
              <div className="text-center w-auto my-auto xsm:min-w-max sm:min-w-max ">
                <button
                  className={`py-3 px-6 rounded-lg block font-mulish font-bold text-base mx-5 xsm:mx-2 sm:mx-2 ${
                    activeTag === "Stock"
                      ? "text-white bg-ksl_dark_red"
                      : "bg-ksl_light_red hover:text-white hover:bg-ksl_dark_red duration-700 "
                  }`}
                  onClick={() => handleTagFilter("Stock")}
                >
                  Stocks News
                </button>
              </div> */
}
