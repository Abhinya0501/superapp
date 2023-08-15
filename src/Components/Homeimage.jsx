import React from "react";
import HomeImage from "../assets/homeimage1.png";
import "./Homeimage.css";
export default function Homeimage() {
  return (
    <div>
      <img src={HomeImage} className="homeimage" alt="Home " />
      <h1 className="homeImageHeading">Discover new things on Superapp</h1>
    </div>
  );
}
