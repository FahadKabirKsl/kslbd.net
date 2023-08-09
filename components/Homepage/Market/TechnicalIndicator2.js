import React, { useState } from "react";
import DataTable from "react-data-table-component";

function TechnicakIndecator2() {
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
      name: "LTP",
      selector: (row) => row.bid,
    },
    {
      name: "RSI",
      selector: (row) => row.qty,
    },
  ];

  const selectedBlock = circuitBlocks.find((block) => block.id === openTab);
  const data = selectedBlock ? selectedBlock.data : [];

  return (
    <>
      <div className="p-6 xsm:px-2 sm:px-2 rounded-3xl bg-white w-full">
        <div className="flex justify-between xsm:flex-row w-full overflow-x-scroll">
          <div className="flex flex-col list-none overflow-x-scroll scrollbar-hide w-2/5 xsm:w-full sm:w-full">
            <p className="text-sm ">Technical Indicator Name</p>
            {circuitBlocks.map((block) => (
              <div
                key={block.id}
                className="font-mulish text-sm font-medium text-center my-auto w-full "
              >
                <a
                  className={
                    "p-2 rounded-l-lg block w-full" +
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
          <div className="w-full xsm:w-3/5 px-2">
            <DataTable columns={columns} data={data} />
          </div>
        </div>
      </div>
    </>
  );
}


export default TechnicakIndecator2;
