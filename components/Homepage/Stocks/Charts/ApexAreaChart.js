import React from "react";
import dynamic from "next/dynamic";
const ReactApexChart = dynamic(() => import("react-apexcharts"), {
  ssr: false,
});
function ApexAreaChart({ data }) {
  if (!data || data.length === 0) {
    return <div>No data available</div>;
  }

  const hourValues = [...new Set(data.map((item) => item.time.split(":")[0]))];
  const options = {
    chart: {
      type: "area",
      height: 350,
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
      colors: ["#FFCB59"],
    },
    title: {
      enabled: false,
    },
    grid: {
      show: false,
    },

    xaxis: {
      type: "category",
      // categories: data.map((item) => item.time),
      categories: hourValues,
    },
    yaxis: {
      opposite: false,
    },
    legend: {
      show: false,
    },
    fill: {
      type: "gradient",
      gradient: {
        type: "vertical",
        shadeIntensity: 1,
        opacityFrom: 1,
        opacityTo: 0.9,
        stops: [0, 100],
        colorStops: [
          {
            offset: 0,
            color: "#FFCB59", // Start color
            opacity: 1,
          },
          {
            offset: 100,
            color: "#FFFFFF", // End color
            opacity: 1,
          },
        ],
      },
    },
  };

  const series = [
    {
      name: "Price",
      data: data.map((item) => ({
        x: item.time,
        y: item.price,
      })),
    },
  ];

  const ChartComponent = typeof window !== "undefined" ? ReactApexChart : null;
  return (
    <>
      <div id="chart">
        {ChartComponent && (
          <ChartComponent
            options={options}
            series={series}
            type="area"
            height={350}
          />
        )}
      </div>
    </>
  );
}

export default ApexAreaChart;
