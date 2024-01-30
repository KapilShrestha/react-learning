import { useState } from 'react'
// import Chai from './chai'
function App() {
  let [counter, setCounter] = useState(15)
  // let counter = 15
  const addValue = () => {
    setCounter(counter + 1)
  }
  const removeValue = () => {
    setCounter(counter - 1)
  }

  return (
    <>
    <h1>Chai aur react</h1>
    <h2>add value: {counter} </h2>
    <button onClick={addValue}>Add Value</button>
    <button onClick={removeValue}>remove Value {counter}</button>
    <p>footer:{counter} </p>


    <h1 className='bg-green-400'>tailwindtest</h1>
    </>
    
  )
}

export default App
