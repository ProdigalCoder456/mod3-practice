import { useState, useEffect } from 'react'
import './App.css'
import {chart as chartjs} from 'chart.js/auto'
import {bar, chart, pie} from 'react-chartjs-2'
import './assets/data/data.json'

function App() {
  const [count, setCount] = useState(0)

function getData(){
const request = await fetch("/assets/data/data.json")
const youtubeData = await request.json()
console.log(youtubeData) 
}

  return (
    <div>
       <div>
      <h1>Whats Good Planetary People</h1>
    </div>
   </div> 
  )
}

export default App
