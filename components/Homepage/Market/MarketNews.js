import React from "react";
import Link from "next/link";

function MarketNews() {
  return (
    <>
      <div className="p-6 xsm:px-2 sm:px-2 rounded-3xl bg-white w-full">
        <div className=" bg-ksl_dark_red text-white text-center rounded-3xl p-3 text-sm font-mulish font-medium">
          <p>Market News</p>
        </div>
        <div className="flex flex-col pt-2">
          <p>Feb 22, 2022 15:29</p>
          <p>Containerway International fixes record date for stock split</p>
          <div className="flex justify-between xsm:flex-col sm:flex-col ">
            <p>
              Containerway International has fixed 05 March 2022 as record date
            </p>
            <Link href="/market" className="text-ksl_dark_red">
              See more
            </Link>
          </div>
        </div>
      </div>
    </>
  );
}

export default MarketNews;
