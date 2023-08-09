import React, { useState } from "react";
import { BsArrowDownCircle } from "react-icons/bs";

function WeekRange() {
  const [selectedWeek, setSelectedWeek] = useState(1);
  const [totalTrade1, setTotalTrade1] = useState(0);
  const [totalTrade2, setTotalTrade2] = useState(0);
  const [totalTrade3, setTotalTrade3] = useState(0);
  const [totalSell, setTotalSell] = useState(0);
  const [movement, setMovement] = useState(0);

  const tradeData = [
    [1000, 2000, 3000, 4000, 5000, 6000], // tradeData1
    [500, 20, 30, 40, 50, 60], // tradeData2
    [1, 2, 3, 4, 5, 6000], // tradeData3
  ];

  const handleWeekChange = (event) => {
    const selectedWeek = parseInt(event.target.value);
    setSelectedWeek(selectedWeek);
    calculateTotals(selectedWeek);
  };

  const calculateTotalForWeek = (week, data) => {
    return data.slice(0, week).reduce((acc, curr) => acc + curr, 0);
  };

  const calculateTotals = (selectedWeek) => {
    let tradeTotal1 = calculateTotalForWeek(selectedWeek, tradeData[0]);
    let tradeTotal2 = calculateTotalForWeek(selectedWeek, tradeData[1]);
    let tradeTotal3 = calculateTotalForWeek(selectedWeek, tradeData[2]);
    let sellTotal = calculateTotalForWeek(
      selectedWeek,
      [400, 500, 600, 700, 800, 900]
    );
    let movement = calculateTotalForWeek(
      selectedWeek,
      [403, 530, 630, 730, 830, 930]
    );

    setTotalTrade1(tradeTotal1);
    setTotalTrade2(tradeTotal2);
    setTotalTrade3(tradeTotal3);
    setTotalSell(sellTotal);
    setMovement(movement);
  };

  return (
    <>
      <div className="p-6 xsm:px-2 sm:px-2 rounded-3xl bg-white w-full">
        <div className="flex justify-between">
          <div className="flex flex-col font-mulish font-semibold text-ksl_dark_gray">
            <p className="text-3xl mx-auto">${totalSell}</p>
            <p className="text-ksl_light_green_200 text-base font-normal pt-2">
              + 1.89 <span>(+ 4.59%)</span>
            </p>
          </div>
          <div className="flex flex-col font-mulish font-semibold text-ksl_dark_red">
            <div className="flex flex-row">
              <BsArrowDownCircle className="bg-ksl_light_red my-auto text-lg" />
              <p className="text-3xl pl-2">${movement}</p>
            </div>
            <p className="text-ksl_light_gray text-base font-normal mx-auto pt-2">
              Movement
            </p>
          </div>
        </div>
        <div className="flex justify-between py-10">
          <div className="flex flex-col font-lato text-center">
            <p className="text-sm text-ksl_light_gray font-normal">
              {totalTrade1}
            </p>
            <p className="text-sm text-ksl_dark_red font-normal">Total Trade</p>
          </div>
          <div className="flex flex-col font-lato text-center">
            <p className="text-sm text-ksl_light_gray font-normal">
              {totalTrade2}
            </p>
            <p className="text-sm text-ksl_dark_red font-normal">Total Trade</p>
          </div>
          <div className="flex flex-col font-lato text-center">
            <p className="text-sm text-ksl_light_gray font-normal">
              {totalTrade3}
            </p>
            <p className="text-sm text-ksl_dark_red font-normal">Total Trade</p>
          </div>
        </div>
        <div className="w-full">
          <div className="w-full">
            <input
              type="range"
              min={1}
              max={52}
              value={selectedWeek}
              onChange={handleWeekChange}
              className="w-full border-0"
            />
            <p className="text-center text-base text-ksl_light_gray font-lato">
              {selectedWeek} Week range
            </p>
          </div>
        </div>
        <div className="pt-40">
          <div className="flex justify-between  w-full">
            <div className="flex flex-col text-center">
              <p className="text-text_18 text-ksl_dark_red font-lato font-medium">
                -43.21%
              </p>
              <p className="text-sm text-ksl_light_gray font-normal">
                6 Month Return
              </p>
            </div>
            <div className="flex flex-col text-center">
              <p className="text-text_18 text-ksl_light_green_200 font-lato font-medium">
                +43.21%
              </p>
              <p className="text-sm text-ksl_light_gray font-normal">
                1 Month Return
              </p>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default WeekRange;
