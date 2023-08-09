import React from "react";
import DataTable from "react-data-table-component";
const data = [
  { instrument: "ONGC", bid: 10, lower: 100, upper: 20 },
  { instrument: "HeroMotocorp", bid: 15, lower: 200, upper: 20 },
];
function CircuitBreaker() {
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
      name: "Breaker%",
      selector: (row) => row.bid,
    },
    {
      name: "Lower",
      selector: (row) => row.lower,
    },
    {
      name: "Upper",
      selector: (row) => row.upper,
    },
  ];
  return (
    <>
      <div className="bg-white p-6 xsm:px-2 sm:px-2 rounded-3xl w-full">
        <div className=" bg-ksl_dark_red text-white text-center rounded-3xl p-3 text-sm font-mulish font-medium">
          <p>Circuit Breaker</p>
        </div>
        <DataTable columns={columns} data={data} />
      </div>
    </>
  );
}

export default CircuitBreaker;
