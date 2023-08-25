import React from "react";
import "../pages/HomePage.css";
import WeatherApi from "../Components/WeatherApi";
import ProfileCard from "../Components/ProfileCard";
import Notes from "../Components/Notes";
export default function HomePage() {
  return (
    <div>
      <div className="hpMainDiv1">
        <div>
          <div className="profileDiv">
            <ProfileCard />
          </div>
          <div className="profileDiv2">
            <WeatherApi />
          </div>
        </div>
        <div className="notesDiv1">
          <Notes />
        </div>
      </div>
    </div>
  );
}
