import React from "react";
import "../Components/WeatherApiComponent.css";
import { useEffect, useState } from "react";
export default function WeatherApiComponent({ data }) {
  const [date, setDate] = useState("");
  const [time, setTime] = useState("");
  const today = new Date();
  useEffect(() => {
    const showTime = today.toLocaleTimeString("en-US", {
      hour: "numeric",
      minute: "numeric",
      hour12: true,
    });
    setTime(showTime);
  });
  useEffect(() => {
    const date =
      today.getMonth() + 1 + "-" + today.getDate() + "-" + today.getFullYear();
    setDate(date);
  });
  return (
    <div>
      <div className="wDiv1">
        <span className="wSpan1">{date}</span>
        <span className="wSpan1">{time}</span>
      </div>
      <div className="wDiv2">
        <div>
          <img src={data.current.condition.icon} className="condition" alt="" />
          <p className="conditionText">{data.current.condition.text}</p>
        </div>
        <div>
          <p className="temp">
            <span>{data.current.temp_c}</span>&nbsp;C
          </p>
          <p>{data.current.pressure_mb} pressure</p>
        </div>
        <div>
          <p
            style={{
              marginBottom: "12px",
              fontSize: "24px",
              marginTop: "10px",
            }}
          >
            {data.current.wind_kph} wind
          </p>
          <p>{data.current.humidity} humidity</p>
        </div>
      </div>
    </div>
  );
}
