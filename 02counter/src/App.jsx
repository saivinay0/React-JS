import { useState } from 'react'
// import reactLogo from './assets/react.svg'
// import viteLogo from '/vite.svg'


function App() {

  let [counter,setCounter]=useState(5)
  // let counter=5
  const addvalue=()=>{
    if (counter<20)setCounter(counter+1)

  }
  const remvalue=()=>{
    if (counter>0)setCounter(counter-1)

  }

  return (
    <>
      <h1>hello React !</h1>
      <h2>counter value :{counter}</h2>
      <button onClick={addvalue}>Add value</button><br />
      <button onClick={remvalue}>Remove value</button>

    </>
  )
}

export default App
