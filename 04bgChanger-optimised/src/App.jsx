import React, { useState } from 'react';
import Button from "./Button";

function App() {
  const [color, setColor] = useState("green");

  const changeColor = (newColor) => {
    setColor(newColor);
  };

  return (
    <>
      <div className='w-full h-screen duration-200' style={{background: color}}>
        <div className='fixed flex flex-wrap justify-center bottom-12 inset-x-0 px-2'>
          <div className='flex flex-wrap justify-center gap-3 shadow-lg bg-white px-3 py-2 rounded-3xl'>
            <Button color="red" changeColor={changeColor}/>
            <Button color="green" changeColor={changeColor}/>
            <Button color="blue" changeColor={changeColor}/>
            <Button color="olive" changeColor={changeColor}/>
            <Button color="grey" changeColor={changeColor}/>
            <Button color="yellow" changeColor={changeColor}/>
            <Button color="pink" changeColor={changeColor}/>
            <Button color="purple" changeColor={changeColor}/>
            <Button color="lavender" changeColor={changeColor}/>
            <Button color="white" changeColor={changeColor}/>
            <Button color="black" changeColor={changeColor}/>
          </div>
        </div>
      </div>
    </>
  );
}

export default App;
