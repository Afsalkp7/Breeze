import React from 'react'
import FormattedDate from './FormattedDate'
import Temp from './Temp'

export default function FirstBar() {
  return (
    <div className='flex justify-between p-5 pt-16'>
        <FormattedDate />
        <Temp />
    </div>
  )
}
