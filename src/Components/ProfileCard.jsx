import React from "react";
import "../Components/ProfileCard.css";
import profileImg from "../assets/profileimg.png";
export default function ProfileCard() {
  const data = JSON.parse(window.localStorage.getItem("userData"));
  const details = JSON.parse(window.localStorage.getItem("userDataButton"));
  return (
    <div className="profileCardMainDiv">
      <div>
        <img src={profileImg} alt="profile" className="profileCardImg" />
      </div>
      <div className="profileCardDiv2">
        <div className="profileCardDiv3">
          <p className="profileCardP2">{data.name}</p>
          <p className="profileCardP2">{data.email}</p>
          <h1 className="profileCardH2">{data.username}</h1>
        </div>
        <div>
          {
            // for(let i =0;i<details.length;i++){
            //   <button>{details[i]}</button>
            // }
            details.map((detail, index) => {
              return (
                <button className="profileCardBtn">{details[index]}</button>
              );
            })
          }
        </div>
      </div>
    </div>
  );
}
