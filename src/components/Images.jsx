import React from 'react'

export const  Images = ({url})=> {
  return (
        <img className='w-28 absolute right-24' src={url} />
  )
}

export const  CloudImage = ({url})=> {
  return (
        <img className='w-16 absolute left-12 top-28' src={url} />
  )
}

export const  SunImage = ({url})=> {
  return (
        <img className='w-48 absolute right-0 top-20' src={url} />
  )
}
export const  GirlImage = ({url})=> {
  return (
        <img className='w-48 absolute right-0 top-20' src={url} />
  )
}
