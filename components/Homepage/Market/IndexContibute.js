import React, { useState } from "react";
import Image from "next/image";
import facebook from "../../../public/assets/Market/facebook.png";
import netfix from "../../../public/assets/Market/netfix.png";
import ford from "../../../public/assets/Market/ford.png";
import apple from "../../../public/assets/Market/apple.png";
import bak from "../../../public/assets/Market/bak.png";
import ApexLineChartSmall from "./Chart/ApaxLineChartSmall";
const AllTrade = [
  {
    id: 1,
    title: "Index Contribute +",
    details: [
      {
        id: 1,
        image: facebook,
        company: "Facebook",
        company_full: "Facebook Inc.",
        chartData: [10, 41, 35, 5, 0, 9, 20, 13, 14, 100],
        price: "$123",
        percentage: "+1.05%",
      },
      {
        id: 2,
        image: facebook,
        company: "Facebook",
        company_full: "Facebook Inc.",
        chartData: [10, 41, 35, 5, 0, 9, 20, 13, 14, 100],
        price: "$123",
        percentage: "+1.05%",
      },
    ],
  },
  {
    id: 2,
    title: "Index Contribute -",
    details: [
      {
        id: 1,
        image: netfix,
        company: "Netflix",
        company_full: "Netflix Inc.",
        chartData: [20, 30, 45, 60, 75, 90, 80, 70, 60, 50],
        price: "$145",
        percentage: "-1.9%",
      },
    ],
  },
];

function IndexContibute() {
  const [openTab, setOpenTab] = useState(2);

  return (
    <>
      <div className="p-6 xsm:px-2 sm:px-2 rounded-3xl bg-white w-full">
        <div className="flex justify-between list-none overflow-x-scroll scrollbar-hide w-full">
          {AllTrade.map((tra) => (
            <div
              key={tra.id}
              className="text-center font-mulish text-sm font-medium my-auto w-full min-w-max mx-1"
            >
              <a
                className={
                  "p-3 rounded-lg block min-w-full" +
                  (openTab === tra.id
                    ? "bg-white"
                    : " bg-ksl_light_red hover:bg-ksl_dark_red hover:text-white duration-700")
                }
                onClick={(e) => {
                  e.preventDefault();
                  setOpenTab(tra.id);
                }}
                href={`#link${tra.id}`}
                role="tablist"
              >
                {tra.title}
              </a>
            </div>
          ))}
        </div>
        <div className="flex flex-col ">
          {AllTrade.map((tra) => (
            <div
              className={openTab === tra.id ? "block" : "hidden"}
              id={`link${tra.id}`}
              key={tra.id}
            >
              {Array.isArray(tra.details) ? (
                <div className="w-full">
                  {tra.details.map((detail) => (
                    <div
                      key={detail.id}
                      className="flex justify-between w-full"
                    >
                      <div className="flex flex-row my-auto">
                        <div className=" my-auto">
                          <Image src={detail.image} className="w-auto" />
                        </div>
                        <div className="flex flex-col pl-2">
                          <p className="font-mulish font-semibold text-ksl_dark_gray">
                            {detail.company}
                          </p>
                          <p className="font-mulish font-medium text-ksl_light_gray text-sm">
                            {detail.company_full}
                          </p>
                        </div>
                      </div>

                      <div>
                        <ApexLineChartSmall data={detail.chartData} />
                      </div>
                      <div className="flex flex-col my-auto text-center">
                        <p className="font-mulish font-semibold text-ksl_dark_gray ">
                          {detail.price}
                        </p>
                        <p className="font-mulish font-medium text-ksl_light_gray text-sm">
                          {detail.percentage}
                        </p>
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
    </>
  );
}

export default IndexContibute;
