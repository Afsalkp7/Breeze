import React from 'react'
import {Images,CloudImage, SunImage, GirlImage} from './Images'
import { cloud, girl, sun } from '../assets/images/imageUrls'
import FirstBar from './FirstBar'

export default function Sky() {
  return (
    <div className='relative'>
        <Images  url={cloud}/>
        <FirstBar />
        <CloudImage url={cloud} />
        <SunImage url={sun} />
        <GirlImage url={girl} />
    </div>
  )
}
