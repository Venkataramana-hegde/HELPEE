// import React, { Component } from 'react';
// import Chart from 'react-apexcharts'

// class Donut extends Component {

//   constructor(props) {
//     super(props);

//     this.state = {
//       options: {},
//       series: [44, 55, 41, 17, 15],
//       labels: ['A', 'B', 'C', 'D', 'E']
//     }
//   }

//   render() {

//     return (
//       <div className="donut">
//         <Chart options={this.state.options} series={this.state.series} type="donut" width="380" />
//       </div>
//     );
//   }
// }
// import React, { Component } from 'react';
// import Chart from 'react-apexcharts'

// class Donut extends Component {

//   constructor(props) {
//     super(props);

//     this.state = {
//       options: {},
//       series: [44, 55, 41, 17, 15],
//       labels: ['A', 'B', 'C', 'D', 'E']
//     }
//   }

//   render() {

//     return (
//       <div className="donut">
//         <Chart options={this.state.options} series={this.state.series} type="donut" width="380" />
//       </div>
//     );
//   }
// }

// export default Donut;
// export default Donut;

// import React, { useState } from "react";
// import Chart from "react-apexcharts";
// import { type ApexOptions } from "apexcharts";

// const DonutChart: React.FC = () => {
//   const [series] = useState<number[]>([44, 55, 41, 17, 15]);
//   const [options] = useState<ApexOptions>({
//     labels: ['A', 'B', 'C', 'D', 'E'],
//   });

//   return (
//     <div className="donut">
//       <Chart options={options} series={series} type="donut" width="380" />
//     </div>
//   );
// };

// export default DonutChart;
import React, { useState } from "react";
import Chart from "react-apexcharts";
import { type ApexOptions } from "apexcharts";

const DonutChart: React.FC = () => {
  const [series, setSeries] = useState<number[]>([44, 55, 41, 17, 15]);
  const [labels, setLabels] = useState<string[]>(["A", "B", "C", "D", "E"]);

  const options: ApexOptions = {
    labels: labels,
  };

  const addData = () => {
    const newValue = Math.floor(Math.random() * 100);
    const newLabel = `Label ${series.length + 1}`;

    setSeries((prev) => [...prev, newValue]);
    setLabels((prev) => [...prev, newLabel]);
  };

  return (
    <div className="m-10">
      <Chart
        key={series.length} 
        series={series}
        options={options}
        type="donut"
        width={380}
      />
      <button
        onClick={addData}
        className="mt-4 px-4 py-2 bg-blue-500 text-white rounded hover:bg-blue-600"
      >
        Add data
      </button>
    </div>
  );
};

export default DonutChart;
