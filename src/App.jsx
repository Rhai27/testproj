import { useState } from 'react'
import Fruits from './components/Druits'

function App() {
  const [count, setCount] = useState(0)
  const [count1, setCount1] = useState(0)

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
    </div>
  )
}

export default App
