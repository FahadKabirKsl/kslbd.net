import React from "react";
// import ReactApexChart from "react-apexcharts";
import dynamic from "next/dynamic";
const ApexChart = dynamic(() => import("react-apexcharts"), { ssr: false });

const ApexBlockLineChart = ({ data2 }) => {
  const series = [
    {
      data: data2,
    },
  ];

  const options = {
    chart: {
      height: 350,
      type: "bar",
      toolbar: {
        show: false,
      },
      zoom: {
        enabled: false,
      },
    },
    plotOptions: {
      bar: {
        columnWidth: "45%",
        distributed: false,
      },
    },
    dataLabels: {
      enabled: false,
      style: {
        colors: ["#ff0000", "#00ff00", "#0000ff"],
      },
    },
    xaxis: {
      labels: {
        show: false,
      },
      axisBorder: {
        show: false,
      },
    },
    yaxis: {
      labels: {
        show: false,
      },
      axisBorder: {
        show: false,
      },
    },
    grid: {
      show: false, // Hide grid lines
    },
  };

  return (
    <div id="chart">
      <ApexChart
        options={options}
        series={series}
        type="bar"
        height={80}
        width={80}
      />
    </div>
  );
};

export default ApexBlockLineChart;
