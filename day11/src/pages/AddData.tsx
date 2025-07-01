import React, { useState } from "react";
import Chart from "react-apexcharts";
import { type ApexOptions } from "apexcharts";

const AddData: React.FC = () => {
  const [categories, setCategories] = useState<number[]>([1991, 1992, 1993, 1994, 1995]);
  const [series, setSeries] = useState([
    {
      name: "series-1",
      data: [30, 40, 45, 50, 49],
    },
  ]);

  const options: ApexOptions = {
    chart: {
      id: "basic-bar",
    },
    xaxis: {
      categories,
    },
  };

  const addData = () => {
    const nextYear = categories[categories.length - 1] + 1;
    const nextValue = Math.floor(Math.random() * 100); // random new value

    // Update x-axis categories
    setCategories([...categories, nextYear]);

    // Update series data
    const updatedSeries = [...series];
    updatedSeries[0].data = [...updatedSeries[0].data, nextValue];
    setSeries(updatedSeries);
  };

  return (
    <div className="app">
      <div className="row">
        <div className="mixed-chart">
          <Chart options={options} series={series} type="bar" width="500" />
        </div>
        <button onClick={addData} className="mt-4 p-2 bg-blue-500 text-white rounded">
          Add Random Data Point
        </button>
      </div>
    </div>
  );
};

export default AddData;
