import React, { useState } from 'react'
import Display from './components/Display'
import Keypad from './components/Keypad'


const App = () => {


  const [calculation, setCalculation] = useState(0)
  const [choice, setChoice] = useState('')


  const order = []
  const handleKeyChoice = (e) => {


  }

  const calculate = (option) => {

    switch(option) {
      case 1 || "1": 
        
    }

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