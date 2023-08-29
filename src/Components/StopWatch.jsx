import React, { useEffect, useState } from "react";
import StopImg from "../assets/arrowStop.png";
import StopDownImg from "../assets/arrowStopDown.png";
import "./StopWatch.css";
import { CountdownCircleTimer } from "react-countdown-circle-timer";
export default function StopWatch() {
  const [hour, setHour] = useState(0);
  const [min, setMin] = useState(0);
  const [sec, setSec] = useState(0);
  const [stop, setStop] = useState(true);
  const [time, setTime] = useState(0);

  useEffect(() => {
    if (time > 0) {
      const interval = setInterval(() => {
        setTime((time) => time + 1);
      }, 1000);
      return () => clearInterval(interval);
    }
  }, [time]);

  useEffect(() => {
    let interval = null;
    if (!stop) {
      interval = setInterval(() => {
        if (min > 59) {
          setHour(hour + 1);
          setMin(0);
          clearInterval(interval);
        }
        if (sec > 59) {
          setMin(min + 1);
          setSec(0);
          clearInterval(interval);
        }
        if (sec < 59) {
          setSec(sec + 1);

          clearInterval(interval);
        }
      }, 1000);
    } else {
      clearInterval(interval);
    }
    return () => {
      clearInterval(interval);
    };
  });

  const totalInputTimeInSeconds = hour * 60 * 60 + min * 60 + sec;

  const showTimer = (totalTimeInSeconds) => {
    const hour1 = Math.floor(totalTimeInSeconds / 3600);
    totalTimeInSeconds %= 3600;
    const min1 = Math.floor(totalTimeInSeconds / 60);
    const sec1 = totalTimeInSeconds % 60;
    return `${hour1 < 10 ? "0" + hour1 : hour1}:${
      min1 < 10 ? "0" + min1 : min1
    }:${sec1 < 10 ? "0" + sec1 : sec1}`;
  };
  const onStart = () => {
    setStop(false);

    setTime(totalInputTimeInSeconds);
  };

  return (
    <div>
      <div>
        <div className="swdiv1">
          <div className="swdivhand">
            <p>Hours</p>
            <p>Minutes</p>
            <p>Seconds</p>
          </div>

          <div className="swStopUp">
            <img src={StopImg} className="" alt="stopArrow" />
            <img src={StopImg} alt="stopArrow" />
            <img src={StopImg} alt="stopArrow" />
          </div>

          <div className="swStopDown">
            <img src={StopDownImg} alt="stopArrow" />
            <img src={StopDownImg} alt="stopArrow" />
            <img src={StopDownImg} alt="stopArrow" />
          </div>
          <div className="swdivmainh1">
            <h1 className="swdivh1">
              <span>{hour}</span>:<span>{min}</span>:<span>{sec}</span>
            </h1>
          </div>
        </div>

        <div>
          <button onClick={onStart} className="swbtn">
            Start
          </button>
        </div>
      </div>
      <div>
        <CountdownCircleTimer
          isPlaying={!stop ? true : false}
          duration={totalInputTimeInSeconds}
          colors={["#FF6A6A"]}
        >
          {({ remainingTime }) => <p> {showTimer(time)}</p>}
        </CountdownCircleTimer>
      </div>
    </div>
  );
}
