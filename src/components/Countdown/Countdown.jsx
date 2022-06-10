import React, { useState, useEffect } from 'react'
import styles from "./CountDown.module.css"
function Countdown() {
  // const [countdownDate, setCountdownDate] = useState(new Date('6/10/2022').getTime());
  const [hour, setHour] = useState(0);
  const [minutes, setMinutes] = useState(0);
  const [second, setSecond] = useState(0);
  const number = React.useRef(0)
  function Count(secondNum) {
    number.current = secondNum
    function handleCount() {
      setHour(~~(number.current / 3600));
      setMinutes(~~((number.current % 3600) / 60));
      setSecond(~~number.current % 60);
      console.log(second)
      console.log(minutes)
      number.current-- 
    }
    return handleCount
    
  }

  React.useLayoutEffect(() => {
    const handCount = Count(2000)
    handCount()
    setInterval(handCount,1000)
  }, [])


  return (
    <div >

      <div className={styles.wrapCount}>

        <div className='time-section'>
          <div className={styles.time}>{hour || '00'}</div>
        </div>
        <span className={styles.time}>:</span>
        <div className='time-section'>
          <div className={styles.time}>{minutes || '00'}</div>
        </div>
        <span className={styles.time}>:</span>
        <div className='time-section'>
          <div className={styles.time}>{~~number.current % 60 || '00'}</div>
        </div>
      </div>
    </div>
  )
}

export default Countdown