import React from "react";
import dynamic from "next/dynamic";
import "tailwindcss/tailwind.css";

const ApexChart = dynamic(() => import("react-apexcharts"), { ssr: false });

const ApexDounutchart = ({ votes }) => {
  const totalVotes = votes.reduce((total, vote) => total + vote, 0);
  const percentages = votes.map((vote) =>
    ((vote / totalVotes) * 100).toFixed(2)
  );
  const averagePercentage = (
    percentages.reduce(
      (total, percentage) => total + parseFloat(percentage),
      0
    ) / percentages.length
  ).toFixed(2);
  const chartOptions = {
    chart: {
      width: 300, 
      height: 300, 
      type: "donut",
    },
    labels: ["Hold", "Buy", "Sell"],
    colors: ["#2F61E1", "#33D49D", "#D9171A"],

    dataLabels: {
      enabled: true,
      style: {
        fontSize: "12px",
        fontFamily: "Arial, sans-serif",
        fontWeight: 300,
        width: "500px",
        colors: ["#fff", "#fff", "#fff"], 
      },

      formatter: function (val, { seriesIndex }) {
        return chartOptions.labels[seriesIndex];
      },
    },
    legend: {
      show: false,
    },
    plotOptions: {
      pie: {
        donut: {
          labels: {
            show: true,
            total: {
              show: false,
              
              fontSize: "20px",
              fontFamily: "Arial, sans-serif",
              fontWeight: 500,
              color: "#000",

              formatter: function () {
                return "";
              },
            },
          },
        },
      },
    },
  };

  return (
    <>
      <ApexChart
        options={chartOptions}
        series={votes}
        type="donut"
        height={250}
      />
      <div className="text-[31.25px] mt-4 font-semibold font-lato text-ksl_light_black">
        {averagePercentage}%
      </div>
    </>
  );
};

export default ApexDounutchart;
