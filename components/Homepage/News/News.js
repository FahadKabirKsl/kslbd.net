import React, { useEffect, useState } from "react";
import Link from "next/link";
import Image from "next/image";
import { BsSearch} from "react-icons/bs";
import Subscribe from "../Subscribe";
import newsdata from "@/data4";
import RecentPosts from "./RecentPosts";

function News() {
  const [filteredNews, setFilteredNews] = useState([]);
  const [currentPage, setCurrentPage] = useState(1);
  const [newsPerPage] = useState(4);
  const [searchText, setSearchText] = useState("");
  const [activeTag, setActiveTag] = useState("All");
  const NewsList = newsdata;
  console.log(NewsList);

  useEffect(() => {
    // Set filteredNews to all news initially
    setFilteredNews(NewsList);
  }, []);

  const handleTagFilter = (tag) => {
    if (tag === "All") {
      setFilteredNews(NewsList);
    } else {
      const filtered = NewsList.filter((news) => news.tag === tag);
      setFilteredNews(filtered);
    }
    setCurrentPage(1);
    setActiveTag(tag);
  };

  const indexOfLastNews = currentPage * newsPerPage;
  const indexOfFirstNews = indexOfLastNews - newsPerPage;
  const currentNews = filteredNews.slice(indexOfFirstNews, indexOfLastNews);
  const totalPages = Math.ceil(filteredNews.length / newsPerPage);

  const renderNewsCards = () => {
    return currentNews.map((news, index) => (
      <div key={index}>
        <div
          className="rounded-2xl bg-white  xsm:w-full sm:w-full"
          data-aos="zoom-in"
          data-aos-offset="200"
          data-aos-duration="1000"
          data-aos-easing="ease-out"
        >
          <div className="flex flex-col p-6 ">
            <div className="relative">
              <div>
                <Image
                  src={news.image}
                  alt={news.image}
                  className="w-auto h-auto rounded-2xl"
                />
              </div>
              <div className="absolute top-5 left-5">
                <p className="bg-ksl_dark_red text-white rounded-2xl px-3 py-2">
                  {news.tag}
                </p>
              </div>
            </div>
            <div className="flex flex-col pt-5">
              <div className="text-text_15 font-lato font-semibold text-ksl_dark_black">
                {news.header.split(" ").slice(0, 10).join(" ")}
              </div>
              <div className="flex flex-row py-4">
                <Image
                  src={news.avaterimg}
                  alt={news.avaterimg}
                  className="w-auto h-auto rounded-full xsm:w-1/5 sm:w-1/5"
                />
                <div className="flex flex-col pl-3 my-auto xsm:w-4/5 sm:w-4/5">
                  <p className="text-sm font-mulish">{news.writer}</p>
                  <p className="text-sm font-mulish">{news.date}</p>
                </div>
              </div>
              <div className="text-sm text-ksl_dark_gray font-mulish font-light">
                {news.content.split(" ").slice(0, 10).join(" ")}
                ...
              </div>
              <div>
                <button className="cursor-pointer text-ksl_dark_red  pt-2 font-mulish font-semibold">
                  <Link href={`/news/${news.news_name}`}>
                    <p className="text-sm ">See full Story</p>
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

    const filtered = NewsList.filter((news) => {
      const { tag, text, date, writer } = news;
      return (
        (tag && tag.toLowerCase().includes(searchTerm)) ||
        (text && text.toLowerCase().includes(searchTerm)) ||
        (date && date.toLowerCase().includes(searchTerm)) ||
        (writer && writer.toLowerCase().includes(searchTerm))
      );
    });

    setFilteredNews(filtered);
    setSearchText(searchTerm);
    setCurrentPage(1);
  };
  return (
    <>
      <div>
        <div className="absolute inset-x-0 top-56 mt-2 flex justify-center items-center px-80 xsm:px-5 sm:px-5 md:px-10 mdl:px-10 xl:px-10 ">
          <div className="bg-white w-full py-10 rounded-lg">
            <div
              className="flex justify-center xsm:flex-row sm:flex-row overflow-x-scroll scrollbar-hide list-none xsm:w-full sm:w-full "
              data-aos="zoom-in"
              data-aos-offset="200"
              data-aos-duration="1000"
              data-aos-easing="ease-out"
            >
              <div className="text-center w-auto my-auto xsm:min-w-max sm:min-w-max xsm:pl-80">
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
              </div>
            </div>
          </div>
        </div>
        <div className="bg-ksl_light_red">
          <div className="pt-32 ">
            <div className="px-80 xsm:px-5 sm:px-5 md:px-10 mdl:px-10 xl:px-10 ">
              <div className="flex justify-between xsm:flex-col-reverse sm:flex-col-reverse">
                <div className="w-9/12 xsm:w-full sm:w-full">
                  <div className="grid grid-cols-2 xsm:grid-cols-1 gap-6 ">
                    {renderNewsCards()}
                  </div>
                  <div className="flex justify-center mt-5">
                    {renderPaginationButtons()}
                  </div>
                </div>
                <div className="mx-5"></div>

                {/* recentpost section */}

                <div className="flex flex-col w-3/12 xsm:w-full sm:w-full">
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
                  <div
                    className="py-2 xsm:hidden sm:hidden"
                    data-aos="zoom-in"
                    data-aos-offset="200"
                    data-aos-duration="1000"
                    data-aos-easing="ease-out"
                  >
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
                  </div>
                  
                  <div
                    className="py-2 xsm:hidden sm:hidden"
                    data-aos="zoom-in"
                    data-aos-offset="200"
                    data-aos-duration="1000"
                    data-aos-easing="ease-out"
                  >
                    <RecentPosts newsList={NewsList} />
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

export default News;
