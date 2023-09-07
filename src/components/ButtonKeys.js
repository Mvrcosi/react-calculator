import React from 'react'


// const options = [
//     zero: {value: 0, operation: 0, numeric: true},
//     one: {value: 1, operation: 0, numeric: true},
//     two: {value: 2, operation: 0, numeric: true},
//     three: {value: 3, operation: 0, numeric: true},
//     four: {value: 4, operation: 0, numeric: true},
//     five: {value: 5, operation: 0, numeric: true},
//     six: {value: 6, operation: 0, numeric: true},
//     seven: {value: 7, operation: 0, numeric: true},
//     eight: {value: 8, operation: 0, numeric: true},
//     nine: {value: 9, operation: 0, numeric: true},
//     fraction: {value: "%", operation: '%', operator: true},
//     multiply: {value: "x", operation: '*', operator: true},
//     divide: {value: "/", operation: '/', operator: true},
//     add: {value: "+", operation: '+', operator: true},
//     subtract: {value: "-", operation: "-", operator: true},
//     allclear: {value: "AC", operation: 0, function: true },
//     inverse: {value: "±", operation: "-",  function: true },
//     inverse: {value: "%", operation: '%',  function: true },
// ]

const options = [
    {value: "AC", operation: 0, function: true },
    {value: "±", operation: "-",  function: true },
    {value: "%", operation: '%', operator: true},
    {value: "/", operation: '/', operator: true},

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
    {value: "%", operation: '%',  function: true },
    {value: ".", operation: '.',  function: true, lastRow: true },
    {value: "=", operation: '=',  operator: true, lastRow: true},

]


const DisplayKeys = options.map((key) => {
  return (
    <div className=''>
      <button button className='w-20 h-20 bg-slate-400 rounded-full text-4xl  m-1'> {key.value}</button>
    </div>
  )
})

const ButtonKeys = () => {
  return (
    <>
      {DisplayKeys}
    </>
  )
}

export default ButtonKeys