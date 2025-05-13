import { useState, useEffect, use } from 'react'
import './App.css'
import {Chart as ChartJS} from 'chart.js/auto'
import {Bar, Chart, Pie} from 'react-chartjs-2'
import youtubeData from './assets/data/data.json'
function App() {
  const [data, setData] = useState({})
  const graphVariables = {
    x: [],
    y: []
  }


  useEffect(() => {
    setData(youtubeData)
  }, [])

  data.map((country) => {
    graphVariables.x.push(country.flagCode)
    graphVariables.y.push(country.YouTubeUsers_TotalUsers_Num_2024Feb)
  })

  console.log(data)


  return (
    <div>
      <div>
        <Bar options={{}} 
              data={{
              labels: graphVariables.x,
              datasets: [{
                label: "Number of Youtube Users Feb. 2024",
                data: graphVariables.y
              }]
             }}
        ></Bar>
      </div>
    </div>
  )
}

export default App

