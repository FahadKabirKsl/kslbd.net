import React, { useState } from "react";
import DataTable from "react-data-table-component";

function CircuitBlock() {
  const [openTab, setOpenTab] = useState(1); // Default open tab is 1
  const circuitBlocks = [
    {
      id: 1,
      title: "Circuit Breaker",
      data: [
        { instrument: "Instrument 1", bid: 10, qty: 100 },
        { instrument: "Instrument 2", bid: 15, qty: 200 },
        // Add more data for Circuit Breaker
      ],
    },
    {
      id: 2,
      title: "Block Trader",
      data: [
        { instrument: "Instrument A", bid: 5, qty: 50 },
        { instrument: "Instrument B", bid: 8, qty: 80 },
        // Add more data for Block Trader
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
      name: "BID",
      selector: (row) => row.bid,
    },
    {
      name: "QTY",
      selector: (row) => row.qty,
    },
  ];

  const selectedBlock = circuitBlocks.find((block) => block.id === openTab);
  const data = selectedBlock ? selectedBlock.data : [];

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

export default CircuitBlock;
