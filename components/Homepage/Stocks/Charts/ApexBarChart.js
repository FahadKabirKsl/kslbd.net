import React, { useState } from "react";
import dynamic from "next/dynamic";

const ApexChart = dynamic(() => import("react-apexcharts"), { ssr: false });

const ApexBarChart = ({ bardata }) => {
  const [chartType, setChartType] = useState(bardata.chartType || "yearly");

  const series = [
    {
      name: chartType === "yearly" ? "Yearly Inflation" : "Quarterly Inflation",
      data: chartType === "yearly" ? bardata.yearlyData : bardata.quarterlyData,
    },
  ];

  const options = {
    chart: {
      height: 350,
      type: "bar",
      toolbar: {
        show: false, // Hide the chart toolbar
      },
    },
    plotOptions: {
      bar: {
        dataLabels: {
          position: "top",
        },
        colors: {
          ranges: [
            {
              from: -1000,
              to: 0,
              color: "#D9171A", // Set bar color to red
            },
          ],
        },
      },
    },
    dataLabels: {
      enabled: true,
      formatter: function (val) {
        return val.toFixed(1); // Format the label to display one decimal place
      },
      offsetY: -20,
      style: {
        fontSize: "12px",
        colors: ["#304758"],
      },
    },
    xaxis: {
      categories:
        chartType === "yearly"
          ? [
              "2021",
              "2020",
              "2019",
              "2018",
              "2017",
              "2016",
              "2015",
              "2014",
              "2013",
              "2012",
              "2011",
              "2010",
            ]
          : ["Q1", "Q2", "Q3", "Q4"], // Use quarterly categories when selected
      position: "bottom",
      axisBorder: {
        show: false,
      },
      axisTicks: {
        show: false,
      },
    },
    grid: {
      show: false,
    },
    yaxis: {
      axisBorder: {
        show: false,
      },
      axisTicks: {
        show: false,
      },
      labels: {
        show: false,
        formatter: function (val) {
          return val.toFixed(1); // Format the label to display one decimal place
        },
      },
    },
  };

  const handleYearlyChartClick = () => {
    setChartType("yearly");
  };

  const handleQuarterlyChartClick = () => {
    setChartType("quarterly");
  };

  return (
    <div id="chart">
      <ApexChart options={options} series={series} type="bar" height={200} />
      <div>
        <button
          onClick={handleYearlyChartClick}
          className="text-sm text-ksl_light_black font-lato bg-ksl_light_red px-6 py-2 rounded-xl"
        >
          Yearly
        </button>
        <button
          onClick={handleQuarterlyChartClick}
          className="text-sm text-ksl_light_black font-lato bg-ksl_light_red px-6 py-2 rounded-xl ml-5"
        >
          Quarterly
        </button>
      </div>
    </div>
  );
};

export default ApexBarChart;
