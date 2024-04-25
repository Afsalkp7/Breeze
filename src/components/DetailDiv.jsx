import React from 'react'
import Day from './Day'
import TimeLine from './TimeLine'
// import { CloudFooterImage } from './Images'
// import { footCloud } from '../assets/images/imageUrls'
export default function DetailDiv() {
  return (
    <div>
      <Day />
      <TimeLine />
      {/* <CloudFooterImage url={footCloud} /> */}
    </div>
  )
}
