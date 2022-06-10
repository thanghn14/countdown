import React, { useRef } from "react";
import styles from "./Clock.module.css";
import Box from "./ClockSvg";
import Countdown from "../Countdown/Countdown";
import FacebookIcon from '@mui/icons-material/Facebook';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import GoogleIcon from '@mui/icons-material/Google';

const clock = [
  { left: "243.648px", top: "38.719px" },
  { left: "289.281px", top: "91.8902px" },
  { left: "304px", top: "163.171px" },
  { left: "284.11px", top: "231.352px" },
  { left: "237.352px", top: "281.281px" },
  { left: "163.829px", top: "305px" },
  { left: "86.352px", top: "281.281px" },
  { left: "46.0001px", top: "231.352px" },
  { left: "28.0001px", top: "163.171px" },
  { left: "38.8902px", top: "91.8902px" },
  { left: "96.648px", top: "38.719px" },
  { left: "164.171px", top: "9.0001px" },
];
function Clock() {
  const hoursHand = useRef();
  const minutesHand = useRef();
  const secondsHand = useRef();
  function count() {
    const date = new Date();
    const seconds = date.getSeconds();

    const hours = ((date.getHours() + 11) % 12) + 1;
    const minutes = date.getMinutes();

    const hour = hours * 30;
    const minute = minutes * 6;
    const second = seconds * 6;
    second <= 1
      ? secondsHand.current.classList.add("hideTransition")
      : secondsHand.current.classList.remove("hideTransition");

    hoursHand.current.style.transform = `rotate(${hour}deg)`;
    minutesHand.current.style.transform = `rotate(${minute}deg)`;

    secondsHand.current.style.transform = `rotate(${second}deg)`;
    // secondsHand.current.style.display = `${second <= 1 ? "none" : "block"}`;
    // dynamic shadow
    let hourOffsetSign = hour > 135 && hour < 315 ? "-" : "";
    let minuteOffsetSign = minute > 135 && minute < 315 ? "-" : "";
    let secondOffsetSign = second > 135 && second < 315 ? "-" : "";

    hoursHand.current.style.boxShadow = `${hourOffsetSign}6px ${hourOffsetSign}6px 6px #b8b9be`;
    minutesHand.current.style.boxShadow = `${minuteOffsetSign}6px ${minuteOffsetSign}6px 6px #b8b9be`;
    secondsHand.current.style.boxShadow = `${secondOffsetSign}6px ${secondOffsetSign}6px 6px #b8b9be`;
  }
  if (hoursHand.current) {
    count();
  }

  React.useLayoutEffect(() => {
    // (((new Date()).getSeconds()*6) === 360
    // ? secondsHand.current.style.display="none"
    // : secondsHand.current.style.transition="transform 0.2s cubic-bezier(0.4, 2.08, 0.55, 0.44)");
    setInterval(count, 1000);
  });

  return (
    <div className={styles.clock} id="clock">
      <Box />
      <Countdown />
      <div ref={hoursHand} className={styles.hourHand} id="hourHand"></div>
      <div
        ref={minutesHand}
        className={styles.minuteHand}
        id="minuteHand"
      ></div>
      <div
        ref={secondsHand}
        className={styles.secondHand}
        id="secondHand"
      ></div>
      <div className={styles.axis} id="secondHand"></div>
      {clock.map((number, index) => (
        <span key={index} className={`${styles.number}`} style={number}>
          {index + 1}
        </span>
      ))}

      <div className={styles.navbar}>
        <ul>
          <li>
            <a href="">HOME</a>
          </li>
          <li>
            <a href="">SERVICES</a>
          </li>
          <li>
            <a href="">ABOUT</a>
          </li>
          <li>
            <a href="">CONTACTS</a>
          </li>
        </ul>
      </div>

      <div className={styles.form}>
        <p>Trang web sẽ sớm ra mắt</p>

        <form className={styles.subscribe} action="submit">
          <input type="text" placeholder="  Nhập email của bạn"/>
          <button>Đăng ký</button>
        </form>
      </div>

      <div className={styles.icon}>
        <a href=""><FacebookIcon/></a>
        <a href=""><LinkedInIcon/></a>
        <a href=""><GoogleIcon/></a>
      </div>

    </div>
  );
}
export default Clock;
