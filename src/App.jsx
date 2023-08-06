import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Header from './component/Header/Header'
import Body from './component/body/body'

function App() {
  const [watchTime,setWatchTime] = useState("");
  const handleButton = (time) =>{
    const previousTime = JSON.parse(localStorage.getItem("watchTime"))
    if(previousTime){
      const sum = previousTime + time;
      localStorage.setItem("watchTime",sum)
      setWatchTime(sum)
    }
    else{
      localStorage.setItem("watchTime",time)
      setWatchTime(time)
    }
  }

  return (
    <>
    <Header></Header>
    <Body 
    handleButton={handleButton}
    watchTime={watchTime}
    ></Body>
    </>
  )
}

export default App
