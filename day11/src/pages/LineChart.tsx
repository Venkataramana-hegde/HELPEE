// import React, {Component} from "react";
// import Chart from "react-apexcharts";

// class LineChart extends Component {
//     constructor(props) {
//         super(props);

//         this.state = {
//             options: {
//                 chart: {
//                     id: "basic-bar"
//                 },
//                 xaxis: {
//                     categories: [2001, 2002, 2003, 2004, 2005]
//                 }
//             },
//             series: [
//                 {name:"series-1", data: [10, 20, 30, 40, 50]},

//             ]
//         }
//     }
//     render(){
//         return(
//             <div className="app">
//                 <div className="row">
//                     <div className="mixed-chart">
//                         <Chart type="line" width="500" options={this.state.options} series={this.state.series}/>
//                     </div>
//                 </div>
//             </div>
//         );
//     }
// }

// export default LineChart

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
    <div className="app">
      <div className="row">
        <div className="mixed-chart">
          <Chart options={options} series={series} type="line" width="500" />
        </div>
      </div>
    </div>
  );
};

export default LineChart;