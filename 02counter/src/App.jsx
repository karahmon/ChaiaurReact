import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {

let [counter,setCounter]= useState(15)
 function addValue(){
  if(counter<20){
  counter=counter+1;
  counter=counter+1;// the ans wont be 20 , only one will increase as react does job in batches and feel same work is been to done
  counter=counter+1;
// incase you want multiple addition use callback
//setCounter(counter=>{counter+1})
}
setCounter(counter)
 }
function removeValue(){
  if(counter>0){
    counter=counter-1;
  }
  setCounter(counter)
   }

  return (
    <>
    <h1>Chai aur React</h1>
    <h2>Counter Value: {counter}</h2>
    <button onClick={addValue} id="increment">Increase Value</button>
    <br></br>
    <button onClick={removeValue} id="decrement">Decrease Value</button>
    </>
  )
}

export default App
