import React, { useState } from "react";
import Chart from "react-apexcharts";

const LineChart: React.FC = () => {
  const [options] = useState({
    chart: {
      id: "basic-line",
    },
    xaxis: {
      categories: [1991, 1992, 1993, 1994, 1995, 1996, 1997, 1998, 1999],
    },
  });

  const [series] = useState([
    {
      name: "series-1",
      data: [30, 40, 45, 50, 49, 60, 70, 91],
    },
  ]);

  return (
    <div className="app m-10">
      <div className="row">
        <div className="mixed-chart">
          <div className="flex justify-between">
            <div>
              <p className="text-2xl font-medium">Focusing</p>
              <p className="text-gray-500">Productivity analysis</p>
            </div>
            <span className="flex items-center justify-center px-4 bg-white rounded-3xl">
              <select
                name="Last month"
                id="cars"
                className="rounded-xl bg-white"
              >
                <option className="" value="Range Last day">
                  Range: Last day
                </option>
                <option value="Range Last month">Range: Last month</option>
                <option value="Range Last year">Range: Last year</option>
              </select>
            </span>
          </div>
          <Chart
            options={options}
            series={series}
            type="line"
            width="900"
            height="300"
          />
        </div>
      </div>
    </div>
  );
};

export default LineChart;
