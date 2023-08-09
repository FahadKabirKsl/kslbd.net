import React, { useState, useEffect } from "react";
import dynamic from "next/dynamic";
// import ApaxBarChart from './Chart/ApaxBarChart';
const DynamicApexBarChart = dynamic(() => import("./Chart/ApaxBarChart"), {
  ssr: false, // Render the component only on the client-side
});
const AllCalculator = [
  {
    id: 1,
    title: "Spot Trade",
    details: [
      {
        id: 1,
        chartData: [44, 55, 41, 67, 22, 43],
        chartTime: ["10.00", "11.00", "12.00", "13.00", "14.00", "15.00"],
        Real: "123015",
        Projected: "123015",
        Yesterday: "123015",
        Weekly_Avg: "123015",
      },
    ],
  },
  {
    id: 2,
    title: "Beta +",
    details: [
      {
        id: 1,
        chartData: [13, 23, 20, 8, 13, 27],
        chartTime: ["10.00", "11.00", "12.00", "13.00", "14.00", "15.00"],
        Real: "123015",
        Projected: "123015",
        Yesterday: "123015",
        Weekly_Avg: "123015",
      },
    ],
  },
  {
    id: 3,
    title: "Beta -",
    details: [
      {
        id: 1,
        chartData: [13, 23, 20, 8, 13, 27],
        chartTime: ["10.00", "11.00", "12.00", "13.00", "14.00", "15.00"],
        Real: "123015",
        Projected: "123015",
        Yesterday: "123015",
        Weekly_Avg: "123015",
      },
    ],
  },
];

const SpotTrade = () => {
  const [openTab, setOpenTab] = useState(1);
  const [isClient, setIsClient] = useState(false);
  useEffect(() => {
    setIsClient(true);
  }, []);
  return (
    <div>
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
                        <DynamicApexBarChart
                          data={detail.chartData}
                          chartTime={detail.chartTime}
                        />
                      )}
                    </div>

                    <div className="grid grid-cols-4 gap-2">
                      <div className="flex flex-col text-justify font-lato text-sm text-ksl_light_gray">
                        <p>Real(mn)</p>
                        <p className="text-ksl_dark_red">{detail.Real}</p>
                      </div>
                      <div className="flex flex-col text-justify font-lato text-sm text-ksl_light_gray">
                        <p>Projected</p>
                        <p className="text-ksl_dark_red">{detail.Projected}</p>
                      </div>
                      <div className="flex flex-col text-justify font-lato text-sm text-ksl_light_gray">
                        <p>Yesterday</p>
                        <p className="text-ksl_dark_red">{detail.Yesterday}</p>
                      </div>
                      <div className="flex flex-col text-justify font-lato text-sm text-ksl_light_gray">
                        <p>Weekly Avg</p>
                        <p className="text-ksl_dark_red">{detail.Weekly_Avg}</p>
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
    </div>
  );
};

export default SpotTrade;
