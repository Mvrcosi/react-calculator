import React, { useState } from 'react'
import Display from './components/Display'
import Keypad from './components/Keypad'


const App = () => {


  const [calculation, setCalculation] = useState(0)
  const [choice, setChoice] = useState('')



  let pick = []

  const handleKeyChoice = (e) => {

    switch(e.target.innerText) {
      case '1' || 1: 
        pick.push(1)
        break
      case '2' || 2: 
        pick.push(2)
        break
      case '3' || 3: 
        pick.push(3)
        break
      case '4' || 4: 
        pick.push(4)
        break
      case '5' || 5: 
        pick.push(5)
        break
      case '6' || 6: 
        pick.push(6)
        break
      case '7' || 7: 
        pick.push(7)
        break
      case '8' || 8: 
        pick.push(8)
        break
      case '9' || 9: 
        pick.push(9)
        break
      case 'AC' || "C": 
        pick = []
        break
      case '/' || "÷": 
        pick = []
        break
    }

    console.log(pick)
  }



  return (
    <div className=' flex justify-center w-screen h-screen items-center'>
      <div id="phone"className=' bg-black rounded-iphone ring-10 ring-zinc-600 ring-offset-1 min-h-72 max-w-xs'>
          <Display calculation={calculation} />
          <Keypad handleKeyChoice={handleKeyChoice}/>
      </div>
    </div>
  )
}

export default App