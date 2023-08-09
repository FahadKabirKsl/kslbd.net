import React, { useState } from "react";
import DataTable from "react-data-table-component";
import ApexLineChartSmall from "./Chart/ApaxLineChartSmall";
import ApexBlockLineChart from "./Chart/ApaxBlockLineChart";

function GainerLooser() {
  const [openTab, setOpenTab] = useState(1); // Default open tab is 1
  const circuitBlocks = [
    {
      id: 1,
      title: "Top Gainer",
      data: [
        {
          instrument: "ONGC",
          ltp: "162.00",
          prtg: "-162.00",
          value: "-162.00",
          // bid: 10,
          // qty: 100,
          chartData: [20, 30, 45, 60, 75, 90, 80, 70, 60, 50],
          chartData2: [20, 30, 45, 60, 75, 90, 80, 70, 60, 50],
        },
        {
          instrument: "Instrument 2",
          ltp: "162.00",
          prtg: "-162.00",
          value: "-162.00",
          // bid: 15,
          // qty: 200,
          chartData: [20, 30, 45, 60, 75, 90, 80, 70, 60, 50],
          chartData2: [20, 30, 45, 60, 75, 90, 80, 70, 60, 50],
        },
      ],
    },
    {
      id: 2,
      title: "Top Looser",
      data: [
        {
          instrument: "Instrument A",
          ltp: "162.00",
          prtg: "-162.00",
          value: "-162.00",
          // bid: 5,
          // qty: 50,
          chartData: [20, 30, 45, 60, 75, 90, 80, 70, 60, 50],
          chartData2: [20, 30, 45, 60, 75, 90, 80, 70, 60, 50],
        },
        {
          instrument: "Instrument B",
          ltp: "162.00",
          prtg: "-162.00",
          value: "-162.00",
          // bid: 8,
          // qty: 80,
          chartData: [20, 30, 45, 60, 75, 90, 80, 70, 60, 50],
          chartData2: [20, 30, 45, 60, 75, 90, 80, 70, 60, 50],
        },
      ],
    },
    {
      id: 3,
      title: "Top Attribute",
      data: [
        {
          instrument: "Instrument A",
          ltp: "162.00",
          prtg: "-162.00",
          value: "-162.00",
          // bid: 5,
          // qty: 50,
          chartData: [20, 30, 45, 60, 75, 90, 80, 70, 60, 50],
          chartData2: [20, 30, 45, 60, 75, 90, 80, 70, 60, 50],
        },
        {
          instrument: "Instrument B",
          ltp: "162.00",
          prtg: "-162.00",
          value: "-162.00",
          // bid: 8,
          // qty: 80,
          chartData: [20, 30, 45, 60, 75, 90, 80, 70, 60, 50],
          chartData2: [20, 30, 45, 60, 75, 90, 80, 70, 60, 50],
        },
      ],
    },
  ];

  const columns = [
    {
      name: "Instrument",
      selector: (row, index) => (
        <span style={{ color: index === 0 ? "red" : "green" }}>
          {row.instrument}
        </span>
      ),
    },
    {
      name: "LTP",
      selector: (row) => row.ltp,
    },
    {
      name: "%",
      selector: (row) => row.prtg,
    },
    {
      name: "Value",
      selector: (row) => row.value,
    },
    {
      name: "Price",
      cell: (row) => <ApexLineChartSmall data={row.chartData} />,
    },
    {
      name: "Volume",
      cell: (row) => <ApexBlockLineChart data2={row.chartData2} />,
    },
  ];

  const selectedBlock = circuitBlocks.find((block) => block.id === openTab);
  const data = selectedBlock ? selectedBlock.data : [];
  console.log(data);

  return (
    <>
      <div className="p-6 xsm:px-2 sm:px-2 rounded-3xl bg-white w-full">
        <div className="flex justify-between list-none overflow-x-scroll scrollbar-hide w-full">
          {circuitBlocks.map((block) => (
            <div
              key={block.id}
              className="text-center font-mulish text-sm font-medium my-auto w-full min-w-max mx-1"
            >
              <a
                className={
                  "p-3 rounded-lg block min-w-full" +
                  (openTab === block.id
                    ? "bg-white"
                    : " bg-ksl_light_red hover:bg-ksl_dark_red hover:text-white duration-700")
                }
                onClick={() => setOpenTab(block.id)}
                href={`#link${block.id}`}
                role="tablist"
              >
                {block.title}
              </a>
            </div>
          ))}
        </div>
        <DataTable columns={columns} data={data} />
      </div>
    </>
  );
}

export default GainerLooser