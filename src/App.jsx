import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import Giovana from './assets/components/giovana/index.jsx'
import Welcome from './assets/components/welcome/index.jsx'
import Counter from './assets/components/counter/index.jsx'
import './App.css'

//function App() {
  //const [count, setCount] = useState(0)

  //return (
    //<>
      //<Giovana name="Giovana" age="18" />
      //<Giovana name="Ana" />
      //<Giovana name="Lucas" />
    //</>
  //)
//}

// Exemplo de componente App que utiliza o componente Welcome e Counter
function App() {
  return <div>
    <Welcome gender="homem" name="João" />
    <Welcome gender="mulher" name="Maria" />
    <Welcome name="Pedro" />  
    
     <h1>Contador:</h1>
      <Counter />
    </div>
}

export default App
