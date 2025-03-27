import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Button from './components/Button'
import Editor from './components/Editor'
import Information from './components/Information'
import Encounter from './components/Encounter'

function App() {
  const [openEditor, setOpenEditor] = useState(false);
  const [count, setCount] = useState(0);

  function addEncounter() {
    setOpenEditor(true);
  }
  function closeEditor() {
    setOpenEditor(false);
  }

  function increment() {
    setCount(count + 1)
  }

  function decrement() {
    setCount(count - 1)
  }

  return (
    <div className="flex">
      <div className='p-2'>
        <h3>Location: Catacombs</h3>
        <h3>Monsters:</h3>
        <ul>
          <li>monster
            <span>{count}</span>
            <Button onClick={increment}>+</Button>
            <Button onClick={decrement}>-</Button>
          </li>
          <li>monster <span>2</span></li>
          <li>monster <span>2</span></li>
        </ul>
        <h3>Traps:</h3>
        <ul>
          <li>trap <span>2</span></li>
          <li>trap <span>2</span></li>
        </ul>
        <h3>Other information:</h3>
        <p>This encounter has lots of bones in it</p>
      </div>

      <main className="main-content border grid grid-cols-4 h-dvh w-dvw relative overflow-auto">
        <Encounter location={'Catacombs'}>
          <p>This encounter has lots of bones in it. And also lots of dead people</p>
        </Encounter>
        <Encounter location={'Some other place'}>
          <p>This encounter is cool because it's an encounter in which you encounter things</p>
        </Encounter>


        <button onClick={addEncounter} className='border bg-white bottom-10 right-10 hover:cursor-pointer absolute'>New Encounter</button>
        <Editor
          isOpen={openEditor}
          onClose={closeEditor}>
          <Information />
        </Editor>
      </main>


    </div>
  )
}

export default App
