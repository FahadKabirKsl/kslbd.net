import React from "react";
import dynamic from "next/dynamic";
// import ReactApexChart from "react-apexcharts";
const ReactApexChart = dynamic(() => import("react-apexcharts"), {
  ssr: false,
});
const ApexLineChartSmall = ({ data, categories, yaxisTitle }) => {
  const series = [
    {
      name: yaxisTitle,
      data: data,
    },
  ];
  const options = {
    chart: {
      width: "100%",
      height: "100%",
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
      colors: [
        ({ value }) => (value < 0 ? "#FF4560" : "#00E396"), // Red color for negative values, green color for positive values
      ],
    },
    title: {
      enabled: false,
    },
    // grid: {
    //   show: false,
    // },
    grid: {
      show: false,
      padding: {
        bottom: -16,
      },
    },
    xaxis: {
      categories: categories,
      labels: {
        show: false,
      },
      // axisBorder: {
      //   show: false,
      // },
      // axisTicks: {
      //   show: false,
      // },
      axisBorder: {
        show: false,
        offsetY: -16, // Move the x-axis border slightly upwards
      },
      axisTicks: {
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
    legend: {
      show: false,
    },
  };
  const ChartComponent = typeof window !== "undefined" ? ReactApexChart : null;
  return (
    <div id="chart">
      {/* <ReactApexChart
        options={options}
        series={series}
        type="line"
        height={80}
        width={80}
      /> */}
      {ChartComponent && (
        <ChartComponent
          options={options}
          series={series}
          type="line"
          height={80}
          width={80}
        />
      )}
    </div>
  );
};
export default ApexLineChartSmall;
