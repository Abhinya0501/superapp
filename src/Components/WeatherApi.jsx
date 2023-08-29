import React from "react";
import "../Components/WeatherApi.css";
import { useEffect, useState } from "react";
import WeatherApiComponent from "./WeatherApiComponent";
export default function WeatherApi() {
  const [data, setData] = useState(false);

  useEffect(() => {
    const url =
      "https://api.weatherapi.com/v1/current.json?key=5f0f7a9504a144c5a5592212232308&q=jaunpur&aqi=no";
    const fetchData = async () => {
      await fetch(
        url
        // `${process.env.REACT_APP_API_URL}/weather/?lat=${lat}&lon=${long}&units=metric&appid=${process.env.REACT_APP_API_KEY}`
      )
        .then((res) => res.json())
        .then((result) => {
          setData(result);
          // console.log(result);
        });
    };
    fetchData();
  });

  return <div>{data ? <WeatherApiComponent data={data} /> : <></>}</div>;
}
