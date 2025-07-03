import { useState } from "react";
import Chart from "react-apexcharts";
import { type ApexOptions } from "apexcharts";
import { useTodoStore } from "../zustand/store";

const Graph: React.FC = () => {
   const tasks = useTodoStore.getState().tasks.length;
   const completed = useTodoStore.getState().completed.length;
  const [series] = useState<number[]>([tasks, completed]);
  const [options] = useState<ApexOptions>({
    labels: ['Pending', 'Completed'],
  });

  return (
    <div className="w-fit m-auto">
    <div className="donut border-none shadow-sm rounded-md">
        <h1 className=" flex items-center justify-center text-pink-800  m-4">Task status</h1>
      <Chart  options={options} series={series} type="donut" width="300"/>
    </div>
    </div>
  );
};

export default Graph;
