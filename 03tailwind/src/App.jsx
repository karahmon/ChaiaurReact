import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Card from './components/Card'

function App() {
  const [count, setCount] = useState(0)
  let myObj={
    username: "Monil",
    age:21
  }
  let newArr=[1,2,3]
  return (
    <>
      <h1 className='bg-green-400 text-black p-4 rounded-xl mb-4'>Tailwind Test</h1>
      <Card username="Chai aur Code" btnText="Read More" someObj={myObj} arr={newArr}/>  
      <br />
      <Card username="Hitesh Chaudhary" btnText="Learn More" someObj={myObj} arr={newArr}/>
    </>
  )
}

export default App
