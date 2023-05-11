import React from 'react'

const LayOut = ({children}) => {
  return (
    <div className='flex flex-col items-center mt-20'>
      {children}
    </div>
  )
}

export default LayOut
