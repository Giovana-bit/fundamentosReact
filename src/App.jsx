import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import Giovana from './assets/components/giovana/index.jsx'
import './App.css'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <Giovana name="Giovana" />
      <Giovana name="Ana" />
      <Giovana name="Lucas" />
    </>
  )
}

export default App
