//import { useState } from 'react'
import { Button } from './Button'
import { ButtonSection } from './ButtonSection'
import { Textbox } from './Textbox'
import { TextBlock } from './TextBlock'
import './App.css'

function App() {
   
  const myArray = new Array(5).fill(true)

  return (
    <>
      {myArray.map(() => {
        return (
          <TextBlock/>
        )
      })}
    </>
  )
}

export default App
 