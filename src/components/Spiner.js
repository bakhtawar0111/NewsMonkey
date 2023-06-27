import React from 'react'
import loading from './loading.gif'

export default function Spiner() {
  return (
    <div className='text-center h-25'>
      <img className='my-3' src={loading} alt="loading" />
    </div>
  )
}
