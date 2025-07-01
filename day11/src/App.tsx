import AddData from './pages/AddData'
import Donut from './pages/DonutChart'
import FirstChart from './pages/FirstChart'
import LineChart from './pages/LineChart'

const App = () => {
  return (
    <div className='grid place-content-center'>
      <h1>Bar chart</h1>
      <FirstChart />
      <h1>Line chart</h1>
      <LineChart />
      <h1>Donut chart</h1>
      <Donut />
      {/* <h1>Add data to chart</h1>
      <AddData /> */}
    </div>
  )
}

export default App