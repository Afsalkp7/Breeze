import React from 'react'
import Date from './Date'
import Temp from './Temp'

export default function FirstBar() {
  return (
    <div className='flex justify-between p-5 pt-16'>
        <Date />
        <Temp />
    </div>
  )
}
