import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import CounterButton from './components/CounterButton'

function App() {
  const [count, setCount] = useState(0)

  return (
    <div className="flex">
      <div className="side-bar border flex flex-col">
        <h2>Enter Encounter Info</h2>
        <label>Location:</label>
        <input type="text" className="border" />

        <label>Monsters:</label>
        <input type="text" className="border" />
        <button>add</button>
        <ul>
          <li>goblin
            <span>2</span>
            <CounterButton />
            <CounterButton />
          </li>
          <li>another monster
            <span>1</span>
            <CounterButton />
            <CounterButton />
          </li>
        </ul>

        <label>Traps:</label>
        <input type="text" className="border" />

        <label>Other information:</label>
        <textarea className="border"></textarea>

        <button>Add encounter</button>
      </div>

      <main className="main-content border grid grid-cols-4 h-dvh w-dvw">
        <div className="card">
          <p className="card-header">Catacombs</p>
          <div className="card-info">
          </div>
        </div>
      </main>


    </div>
  )
}

export default App
