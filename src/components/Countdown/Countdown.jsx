import React, { useState, useEffect } from 'react'
import styles from "./CountDown.module.css"
function Countdown() {
  const [countdownDate, setCountdownDate] = useState(new Date('6/10/2022').getTime());
  const [hour, setHour] = useState(0);
  const [minutes, setMinutes] = useState(0);
  const [second, setSecond] = useState(0);
  useEffect(() => {
    setInterval(function Count(secondNum) {
      let getHours = secondNum/3600
      // console.log(getHours)
      // var countdownDate = new Date(`Jan 5, 2023  ${getHours}:0:0`).getTime();
      var now = new Date().getTime();
      var distance = countdownDate - now;
      // Time calculations for days, hours, minutes and seconds
      setHour(Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)));
      setMinutes(Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60)));
      setSecond(Math.floor((distance % (1000 * 60)) / 1000));
      // console.log(countdownDate)

    }, 1000)
  },[])

  return (
    <div >
      
      <div className={styles.wrapCount}>

        <div className='time-section'>
          <div className={styles.time}>{hour || '00'}</div>
        </div>
       <span  className={styles.time}>:</span>
        <div className='time-section'>
          <div className={styles.time}>{minutes || '00'}</div>
        </div>
       <span  className={styles.time}>:</span>
        <div className='time-section'>
          <div className={styles.time}>{second || '00'}</div>
        </div>
      </div>
    </div>
  )
}

export default Countdown