import React, { useState } from 'react'

const DigitalClock = () => {

    let time = new Date().toLocaleTimeString();
    const [cTime,setCTime] = useState(time)

    const handleTime = ()=>{
        time = new Date().toLocaleTimeString();
        setCTime(time)

    }

    setInterval(handleTime,1000)
  return (
    <div>{cTime}</div>
  )
}

export default DigitalClock