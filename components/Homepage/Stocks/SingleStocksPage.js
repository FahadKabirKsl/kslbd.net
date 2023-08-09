import React, { useState, useEffect, useRef } from "react";
import Link from "next/link";
import AOS from "aos";
import { FcCalendar } from "react-icons/fc";
import Slider from "@mui/material/Slider";
import { red, grey } from "@mui/material/colors";
import ApexAreaChart from "./Charts/ApexAreaChart";
import ApexDounutchart from "./Charts/ApexDounutchart";
import { BsFillArrowDownCircleFill } from "react-icons/bs";
import { dummydata2 } from "@/data2";
import ApexBarChart from "./Charts/ApexBarChart";
import DataTable from "react-data-table-component";
import Subscribe from "../Subscribe";

const SingleStocksPage = ({ stockData }) => {
  const data = dummydata2;
  const BuySellSap = dummydata2[0].BuySellSap;
  const peers = dummydata2[0].peers;
  const AllNews = dummydata2[0].AllNews;
  const AllEvent = dummydata2[0].AllEvent;
  const bardata = dummydata2[0].RevenueAssetProfit;
  const [activeNavTab, setActiveNavTab] = useState("overview");
  const tabButtonsRef = useRef(null);
  const handleTabNavClick = (tabId) => {
    setActiveNavTab(tabId);

    // Scroll to the selected tab
    const tabElement = document.getElementById(tabId);
    if (tabElement) {
      tabElement.scrollIntoView({ behavior: "smooth" });
    }
  };

  const columns = [
    {
      name: "Company",
      selector: (row) => row.company,
      sortable: false,
      grow: 4,
    },
    {
      name: "Issue Open Date",
      selector: (row) => row.issueod,
      grow: 2,
    },
    {
      name: "Issue Close Date",
      selector: (row) => row.issuecd,
      grow: 2,
    },
    {
      name: "Price Range",
      selector: (row) => (
        <div>
          <div className="flex flex-row">
            <p>${row.pricerl}</p>-<p>${row.pricerh}</p>
          </div>
        </div>
      ),
    },
    {
      name: "Issue Size",
      selector: (row) => row.issuesize,
    },
  ];

  const [dayhighlow, setDayhighlow] = useState([0, getMaxDayhighlow()]);
  const [highlow, setHighLow] = useState([0, getMaxHighLow()]);
  function getMaxDayhighlow() {
    const dayhighlow = data.map((item) => item.dayhighlow);
    return Math.max(...dayhighlow);
  }

  function getMaxHighLow() {
    const highlow = data.map((item) => item.highlow);
    return Math.max(...highlow);
  }
  const filteredData = data.filter((item) => {
    const inDayhighlow =
      item.dayhighlow >= dayhighlow[0] && item.dayhighlow <= dayhighlow[1];
    const inHighLow = item.highlow >= highlow[0] && item.highlow <= highlow[1];

    return inDayhighlow && inHighLow;
  });
  // const [openTab, setOpenTab] = useState(1);

  const [votes, setVotes] = useState([0, 0, 0]);
  const tabs = [
    { id: "overview", label: "Over View" },
    { id: "finance", label: "Financials" },
    { id: "peers", label: "Peers" },
    { id: "news", label: "News" },
    { id: "event", label: "Event" },
  ];
  const [activeTab, setActiveTab] = useState(tabs[0].id);
  const [selectedData, setSelectedData] = useState(BuySellSap[0].details[0]);
  const handleTabClick = (id) => {
    setActiveTab(id);
    const selectedTab = BuySellSap.find(
      (tab) => tab.title.toLowerCase() === id
    );
    setSelectedData(selectedTab.details[0]);
  };

  const [selectedRevenueAssetProfitData, setSelectedRevenueAssetProfitData] =
    useState(bardata.find((tab) => tab.id === 1).details[0]);

  const handleTabClickRevenueAssetProfit = (id) => {
    const selectedTabData = bardata.find((tab) => tab.id === id);

    if (selectedTabData) {
      setSelectedRevenueAssetProfitData(selectedTabData.details[0]);
    }
  };
  useEffect(() => {
    const initialVotes = [10, 10, 10]; // Equal initial votes for Buy, Sell, and Hold
    setVotes(initialVotes);
  }, []);
  const handleVote = (index) => {
    const newVotes = [...votes];
    newVotes[index] += 1;
    setVotes(newVotes);
  };

  const [activeShareTab, setActiveShareTab] = useState("Dec 20");
  const [shareTabProgress, setShareTabProgress] = useState(
    dummydata2[0].progress
  );

  const handleShareTabClick = (date) => {
    setActiveShareTab(date);
  };

  const handleProgressChange = (type, value) => {
    setShareTabProgress((prevState) => ({
      ...prevState,
      [activeShareTab]: {
        ...prevState[activeShareTab],
        [type]: value,
      },
    }));
  };

  useEffect(() => {
    AOS.init();
  }, []);
  return (
    <>
      <div className="bg-ksl_light_red">
        <div className="px-80 xsm:px-5 sm:px-5 md:px-10 mdl:px-10 xl:px-10 ">
          <div className="pt-40 pb-10">
            <div
              className="flex flex-row justify-center  bg-white p-16 xsm:p-6 sm:p-6 mx-auto rounded-lg mb-10 overflow-x-scroll scrollbar-hide xsm:pl-72 xsm:pr-10 sm:pl-72 sm:pr-10"
              ref={tabButtonsRef}
            >
              {tabs.map((tab) => (
                <button
                  key={tab.id}
                  onClick={() => handleTabNavClick(tab.id)}
                  className={`px-10 py-2 text-lg rounded-lg mx-5 xsm:px-4 sm:px-4 xsm:mx-2 sm:mx-2 min-w-max ${
                    activeNavTab === tab.id
                      ? "bg-ksl_dark_red text-white"
                      : "bg-ksl_light_red "
                  }`}
                  data-aos="zoom-in"
                  data-aos-offset="200"
                  data-aos-duration="1000"
                  data-aos-easing="ease-out"
                >
                  {tab.label}
                </button>
              ))}
            </div>
            <div className="grid grid-cols-2 xsm:grid-cols-1 sm:grid-cols-1 gap-8">
              <div id="overview">
                <div
                  className="bg-white rounded-lg p-6 w-full h-full"
                  data-aos="fade-right"
                  data-aos-offset="200"
                  data-aos-duration="1000"
                  data-aos-easing="ease-out"
                >
                  <div className="flex flex-col">
                    <div className="flex justify-between xsm:flex-col sm:flex-col w-full pb-3">
                      <h2 className="text-xl font-bold font-lato text-ksl_light_black">
                        {stockData.company}
                      </h2>
                      <p className="my-auto mb-0 text-sm font-lato text-ksl_light_black">
                        {stockData.date}
                      </p>
                    </div>
                    <div className="flex flex-row text-text_14 font-lato text-ksl_light_black">
                      <div className="flex justify-between">
                        <p>NSE</p>
                        <p className="pl-2">{stockData.nse}</p>
                      </div>
                      <p className="px-5">|</p>
                      <div className="flex justify-between">
                        <p>BSE</p>
                        <p className="pl-2">{stockData.bse}</p>
                      </div>
                    </div>
                    <div>
                      <ApexAreaChart
                        data={selectedData.chartData}
                        chartTime={selectedData.chartTime}
                      />
                    </div>
                    <div className="flex justify-between xsm:flex-col sm:flex-col w-full">
                      <div className="flex flex-col">
                        <p className="text-xl text-ksl_light_green_200 font-lato font-bold flex flex-row">
                          <BsFillArrowDownCircleFill className="my-auto" />
                          <span className="pl-2">{selectedData.price}</span>
                        </p>
                        <p className="text-base text-ksl_light_green_200 font-lato">
                          {selectedData.prtg}
                        </p>
                      </div>
                      <div className="w-3/5 xsm:w-full sm:w-full my-auto">
                        <div className="flex justify-between ">
                          <div>
                            <button
                              onClick={() => handleTabClick("buy")}
                              className={`px-10 xsm:px-6 sm:px-6 xsm:mt-5 sm:mt-5 py-2 text-text_15 font-lato rounded-lg ${
                                activeTab === "buy"
                                  ? "bg-ksl_light_green_200 text-white"
                                  : "bg-ksl_light_green_200 text-white"
                              }`}
                            >
                              Buy
                            </button>
                          </div>
                          <div>
                            <button
                              onClick={() => handleTabClick("sell")}
                              className={`px-10 xsm:px-6 sm:px-6 xsm:mt-5 sm:mt-5 py-2 text-text_15 font-lato rounded-lg ${
                                activeTab === "sell"
                                  ? "bg-ksl_dark_red text-white"
                                  : "bg-ksl_dark_red text-white"
                              }`}
                            >
                              Sell
                            </button>
                          </div>
                          <div>
                            <button
                              onClick={() => handleTabClick("sap")}
                              className={`px-10 xsm:px-6 sm:px-6 xsm:mt-5 sm:mt-5 py-2 text-text_15 font-lato rounded-lg ${
                                activeTab === "sap"
                                  ? "bg-ksl_dark_blue text-white"
                                  : "bg-ksl_dark_blue text-white"
                              }`}
                            >
                              Sap
                            </button>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div id="overview">
                <div
                  className="bg-white rounded-lg p-6 w-full h-full"
                  data-aos="fade-up"
                  data-aos-offset="210"
                  data-aos-duration="1000"
                  data-aos-easing="ease-out"
                >
                  <div className="flex flex-col items-center ">
                    <h1 className="text-2xl font-lato font-bold mb-6 text-ksl_dark_red">
                      What's Your Call?
                    </h1>
                    <div className="flex justify-between">
                      <button
                        onClick={() => handleVote(0)}
                        className="bg-ksl_light_green_200 text-white font-bold py-2 px-10 xsm:px-5 sm:px-5 rounded m-2"
                      >
                        Buy
                      </button>
                      <button
                        onClick={() => handleVote(1)}
                        className="bg-ksl_dark_red text-white font-bold py-2 px-10 xsm:px-5 sm:px-5 rounded m-2"
                      >
                        Sell
                      </button>
                      <button
                        onClick={() => handleVote(2)}
                        className="bg-ksl_dark_blue text-white font-bold py-2 px-10 xsm:px-5 sm:px-5 rounded m-2"
                      >
                        Hold
                      </button>
                    </div>

                    <ApexDounutchart votes={votes} />
                    <div className="flex flex-col pt-5">
                      <p className="text-center text-text_14 text-ksl_light_gray font-lato">
                        When a company offers its shares for the first time, it
                        is called an IPO or an Initial Public Offering. During
                        this process.
                      </p>
                      <p className="text-center text-text_14 font-lato text-ksl_light_black">
                        Note : When a company offers its shares for the first
                        time
                      </p>
                    </div>
                  </div>
                </div>
              </div>
              <div id="finance">
                <div
                  className="bg-white rounded-lg p-6 w-full h-full"
                  data-aos="fade-up"
                  data-aos-offset="220"
                  data-aos-duration="1000"
                  data-aos-easing="ease-out"
                >
                  <h2 className="text-xl font-bold font-lato text-ksl_light_black">
                    Fundementals and Performances
                  </h2>
                  <div className="flex justify-between xsm:flex-col sm:flex-col w-full py-5">
                    <div className="w-full xsm:pt-5 sm:pt-5 ">
                      <div>
                        <div className="flex flex-row justify-center text-sm font-lato text-ksl_light_black">
                          <p className="w-full ">Day Low</p>

                          <p className="w-full text-end">Day High</p>
                        </div>
                        <Slider
                          value={dayhighlow}
                          onChange={(_, newValue) => setDayhighlow(newValue)}
                          min={0}
                          max={getMaxDayhighlow()}
                          valueLabelDisplay="auto"
                          color="secondary"
                          sx={{
                            "& .MuiSlider-rail": {
                              backgroundColor: grey[400],
                            },
                            "& .MuiSlider-thumb": {
                              backgroundColor: grey[400],
                              height: 16,
                              width: 4,
                            },
                            "& .MuiSlider-track": {
                              backgroundColor: grey[400],
                              borderColor: grey[400],
                            },
                          }}
                        />
                        <div className="flex flex-row justify-center text-sm font-lato text-ksl_light_black">
                          <p className="w-full ">{dayhighlow[0]}</p>
                          <p className="mx-5 my-auto"></p>
                          <p className="w-full text-end">{dayhighlow[1]}</p>
                        </div>
                      </div>
                      <div>
                        <div className="flex flex-row justify-center text-sm font-lato text-ksl_light_black pt-9">
                          <p className="w-full  "> Low</p>
                          <p className="mx-5 my-auto"></p>
                          <p className="w-full  text-end"> High</p>
                        </div>
                        <Slider
                          value={highlow}
                          onChange={(_, newValue) => setHighLow(newValue)}
                          min={0}
                          max={getMaxHighLow()}
                          valueLabelDisplay="auto"
                          color="secondary"
                          sx={{
                            "& .MuiSlider-rail": {
                              backgroundColor: grey[400],
                            },
                            "& .MuiSlider-thumb": {
                              backgroundColor: grey[400],
                              height: 16,
                              width: 4,
                            },
                            "& .MuiSlider-track": {
                              backgroundColor: grey[400],
                              borderColor: grey[400],
                            },
                          }}
                        />
                        <div className="flex flex-row justify-center text-sm font-lato text-ksl_light_black">
                          <p className="w-full ">{highlow[0]}</p>

                          <p className="w-full text-end ">{highlow[1]}</p>
                        </div>
                      </div>
                    </div>
                    <div className="mx-10"></div>
                    <div className="w-full xsm:pt-5 sm:pt-5">
                      <div className="flex justify-between">
                        <div className="flex flex-col text-sm font-lato text-ksl_light_black">
                          <p className="pb-2">Market Cap (Cr)</p>
                          <p className="pb-2">PB Ratio</p>
                          <p className="pb-2">PE Ratio</p>
                          <p className="pb-2">Sector PE</p>
                          <p className="pb-2">Sector PB</p>
                          <p className="pb-2">Dividend Yield</p>
                          <p className="pb-2">Sector Div Yld</p>
                        </div>
                        <div className="flex flex-col text-sm font-lato text-ksl_light_black">
                          <p className="pb-2">{stockData.marketCap}</p>
                          <p className="pb-2">{stockData.pbratio}</p>
                          <p className="pb-2">{stockData.peratio}</p>
                          <p className="pb-2">{stockData.pe}</p>
                          <p className="pb-2">{stockData.pb}</p>
                          <p className="pb-2">{stockData.yield}</p>
                          <p className="pb-2">{stockData.yld}</p>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="grid grid-cols-3 xsm:grid-cols-1 sm:grid-cols-1 xsm:py-5 sm:py-5 gap-4">
                    <div>
                      <div className="flex flex-col bg-ksl_dark_red text-white p-4 rounded-xl">
                        <p>Financial</p>
                        <p>Diversified Finantial</p>
                      </div>
                    </div>
                    <div>
                      <div className="flex flex-col bg-ksl_dark_red text-white p-4 rounded-xl">
                        <p>Small Cap</p>
                        <p>Diversified Finantial</p>
                      </div>
                    </div>
                    <div>
                      <div className="flex flex-col bg-ksl_dark_red text-white p-4 rounded-xl">
                        <p>Moderate Risk</p>
                        <p>Diversified Finantial</p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div id="finance">
                <div
                  className="bg-white rounded-lg p-6 w-full h-full"
                  data-aos="fade-right"
                  data-aos-offset="230"
                  data-aos-duration="1000"
                  data-aos-easing="ease-out"
                >
                  <h1 className="text-xl font-bold font-lato text-ksl_dark_red">
                    Finance
                  </h1>
                  <div className="flex flex-row pt-5 overflow-x-scroll scrollbar-hide">
                    <div>
                      <button
                        onClick={() => handleTabClickRevenueAssetProfit(1)}
                        className={`px-10 py-2 text-text_15 font-lato rounded-lg  ${
                          selectedRevenueAssetProfitData.id === 1
                            ? "bg-ksl_dark_red text-white"
                            : "bg-ksl_light_red text-black hover:bg-ksl_dark_red hover:text-white duration-700"
                        }`}
                      >
                        Revenue
                      </button>
                    </div>
                    <div>
                      <button
                        onClick={() => handleTabClickRevenueAssetProfit(2)}
                        className={`px-10 py-2 text-text_15 font-lato rounded-lg mx-5 ${
                          selectedRevenueAssetProfitData.id === 2
                            ? "bg-ksl_dark_red text-white"
                            : "bg-ksl_light_red text-black hover:bg-ksl_dark_red hover:text-white duration-700"
                        }`}
                      >
                        Asset
                      </button>
                    </div>
                    <div>
                      <button
                        onClick={() => handleTabClickRevenueAssetProfit(3)}
                        className={`px-10 py-2 text-text_15 font-lato rounded-lg ${
                          selectedRevenueAssetProfitData.id === 3
                            ? "bg-ksl_dark_red text-white"
                            : "bg-ksl_light_red text-black hover:bg-ksl_dark_red hover:text-white duration-700"
                        }`}
                      >
                        Profit
                      </button>
                    </div>
                  </div>
                  <ApexBarChart bardata={selectedRevenueAssetProfitData} />
                </div>
              </div>
              <div
                id="peers"
                className="col-span-2 xsm:col-span-1"
                data-aos="fade-right"
                data-aos-offset="240"
                data-aos-duration="1000"
                data-aos-easing="ease-out"
              >
                <div className="bg-white rounded-lg p-6 w-full h-full font-lato">
                  <div>
                    <h1 className="text-xl font-bold font-lato text-ksl_dark_red">
                      Peers & Comparison
                    </h1>
                    <DataTable
                      columns={columns}
                      data={peers}
                      className="custom-table2"
                    />
                  </div>
                </div>
              </div>
              <div id="news">
                <div
                  className="bg-white rounded-lg p-6 w-full h-full font-lato"
                  data-aos="fade-up"
                  data-aos-offset="250"
                  data-aos-duration="1000"
                  data-aos-easing="ease-out"
                >
                  <div>
                    <h1 className="text-xl font-bold font-lato text-ksl_dark_red">
                      Shareholding Pattern
                    </h1>
                    <div className="flex justify-between xsm:flex-row xsm:justify-center sm:flex-row sm:justify-center mb-4 pt-5 overflow-x-scroll scrollbar-hide xsm:pl-28 sm:pl-28">
                      {Object.keys(dummydata2[0].progress).map((date) => (
                        <button
                          key={date}
                          onClick={() => handleShareTabClick(date)}
                          className={`py-2 px-5 rounded-xl font-lato text-text_14 min-w-max xsm:mx-2 sm:mx-2 ${
                            activeShareTab === date
                              ? "bg-ksl_dark_red text-white"
                              : "bg-ksl_light_red "
                          } rounded`}
                        >
                          {date}
                        </button>
                      ))}
                    </div>
                    <div className=" pt-3">
                      <div className="flex flex-col mb-2">
                        <div className="text-base font-lato font-medium pt-2 pb-1">
                          Promoters:
                        </div>
                        <div className="flex flex-row">
                          <div className="flex-grow bg-[#CBCBCB] rounded-full h-4 w-full my-auto">
                            <div
                              className="bg-red-500 h-full rounded-full"
                              style={{
                                width: `${shareTabProgress[activeShareTab].promoters}%`,
                              }}
                            ></div>
                          </div>
                          <div className="w-1/12">
                            <p className="pl-5">
                              {shareTabProgress[activeShareTab].promoters}%
                            </p>
                          </div>
                        </div>
                      </div>
                      <div className="flex flex-col mb-2">
                        <div className="text-base font-lato font-medium pt-2 pb-1">
                          Retails:
                        </div>
                        <div className="flex flex-row">
                          <div className="flex-grow bg-[#CBCBCB] rounded-full h-4 w-full my-auto">
                            <div
                              className="bg-red-500 h-full rounded-full"
                              style={{
                                width: `${shareTabProgress[activeShareTab].retails}%`,
                              }}
                            ></div>
                          </div>
                          <div className="w-1/12">
                            <p className="pl-5">
                              {shareTabProgress[activeShareTab].retails}%
                            </p>
                          </div>
                        </div>
                      </div>
                      <div className="flex flex-col">
                        <div className="text-base font-lato font-medium pt-2 pb-1">
                          Foreign Institutions:
                        </div>
                        <div className="flex flex-row">
                          <div className="flex-grow bg-[#CBCBCB] rounded-full h-4 w-full my-auto">
                            <div
                              className="bg-red-500 h-full rounded-full"
                              style={{
                                width: `${shareTabProgress[activeShareTab].foreignInstitutions}%`,
                              }}
                            ></div>
                          </div>
                          <div className="w-1/12">
                            <p className="pl-5">
                              {
                                shareTabProgress[activeShareTab]
                                  .foreignInstitutions
                              }
                              %
                            </p>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div id="news">
                <div
                  className="bg-white rounded-lg p-6 w-full h-full font-lato"
                  data-aos="fade-right"
                  data-aos-offset="260"
                  data-aos-duration="1000"
                  data-aos-easing="ease-out"
                >
                  <div className="flex justify-between">
                    <h2 className="text-xl font-bold font-lato text-ksl_dark_red">
                      News
                    </h2>
                    <h2 className="text-base text-ksl_dark_red font-bold font-lato pb-0 my-auto">
                      All news
                    </h2>
                  </div>

                  <div className="w-full">
                    {AllNews.map((news, index) => (
                      <div key={index} className=" w-full my-5">
                        <div className="flex flex-col w-full ">
                          <div className="flex flex-row text-sm font-lato text-ksl_light_black">
                            <p>{news.date}</p>
                            <p>{news.time}</p>
                          </div>
                          <p className="text-text_14 font-lato text-ksl_light_black font-semibold pt-2 pb-1">
                            {news.header.split(" ").slice(0, 10).join(" ")}
                          </p>

                          <div className="flex flex-row xsm:flex-col sm:flex-col w-full">
                            <p className="w-full text-start text-sm font-lato text-ksl_light_gray">
                              {news.content.split(" ").slice(0, 10).join(" ")}
                            </p>
                            <Link
                              href={news.link}
                              className="w-1/5 xsm:w-full sm:w-full"
                            >
                              <p className="text-ksl_dark_red text-end xsm:text-start sm:text-start text-sm">
                                see news
                              </p>
                            </Link>
                          </div>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
              <div id="event">
                <div
                  className="bg-white rounded-lg p-6 w-full h-full font-lato"
                  data-aos="fade-right"
                  data-aos-offset="270"
                  data-aos-duration="1000"
                  data-aos-easing="ease-out"
                >
                  <div className="flex justify-between">
                    <h2 className="text-xl font-bold font-lato text-ksl_dark_red">
                      Event
                    </h2>
                    <h2 className="text-base text-ksl_dark_red font-bold font-lato pb-0 my-auto">
                      All event
                    </h2>
                  </div>

                  <div className="w-full">
                    {AllEvent.map((event, index) => (
                      <div key={index} className="flex flex-row w-full my-5">
                        <div className="pt-.5">
                          <FcCalendar className="text-3xl" />
                        </div>
                        <div className="flex flex-col w-full pl-3">
                          <div className="flex flex-row text-sm font-lato text-ksl_light_black">
                            <p>{event.date}</p>
                            <p>{event.time}</p>
                          </div>
                          <p className="text-text_14 font-lato font-semibold text-ksl_light_black pt-2 pb-1">
                            {event.header.split(" ").slice(0, 10).join(" ")}
                          </p>

                          <div className="flex flex-row xsm:flex-col sm:flex-col w-full">
                            <p className="w-full text-start text-sm font-lato text-ksl_light_gray">
                              {event.content.split(" ").slice(0, 10).join(" ")}
                            </p>
                            <Link
                              href={event.link}
                              className="w-1/5 xsm:w-full sm:w-full"
                            >
                              <p className="text-ksl_dark_red text-end xsm:text-start sm:text-start text-sm">
                                see event
                              </p>
                            </Link>
                          </div>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
              <div id="event">
                <div
                  className="bg-white rounded-lg p-6 w-full h-full font-lato"
                  data-aos="fade-up"
                  data-aos-offset="280"
                  data-aos-duration="1000"
                  data-aos-easing="ease-out"
                >
                  <h2 className="text-xl font-bold font-lato text-ksl_dark_red pb-5">
                    About Company
                  </h2>
                  <p className="text-text_14 font-lato text-ksl_light_gray">
                    {stockData.description1}
                  </p>
                  <p className="text-text_14 font-lato text-ksl_light_gray pt-3 pb-5">
                    {stockData.description2}
                  </p>
                  <div className="grid grid-cols-2 xsm:grid-cols-1 sm:grid-cols-1 gap-2">
                    <div>
                      <div className="flex flex-col">
                        <p className="text-base font-lato text-ksl_dark_red">
                          Parent Organization
                        </p>
                        <p className="text-text_14 font-lato text-ksl_light_gray">
                          {stockData.organization}
                        </p>
                      </div>
                    </div>
                    <div>
                      <div className="flex flex-col">
                        <p className="text-base font-lato text-ksl_dark_red">
                          Founded
                        </p>
                        <p className="text-text_14 font-lato text-ksl_light_gray">
                          {stockData.founded}
                        </p>
                      </div>
                    </div>
                    <div>
                      <div className="flex flex-col">
                        <p className="text-base font-lato text-ksl_dark_red">
                          Managing Director
                        </p>
                        <p className="text-text_14 font-lato text-ksl_light_gray">
                          {stockData.managingd}
                        </p>
                      </div>
                    </div>
                    <div>
                      <div className="flex flex-col">
                        <p className="text-base font-lato text-ksl_dark_red">
                          NSE Symbol
                        </p>
                        <p className="text-text_14 font-lato text-ksl_light_gray">
                          {stockData.symbol}
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
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
};

export default SingleStocksPage;
