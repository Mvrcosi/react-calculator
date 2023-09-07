import React from 'react'

const Display = ({number}) => {
  return (
    <div className='text-white w-full h-40  '>
        <div id='numbers'  className='w-full h-full flex justify-end items-end pt-8 pr-2 rounded-iphone '> 
            <p className='text-6xl p-4'>{number}</p>
        </div>
    </div>
  )
}

export default Display