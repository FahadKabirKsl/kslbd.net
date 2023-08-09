import React, { useEffect, useRef } from "react";
// import ReactApexChart from "react-apexcharts";
import dynamic from "next/dynamic";
const ApexChart = dynamic(() => import("react-apexcharts"), {
  ssr: false,
});

const ApaxBarChart = ({ data, chartTime }) => {
  // const chartRef = useRef(null);

  const series = [
    {
      data: data,
    },
  ];
  const options = {
    chart: {
      type: "bar",
      height: 250,
      stacked: true,
      toolbar: {
        show: false,
      },
      zoom: {
        enabled: true,
      },
    },
    dataLabels: {
      enabled: false,
    },
    title: {
      enabled: false,
    },
    grid: {
      show: false,
    },
    // responsive: [
    //   {
    //     breakpoint: 480,
    //     options: {
    //       legend: {
    //         position: "bottom",
    //         offsetX: -10,
    //         offsetY: 0,
    //       },
    //     },
    //   },
    // ],
    plotOptions: {
      bar: {
        horizontal: true, // Set horizontal to true for row-wise chart
        borderRadius: 10,
        dataLabels: {
          total: {
            enabled: true,
            style: {
              fontSize: "13px",
              fontWeight: 900,
            },
          },
        },
      },
    },
    yaxis: {
      labels: {
        maxWidth: 400,
      },
      axisBorder: {
        show: false,
      },
    },
    xaxis: {
      // type: "datetime",
      categories: chartTime,
      axisBorder: {
        show: false,
      },
    },
    legend: {
      position: "bottom",
      offsetY: 40,
    },
    fill: {
      opacity: 1,
    },
  };

  return (
    <div id="chart">
      <ApexChart options={options} series={series} type="bar" height={250} />
    </div>
  );
};

export default ApaxBarChart;
