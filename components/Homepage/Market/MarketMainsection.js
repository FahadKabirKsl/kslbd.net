import React from "react";
import MarketIndex from "./MarketIndex";
import MarketCalculator from "./MarketCalculator";
import WeekRange from "./WeekRange";
import Trade from "./Trade";
import MarketNews from "./MarketNews";
import CircuitBlock from "./CircuitBlock";
import TechnicakIndecator1 from "./TechnicakIndecator1";
import TechnicakIndecator2 from "./TechnicalIndicator2";
import SpotTrade from "./SpotTrade";
import IndexContibute from "./IndexContibute";
import CircuitBreaker from "./CircuitBreaker";
import Value from "./Value";
import GainerLooser from "./GainerLooser";

function MarketMainsection() {
  return (
    <>
      <div className="bg-ksl_light_red">
        <MarketIndex />
        <div className="grid grid-cols-3 gap-4 xsm:grid-cols-1 xsm:py-2 sm:pt-0 sm:grid-cols-1 sm:py-2 xsm:pt-0 px-80 xsm:px-5 sm:px-5 md:px-10 mdl:px-10 xl:px-10  pt-10 pb-2">
          <MarketCalculator />
          <WeekRange />
          <Trade />
        </div>
        <div className="grid grid-cols-3 gap-4 xsm:grid-cols-1 xsm:py-2 sm:pt-0 sm:grid-cols-1 sm:py-2 xsm:pt-0 px-80 xsm:px-5 sm:px-5 md:px-10 mdl:px-10 xl:px-10  py-2">
          <IndexContibute />
          <SpotTrade />
          <CircuitBreaker />
        </div>
        <div className="grid grid-cols-2 gap-4 xsm:grid-cols-1 xsm:py-2 sm:pt-0 sm:grid-cols-1 sm:py-2 xsm:pt-0 px-80 xsm:px-5 sm:px-5 md:px-10 mdl:px-10 xl:px-10  py-2">
          <Value />
          <GainerLooser />
        </div>
        <div className="grid grid-cols-2 gap-4 xsm:grid-cols-1 xsm:py-2 sm:pt-0 sm:grid-cols-1 sm:py-2 xsm:pt-0 px-80 xsm:px-5 sm:px-5 md:px-10 mdl:px-10 xl:px-10  py-2">
          <MarketNews />
          <CircuitBlock />
        </div>
        <div className="grid grid-cols-2 gap-4 xsm:grid-cols-1 xsm:py-2 sm:pt-0 sm:grid-cols-1 sm:py-2 xsm:pt-0 px-80 xsm:px-5 sm:px-5 md:px-10 mdl:px-10 xl:px-10  pt-2 pb-10">
          <TechnicakIndecator1 />
          <TechnicakIndecator2 />
        </div>
      </div>
    </>
  );
}

export default MarketMainsection;
