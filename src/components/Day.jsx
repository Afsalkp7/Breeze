import React, { useEffect, useState } from 'react'

export default function Day() {
  const [day,setDay] = useState("")
  useEffect(()=>{
    const dayFind = ((date)=>{
      if (date.split(" ")[0] == "Sat") {
        setDay("SATURDAY")
      }
    })
    const dateNow = new Date()
    dayFind(dateNow)

  },[])
  return (
    <div className='text-center pt-4'>
        <span className='font-serif font-bold text-3xl'>{day}</span> < br/>
        <span className='font-serif font-bold text-xl'>Sunny</span>
    </div>
  )
}
