import React, { useState, useEffect } from "react";
import dynamic from "next/dynamic";

const DynamicApexLineChart = dynamic(() => import("./Chart/ApaxLineChart"), {
  ssr: false, // Render the component only on the client-side
});

const AllCalculator = [
  {
    id: 1,
    title: "Calculator",
    details: [
      {
        id: 1,
        chartData: [10, 41, 35],
        chartTime: ["10.00", "11.00", "12.00"],
        priceUpper: "$123",
        priceLower: "+1.05%",
      },
    ],
  },
  {
    id: 2,
    title: "Calculator",
    details: [
      {
        id: 1,
        chartData: [20, 30, 45, 60],
        chartTime: ["10.00", "11.00", "12.00"],
        priceUpper: "$145",
        priceLower: "-1.9%",
      },
    ],
  },
  {
    id: 3,
    title: "Calculator",
    details: [
      {
        id: 1,
        chartData: [20, 30, 45, 60],
        chartTime: ["10.00", "11.00", "12.00"],
        priceUpper: "$145",
        priceLower: "-1.9%",
      },
    ],
  },
];

function MarketCalculator() {
  const [openTab, setOpenTab] = useState(1);
  const [isClient, setIsClient] = useState(false);
  useEffect(() => {
    setIsClient(true);
  }, []);
  return (
    <>
      <div className="p-6 xsm:px-2 sm:px-2 rounded-3xl bg-white w-full">
        <div className="flex justify-between list-none overflow-x-scroll scrollbar-hide w-full">
          {AllCalculator.map((calc) => (
            <div
              key={calc.id}
              className="text-center font-mulish text-sm font-medium my-auto w-full min-w-max mx-1"
            >
              <a
                className={
                  "p-3 rounded-lg block min-w-full" +
                  (openTab === calc.id
                    ? "bg-white"
                    : " bg-ksl_light_red hover:bg-ksl_dark_red hover:text-white duration-700")
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
        {AllCalculator.map((calc) => (
          <div
            className={openTab === calc.id ? "block" : "hidden"}
            id={`link${calc.id}`}
            key={calc.id}
          >
            {Array.isArray(calc.details) ? (
              <div className="w-full">
                {calc.details.map((detail) => (
                  <div>
                    <div>
                      {isClient && (
                        <DynamicApexLineChart
                          data={detail.chartData}
                          chartTime={detail.chartTime}
                        />
                      )}
                    </div>
                    <div className="grid grid-cols-3 xsm:grid-cols-1 sm:grid-cols-1 gap-2 my-5">
                      <div className="text-center py-6 px-3  rounded-3xl font-lato text-sm font-medium text-ksl_light_gray bg-ksl_light_red">
                        <p>{detail.priceUpper}</p>
                        <p className="text-ksl_dark_red">Total trade</p>
                        <p>{detail.priceLower}</p>
                      </div>
                      <div className="text-center py-6 px-3 rounded-3xl font-lato text-sm font-medium text-ksl_light_gray bg-ksl_light_red">
                        <p>{detail.priceUpper}</p>
                        <p className="text-ksl_dark_red">Total Volume</p>
                        <p>{detail.priceLower}</p>
                      </div>
                      <div className="text-center py-6 px-3 rounded-3xl font-lato text-sm font-medium text-ksl_light_gray bg-ksl_light_red">
                        <p>{detail.priceUpper}</p>
                        <p className="text-ksl_dark_red">Total Value</p>
                        <p>{detail.priceLower}</p>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            ) : (
              <p>{calc.details}</p>
            )}
          </div>
        ))}
      </div>
    </>
  );
}

export default MarketCalculator;
