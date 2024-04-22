import React from 'react'
import {Images,CloudImage, SunImage, GirlImage} from './Images'
import { cloud, girl, sun } from '../assets/images/imageUrls'
import FirstBar from './FirstBar'

export default function Sky() {
  return (
    <div className='bg-sky-200 h-screen'>
        <Images  url={cloud}/>
        <FirstBar />
        <CloudImage url={cloud} />
        <SunImage url={sun} />
    </div>
  )
}
