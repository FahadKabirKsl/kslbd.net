import React, { useState, useRef, useEffect } from "react";
import { RxSlash } from "react-icons/rx";
import { TbEqual } from "react-icons/tb";

const Calculator = [
  {
    id: 1,
    title: "EPS Calculator",
    details: [
      {
        id: 1,
        description:
          "It indicates the amount of net profit per share which can be determined in the following ways-",
        firstVal: "Net profit excluding taxes",
        divisions: "/",
        secondVal: "Total number of ordinary shares",
        result: "Earnings per share",
      },
    ],
  },
  {
    id: 2,
    title: "P/E Ratio Calculator",
    details: [
      {
        id: 1,
        description:
          "It indicates the time at which the investment will be repaid, which can be determined in the following ways-",
        firstVal: "Current market value per share",
        secondVal: "Earnings per share",
        result: "Price earning ratio",
      },
    ],
  },
  {
    id: 3,
    title: "Dividend Yield Calculator",
    details: [
      {
        id: 1,
        description:
          "The dividend rate does not indicate real income as the stock market price may be lower or higher than the issue price in some cases. Dividend Yield indicates the correct return of the shares, which can be determined in the following ways-",
        firstVal: "Dividend per share",
        secondVal: "Market value per share",
        result: "Dividend income",
      },
    ],
  },
  {
    id: 4,
    title: "NAV Calculator",
    details: [
      {
        id: 1,
        description:
          "It displays the value of the company's net assets per share, which is indicative of the actual value of the company's shares. NAV can be extracted in the following ways-",
        firstVal: "Ordinary share price + reserves + undistributed dividends",
        secondVal: "Total number of ordinary shares",
        result: "Net assets per share",
      },
    ],
  },
  {
    id: 5,
    title: "RoE Calculator",
    details: [
      {
        id: 1,
        description: "It indicates the rate of return on invested capital-",
        firstVal: "Net profit",
        secondVal: "Equity",
        result: "Capital Receipt Rate",
      },
    ],
  },
  {
    id: 6,
    title: "Debt Equity Ratio Calculator",
    details: [
      {
        id: 1,
        description:
          "It indicates the capital and debt rate of a company's shareholders-",
        firstVal: " Debt",
        secondVal: "Equity",
        result: "Debt to capital ratio",
      },
    ],
  },
];

function CalculatorTabs() {
  const [openTab, setOpenTab] = useState(1);
  const tabContainerRef = useRef(null);
  const [numerator, setNumerator] = useState("");
  const [denominator, setDenominator] = useState("");
  const [result, setResult] = useState("");
  useEffect(() => {
    const containerWidth = tabContainerRef.current.clientWidth;
    const tabWidth = tabContainerRef.current.children[openTab - 1].clientWidth;
    const tabOffset = tabContainerRef.current.children[openTab - 1].offsetLeft;
    const scrollPosition = tabOffset - containerWidth / 2 + tabWidth / 2;
    tabContainerRef.current.scrollTo({
      left: scrollPosition,
      behavior: "smooth",
    });
  }, [openTab]);

  const handleClick = (e, id) => {
    e.preventDefault();
    setOpenTab(id);
  };
  const handleNumeratorClick = () => {
    setNumerator("");
  };

  const handleDenominatorClick = () => {
    setDenominator("");
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const num = parseFloat(numerator);
    const denom = parseFloat(denominator);

    if (denom === 0) {
      alert("Cannot divide by zero");
      return;
    }

    setResult(num / denom);
  };
  return (
    <>
      <div className="bg-ksl_light_red_200">
        <div className="xsm:px-5 sm:px-5 md:px-10 mdl:px-10 xl:px-10 px-80">
          <div className="py-10">
            <div
              className="flex flex-row list-none py-4 overflow-x-scroll scrollbar-hide w-full"
              ref={tabContainerRef}
              data-aos="fade-up"
              data-aos-offset="300"
              data-aos-duration="1000"
              data-aos-easing="ease-out"
            >
              {Calculator.map((calc, index) => (
                <div
                  key={index}
                  className="text-center font-lato text-lg xsm:text-base sm:text-base font-semibold my-auto w-auto min-w-max mx-2 "
                >
                  <a
                    className={
                      "px-6 py-3 rounded-lg block min-w-full" +
                      (openTab === calc.id
                        ? " bg-ksl_dark_red text-white"
                        : " bg-white hover:bg-ksl_dark_red hover:text-white duration-700")
                    }
                    onClick={(e) => {
                      e.preventDefault();
                      setOpenTab(calc.id);
                    }}
                    href={`#link${calc.id}`}
                    role="tablist"
                  >
                    {calc.title}
                  </a>
                </div>
              ))}
            </div>
            <div className="flex flex-col xsm:flex-row sm:flex-row">
              <div>
                {Calculator.map((calc, index) => (
                  <div
                    className={openTab === calc.id ? "block" : "hidden"}
                    id={`link${calc.id}`}
                    key={index}
                  >
                    {Array.isArray(calc.details) ? (
                      <div className="flex flex-row xsm:grid xsm:gap-2 xsm:grid-cols-1 sm:grid-cols-1  w-full mx-auto">
                        {calc.details.map((details) => (
                          <div
                            key={details.id}
                            className="rounded-3xl w-full mx-2"
                          >
                            <div
                              className="mx-auto text-center font-mulish text-base text-ksl_light_gray xsm:px-0 sm:px-0 p-10"
                              data-aos="zoom-in-right"
                              data-aos-offset="210"
                              data-aos-duration="800"
                              data-aos-easing="ease-out"
                            >
                              <p className="">"{details.description}</p>
                              <p className="font-bold">
                                {details.result} = {details.firstVal}{" "}
                                {details.divisions} {details.secondVal}{" "}
                                <span className="font-normal">"</span>
                              </p>
                            </div>
                            <form onSubmit={handleSubmit} className="">
                              <div
                                className="flex justify-between xsm:flex-col sm:flex-col"
                                data-aos="fade-up"
                                data-aos-offset="220"
                                data-aos-duration="800"
                                data-aos-easing="ease-out"
                              >
                                <div className="w-full font-mulish text-lg font-bold tracking-tighter text-ksl_light_gray">
                                  <label
                                    htmlFor="numerator"
                                    className="block mb-2 text-sm"
                                  >
                                    {details.firstVal}
                                  </label>
                                  <input
                                    type="number"
                                    id="numerator"
                                    name="numerator"
                                    className="bg-white border-0 focus:focus:outline-0  text-ksl_dark_gray text-sm rounded-lg block w-full p-2.5"
                                    value={numerator}
                                    onChange={(e) =>
                                      setNumerator(e.target.value)
                                    }
                                    onClick={handleNumeratorClick}
                                    required
                                  />
                                </div>
                                <div className="mx-2 my-auto xsm:hidden sm:hidden block">
                                  <RxSlash className="mb-0 mt-7 text-3xl text-ksl_light_gray" />
                                </div>
                                <div className="w-full font-mulish text-lg font-bold tracking-tighter text-ksl_light_gray xsm:my-3 sm:my-3">
                                  <label
                                    htmlFor="denominator"
                                    className="block mb-2 text-sm"
                                  >
                                    {details.secondVal}
                                  </label>
                                  <input
                                    type="number"
                                    id="denominator"
                                    name="denominator"
                                    className="bg-white border-0 focus:focus:outline-0  text-ksl_dark_gray text-sm rounded-lg block w-full p-2.5"
                                    value={denominator}
                                    onChange={(e) =>
                                      setDenominator(e.target.value)
                                    }
                                    onClick={handleDenominatorClick}
                                    required
                                  />
                                </div>
                                <div className="mx-2 my-auto xsm:hidden sm:hidden block">
                                  <TbEqual className="mb-0 mt-7 text-3xl text-ksl_light_gray" />
                                </div>
                                <div className="w-full font-mulish text-lg font-bold tracking-tighter text-ksl_light_gray">
                                  <label
                                    htmlFor="result"
                                    className="block mb-2 text-sm"
                                  >
                                    {details.result}
                                  </label>
                                  <input
                                    type="number"
                                    id="result"
                                    className="bg-white border-0 focus:focus:outline-0  text-ksl_dark_gray text-sm rounded-lg block w-full p-2.5"
                                    value={result}
                                    readOnly
                                  />
                                </div>
                              </div>
                              <div
                                className="w-6/12 mx-auto pt-5"
                                data-aos="fade-up"
                                data-aos-offset="230"
                                data-aos-duration="800"
                                data-aos-easing="ease-out"
                              >
                                <button
                                  type="submit"
                                  className="text-white bg-ksl_dark_red rounded-lg sm:w-auto px-5 py-2.5 text-center w-full font-mulish text-lg font-bold"
                                >
                                  Result
                                </button>
                              </div>
                            </form>
                          </div>
                        ))}
                      </div>
                    ) : (
                      <p>{calc.details}</p>
                    )}
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

export default CalculatorTabs;
