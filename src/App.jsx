import { useState } from 'react'
import Fruits from './components/Druits'
import Employees from './components/Employees'
import Hello from './components/Hello'

function App() {
  const [count, setCount] = useState(0)
  const [count1, setCount1] = useState(0)

  const person = {
    name: 'Rob',
    message: 'Hi there',
    emoji: '👋',
    seatNumbers: [1, 4, 7],
  }

  return (
    <div className="App">
      <hr />
      <p>increment</p>
      <button onClick={() => setCount1(count => count - 1)}>-</button>
      <button onClick={() => setCount1(count => count + 1)}>+</button>
      <p>count is {count1}</p>

      <p>test value</p>
      <button onClick={() => setCount(count => count - count1)}>-</button>
      <button onClick={() => setCount(count => count + count1)}>+</button>
      <p>count is {count}</p>
      <hr />
      <h1>Fruits List</h1>
      <Fruits />
      <hr />
      <Employees />
      <hr />
      <Hello person={person} />
    </div>
  )
}

export default App
