import React, { useEffect, useState } from "react";
import Link from "next/link";
import DataTable from "react-data-table-component";
import {
  AiOutlineArrowLeft,
  AiOutlineArrowRight,
  AiOutlineArrowDown,
  AiOutlineArrowUp,
  AiOutlineSearch,
} from "react-icons/ai";
import Slider from "@mui/material/Slider";
import AOS from "aos";
import { red, grey, green } from "@mui/material/colors";
import { dummydata2 } from "@/data2";
import ApexLineChartSmall from "../Market/Chart/ApaxLineChartSmall";
import Subscribe from "../Subscribe";
const columns = [
  {
    name: "Company",
    selector: (row) => (
      <div>
        <Link legacyBehavior href={`/stocks/${row.company}`} passHref>
          <a target="_blank" rel="noopener noreferrer">
            {row.company}
          </a>
        </Link>
      </div>
    ),
    sortable: true,
    grow: 2,
  },
  {
    // name: "Price",
    selector: (row) => <ApexLineChartSmall data={row.chartData} />,
  },
  {
    name: "Market Price",
    selector: (row) => (
      <div>
        <div className="flex flex-col">
          <p className="font-extrabold">{row.marketPrice}</p>
          {/* <p style={{ color: row.marketprtg >= 0 ? "red" : "green" }}>
            {row.marketprtg}
          </p> */}
          <p style={{ color: row.marketprtg >= 0 ? green[500] : red[500] }}>
            {row.marketprtg >= 0 ? "+" : "-"}
            {Math.abs(row.marketprtg)}%
          </p>
        </div>
      </div>
    ),
    sortable: true,
  },
  {
    name: "Close Price",
    selector: (row) => row.closePrice,
    sortable: true,
  },
  {
    name: "Market Cap",
    selector: (row) => row.marketCap,
    sortable: true,
  },
];
function Stocks() {
  const data = dummydata2;
  const [isSectorOpen, setIsSectorOpen] = useState(false);
  const [isIndexOpen, setIsIndexOpen] = useState(false);
  const [range, setRange] = useState([0, getMaxMarketCap()]);
  const [closingPriceRange, setClosingPriceRange] = useState([
    0,
    getMaxClosingPrice(),
  ]);
  const [selectedSectors, setSelectedSectors] = useState([]);
  const [selectedIndexes, setSelectedIndexes] = useState([]);
  const [searchValue, setSearchValue] = useState("");
  const [currentPage, setCurrentPage] = useState(1);
  const itemsPerPage = 10;
  const handleToggleMenu = (menuName) => {
    if (menuName === "sector") {
      setIsSectorOpen(!isSectorOpen);
    } else if (menuName === "index") {
      setIsIndexOpen(!isIndexOpen);
    }
  };
  const handleClearAll = () => {
    setSelectedSectors([]);
    setSelectedIndexes([]);
    setSearchValue("");
    setRange([0, getMaxMarketCap()]);
    setClosingPriceRange([0, getMaxClosingPrice()]);
  };

  const handleSectorChange = (sector) => {
    if (selectedSectors.includes(sector)) {
      setSelectedSectors(selectedSectors.filter((s) => s !== sector));
    } else {
      setSelectedSectors([...selectedSectors, sector]);
    }
  };
  const handleIndexChange = (index) => {
    if (selectedIndexes.includes(index)) {
      setSelectedIndexes(selectedIndexes.filter((i) => i !== index));
    } else {
      setSelectedIndexes([...selectedIndexes, index]);
    }
  };
  const handleSearchChange = (event) => {
    setSearchValue(event.target.value);
  };
  function getMaxMarketCap() {
    const marketCaps = data.map((item) => item.marketCap);
    return Math.max(...marketCaps);
  }
  function getMaxClosingPrice() {
    const closingPrices = data.map((item) => item.closePrice);
    return Math.max(...closingPrices);
  }
  const filteredData = data.filter((item) => {
    const matchesSearch = item.company
      .toLowerCase()
      .includes(searchValue.toLowerCase());
    const inMarketCapRange =
      item.marketCap >= range[0] && item.marketCap <= range[1];
    const inClosingPriceRange =
      item.closePrice >= closingPriceRange[0] &&
      item.closePrice <= closingPriceRange[1];
    const matchesSector =
      selectedSectors.length === 0 || selectedSectors.includes(item.sector);
    const matchesIndex =
      selectedIndexes.length === 0 || selectedIndexes.includes(item.index);

    return (
      matchesSearch &&
      inMarketCapRange &&
      inClosingPriceRange &&
      matchesSector &&
      matchesIndex
    );
  });
  const totalCompanies = filteredData.length;
  const start = (currentPage - 1) * itemsPerPage;
  const end = start + itemsPerPage;
  const paginatedData = filteredData.slice(start, end);
  const sectors = [...new Set(data.map((item) => item.sector))];
  const indexes = [...new Set(data.map((item) => item.index))];
  const handlePageChange = (page) => {
    setCurrentPage(page);
  };
  const generatePageNumbers = () => {
    const totalPages = Math.ceil(filteredData.length / itemsPerPage);
    const pageNumbers = [];

    for (let i = 1; i <= totalPages; i++) {
      pageNumbers.push(i);
    }

    return pageNumbers;
  };
  useEffect(() => {
    AOS.init();
  }, []);
  return (
    <>
      <div className="bg-ksl_light_red">
        <div className="px-80 xsm:px-5 sm:px-5 md:px-10 mdl:px-10 xl:px-10">
          <div
            className="flex justify-between xsm:flex-col sm:flex-col pb-16"
            data-aos="fade-up"
            data-aos-offset="150"
            data-aos-duration="800"
            data-aos-easing="ease-out"
          >
            <div className="border rounded-3xl bg-white border-white mt-28 xsm:mt-16 sm:mt-16 pt-5">
              <div className="flex flex-col">
                <div className="p-6">
                  <div className="flex justify-between w-full">
                    <p className="text-ksl_dark_red font-semibold">Filter</p>
                    <button
                      onClick={handleClearAll}
                      className="text-ksl_dark_red clear-all-button"
                    >
                      Clear All
                    </button>
                  </div>
                </div>
                <div className="flex flex-col py-3 px-6">
                  <p className="pb-3">Search Company</p>
                  <div className="relative">
                    <div className="absolute inset-y-0 left-0 flex items-center pl-3 pointer-events-none">
                      <AiOutlineSearch />
                    </div>
                    <input
                      type="text"
                      name="search"
                      value={searchValue}
                      onChange={handleSearchChange}
                      id="company-search"
                      className="block w-full px-4 py-2 pl-10 text-sm text-ksl_light_gray border border-ksl_light_red  rounded-lg bg-ksl_light_red focus:outline-none  "
                      placeholder="Search for company"
                    />
                  </div>
                </div>
                <div className="border-t"></div>
                <div className="py-3 px-6">
                  <button
                    onClick={() => handleToggleMenu("sector")}
                    className="flex justify-between w-full hover:bg-ksl_dark_red hover:text-white duration-700 p-3 rounded-xl"
                  >
                    <p>Sector</p>
                    <p className="my-auto">
                      {isSectorOpen ? (
                        <AiOutlineArrowUp />
                      ) : (
                        <AiOutlineArrowDown />
                      )}
                    </p>
                  </button>
                  {isSectorOpen && (
                    <div
                      className={`mt-3 ${
                        isSectorOpen ? "visible" : "invisible"
                      }`}
                    >
                      {sectors.map((sector) => (
                        <div className="flex flex-row" key={sector}>
                          <label className="containerr my-auto">
                            <input
                              type="checkbox"
                              name="sector"
                              value={sector}
                              onChange={() => handleSectorChange(sector)}
                              checked={selectedSectors.includes(sector)}
                              className=""
                            />
                            <span class="checkmark my-auto"></span>
                          </label>
                          <div className="pl-5 py-2 flex flex-row">
                            <p>{sector}</p>
                            <p className="pl-5">
                              (
                              {
                                filteredData.filter(
                                  (item) => item.sector === sector
                                ).length
                              }
                              )
                            </p>
                          </div>
                        </div>
                      ))}
                    </div>
                  )}
                </div>
                <div className="border-t"></div>
                <div className="py-3 px-6">
                  <button
                    onClick={() => handleToggleMenu("index")}
                    className="flex justify-between w-full hover:bg-ksl_dark_red hover:text-white duration-700 p-3 rounded-xl"
                  >
                    <p>Index</p>
                    <p className="my-auto">
                      {isIndexOpen ? (
                        <AiOutlineArrowUp />
                      ) : (
                        <AiOutlineArrowDown />
                      )}
                    </p>
                  </button>
                  {isIndexOpen && (
                    <div
                      className={`mt-3 ${
                        isIndexOpen ? "visible" : "invisible"
                      }`}
                    >
                      {indexes.map((index) => (
                        <div className="flex flex-row" key={index}>
                          <label className="containerr my-auto">
                            <input
                              type="checkbox"
                              name="index"
                              value={index}
                              onChange={() => handleIndexChange(index)}
                              checked={selectedIndexes.includes(index)}
                              className=""
                            />
                            <span class="checkmark my-auto"></span>
                          </label>

                          <p className="pl-5 py-2 flex flex-row">
                            <p>{index}</p>
                            <p className="pl-5">
                              (
                              {
                                filteredData.filter(
                                  (item) => item.index === index
                                ).length
                              }
                              )
                            </p>
                          </p>
                        </div>
                      ))}
                    </div>
                  )}
                </div>
                <div className="border-t"></div>
                <div className="py-3 px-6">
                  <div>
                    Market Cap Range
                    <Slider
                      value={range}
                      onChange={(_, newValue) => setRange(newValue)}
                      min={0}
                      max={getMaxMarketCap()}
                      valueLabelDisplay="auto"
                      color="secondary"
                      sx={{
                        "& .MuiSlider-rail": {
                          backgroundColor: red[700],
                        },
                        "& .MuiSlider-thumb": {
                          backgroundColor: red[500],
                          height: 12,
                          width: 12,
                        },
                        "& .MuiSlider-track": {
                          backgroundColor: grey[700],
                          borderColor: grey[700],
                        },
                      }}
                    />
                    <div className="flex flex-row justify-center">
                      <p className="px-6 py-1 bg-ksl_light_red">{range[0]}</p>
                      <p className="mx-5 my-auto">to</p>
                      <p className="px-6 py-1 bg-ksl_light_red">{range[1]}</p>
                    </div>
                  </div>
                </div>
                <div className="border-t"></div>
                <div className="py-3 px-6">
                  <div>
                    Closing Price Range
                    <Slider
                      value={closingPriceRange}
                      onChange={(_, newValue) => setClosingPriceRange(newValue)}
                      min={0}
                      max={getMaxClosingPrice()}
                      valueLabelDisplay="auto"
                      color="secondary"
                      sx={{
                        "& .MuiSlider-rail": {
                          backgroundColor: red[700],
                        },
                        "& .MuiSlider-thumb": {
                          backgroundColor: red[500],
                          height: 12,
                          width: 12,
                        },
                        "& .MuiSlider-track": {
                          backgroundColor: grey[700],
                          borderColor: grey[700],
                        },
                      }}
                    />
                    <div className="flex flex-row justify-center">
                      <p className="px-6 py-1 bg-ksl_light_red">
                        {closingPriceRange[0]}
                      </p>
                      <p className="mx-5 my-auto">to</p>
                      <p className="px-6 py-1 bg-ksl_light_red">
                        {closingPriceRange[1]}
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="mx-5 xsm:hidden sm:hidden"></div>

            <div className="w-4/5 xsm:w-full sm:w-full mt-1">
              <div className="px-0 my-10">
                <p
                  className="text-xl text-ksl_light_gray"
                  data-aos="fade-down"
                  data-aos-offset="150"
                  data-aos-duration="800"
                  data-aos-easing="ease-out"
                >
                  Search Results <strong>{totalCompanies} stocks</strong>
                </p>
              </div>
              <div className="border p-6 rounded-3xl bg-white border-white">
                <DataTable
                  columns={columns}
                  data={paginatedData}
                  pagination={false}
                  highlightOnHover
                  striped
                  className="custom-table"
                />
                <div className="pagination flex justify-center mt-10 ">
                  <button
                    onClick={() => handlePageChange(currentPage - 1)}
                    disabled={currentPage === 1}
                    className="bg-white px-4 py-2 mx-5 xsm:mx-1 hover:bg-ksl_dark_red hover:text-white duration-700 rounded-xl"
                  >
                    Prev
                  </button>
                  {generatePageNumbers().map((pageNumber) => (
                    <button
                      key={pageNumber}
                      onClick={() => handlePageChange(pageNumber)}
                      className={`px-4 py-2 mx-5 xsm:mx-1  ${
                        currentPage === pageNumber
                          ? "active bg-ksl_dark_red text-white border border-ksl_dark_red  rounded-xl"
                          : "hover:bg-ksl_dark_red hover:text-white duration-700 rounded-xl "
                      }`}
                    >
                      {pageNumber}
                    </button>
                  ))}
                  <button
                    onClick={() => handlePageChange(currentPage + 1)}
                    disabled={
                      currentPage ===
                      Math.ceil(filteredData.length / itemsPerPage)
                    }
                    className="bg-white px-4 py-2 mx-5 xsm:mx-1 hover:bg-ksl_dark_red hover:text-white duration-700 rounded-xl"
                  >
                    Next
                  </button>
                </div>
                {/* Pagination */}
                {/* Pagination */}
                {/* <div className="pagination">
                  <div className="pagination-buttons">
                    {generatePageNumbers()}
                  </div>
                </div> */}
              </div>
            </div>
          </div>
        </div>
        <div className="pb-10">
          <Subscribe />
        </div>
      </div>
    </>
  );
}

export default Stocks;
