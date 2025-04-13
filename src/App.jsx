import { useEffect, useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

import dayjs from 'dayjs'

function App() {
  const [count, setCount] = useState(0)
  const dateFormat = 'YYYY/MM/DD';
  console.log(dayjs('2015/01/01', dateFormat),"")

  const [data,setData]=useState([])

  const fetchData=async ()=>{
    try {
      const res=await fetch("https://0b5b-2409-40d0-134d-b270-433-1abd-7fef-798.ngrok-free.app")
      // const data=await res.json()
      console.log(res,"res")
    } catch (error) {
      console.log(error)
    }
  }
  
  useEffect(()=>{
    fetchData()
  },[])
  return (
    <>
      <div>
        <a href="https://vite.dev" target="_blank">
          <img src={viteLogo} className="logo" alt="Vite logo" />
        </a>
        <a href="https://react.dev" target="_blank">
          <img src={reactLogo} className="logo react" alt="React logo" />
        </a>
      </div>
      <h1>Vite + React</h1>
      <div className="card">
        <button onClick={() => setCount((count) => count + 1)}>
          count is {count}
        </button>
        <p>
          Edit <code>src/App.jsx</code> and save to test HMR
        </p>
      </div>
      <p className="read-the-docs">
        Click on the Vite and React logos to learn more
      </p>
    </>
  )
}

export default App
