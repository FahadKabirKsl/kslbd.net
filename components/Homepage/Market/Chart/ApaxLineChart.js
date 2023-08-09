import React, { useEffect, useRef } from "react";
// import ReactApexChart from "react-apexcharts";
import dynamic from "next/dynamic";
const ApexChart = dynamic(() => import("react-apexcharts"), { ssr: false });
const ApexLineChart = ({ data, chartTime, yaxisTitle }) => {
  const series = [
    {
      name: yaxisTitle,
      data: data,
    },
  ];
  const options = {
    chart: {
      height: 250,
      width: 250,
      type: "line",
      toolbar: {
        show: false,
      },
      zoom: {
        enabled: false,
      },
    },
    dataLabels: {
      enabled: false,
    },
    stroke: {
      curve: "smooth",
      width: 2,
    },
    title: {
      enabled: false,
    },
    grid: {
      show: false,
    },
    xaxis: {
      categories: chartTime,
      axisBorder: {
        show: false,
      },
    },
    yaxis: {
      title: {
        text: yaxisTitle,
      },
      axisBorder: {
        show: false,
      },
    },
    legend: {
      show: false,
    },
  };
  return (
    <div id="chart">
      <ApexChart
        options={options}
        series={series}
        type="line"
        height={250}
        weidth={250}
      />
    </div>
  );
};
export default ApexLineChart;
