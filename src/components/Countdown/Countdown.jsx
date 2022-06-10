import React, { useState, useEffect } from 'react'
import styles from "./CountDown.module.css"

function Countdown() {
  // const [countdownDate, setCountdownDate] = useState(new Date('6/10/2022').getTime());
  const [hour, setHour] = useState(0);
  const [minutes, setMinutes] = useState(0);
  const [second, setSecond] = useState(0);
  const [cobra,setCobra] = useState(1982)
  const number = React.useRef(0)

  function Count(secondNum) {
    number.current = secondNum
    function handleCount() {
      setHour(~~(number.current / 3600));
      setMinutes(~~((number.current % 3600) / 60));
      setSecond(~~number.current % 60); 
       
    }
    return handleCount
    
  }

  React.useLayoutEffect(() => { 
    setInterval(Count(2000),1000)
  }, []) 
  React.useLayoutEffect(() => {
      setTimeout(() => {  
        setCobra(cobra-1) 
      },1000)
  },[cobra])
  return (
    <div >

      <div className={styles.wrapCount}>

        <div className='time-section'>
          <div className={styles.time}>{hour || '00'}</div>
        </div>
        <span className={styles.time}>:</span>
        <div className='time-section'>
          <div className={styles.time}>{( Math.floor(cobra  % 3600 / 60)) < 10 ? '0' +( Math.floor(cobra  % 3600 / 60)) : ( Math.floor(cobra  % 3600 / 60))}</div>
        </div>
        <span className={styles.time}>:</span>
        <div className='time-section'>
          <div className={styles.time}>{(cobra%60) < 10 ? '0' +(cobra%60) : (cobra%60)}</div>
        </div>
      </div>

    </div>
  )
}

export default Countdown