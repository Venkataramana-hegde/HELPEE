import React from "react";
import Chart from "react-apexcharts";

const DemoChart: React.FC = () => {
  const options = {
    chart: {
      id: "basic-bar",
    },
    xaxis: {
      categories: ["Jan", "Feb", "Mar", "Apr"],
    },
  };

  const series = [
    {
      name: "Sales",
      data: [30, 40, 50, 60],
    },
  ];
  return (
    <div>
      <h2>Basic Bar Chart</h2>
      <Chart options={options} series={series} type="bar" width="500" />
    </div>
  );
};

export default DemoChart;
