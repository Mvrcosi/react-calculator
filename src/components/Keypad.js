import React, {useState} from 'react'


const options = [

    {value: "AC", operation: 0, function: true },
    {value: "±", operation: "-",  function: true },
    {value: "%", operation: '%', function: true},
    {value: "÷", operation: '/', operator: true},

    {value: '7', operation: 0, numeric: true},
    {value: '8', operation: 0, numeric: true},
    {value: '9', operation: 0, numeric: true},
    {value: "x", operation: '*', operator: true},

    {value: '4', operation: 0, numeric: true},
    {value: '5', operation: 0, numeric: true},
    {value: '6', operation: 0, numeric: true},
    {value: "-", operation: "-", operator: true},

    {value: '1', operation: 0, numeric: true},
    {value: '2', operation: 0, numeric: true},
    {value: '3', operation: 0, numeric: true},
    {value: "+", operation: '+', operator: true},

    {value: '0', operation: 0, numeric: true, lastRow: true},
    {value: ".", operation: '.',  function: true, lastRow: true },
    {value: "=", operation: '=',  operator: true, lastRow: true},
    
]



const Keypad = ({handleKeyChoice}) => {
  return (
    <div className='text-white w-full h-keypad p-3  '>
        <div id='keypad' className='grid grid-cols-4 w-full h-full p-1  rounded-iphone '> 
          {options.map((key) => { return  (
            <div key={key.value} className='text-center '> 
              <button onClick={handleKeyChoice} className={`w-14 h-14 ${key.operator ? "bg-[#FE9D23]" : key.numeric || key.value === '.'? "bg-[#333333]" : "bg-[#A5A5A5]" } rounded-full text-2xl m-1`}> {key.value}</button>
            </div>)
          })}
        </div>
    </div>
  )
}

export default Keypad