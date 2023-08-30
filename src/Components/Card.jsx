import React from "react";
import "../Components/Card.css";
// import Chips from '../Global/Chips'
import { useState } from "react";
// import { useNavigate } from 'react-router-dom'
export default function Card(props) {
  const [isActive, setIsActive] = useState(false);
  function handleClickk(title) {
    const found = props.handleBtn.find((element) => element === props.title);
    if (!found) {
      props.setHandleBtn([...props.handleBtn, props.title]);
      var new_data = props.title;
      if (localStorage.getItem("userDataButton") == null) {
        localStorage.setItem("userDataButton", "[]");
      }
      var old_data = JSON.parse(localStorage.getItem("userDataButton"));
      old_data.push(new_data);
      window.localStorage.setItem("userDataButton", JSON.stringify(old_data));
    } else {
      const array = props.handleBtn.filter((ele) => ele !== props.title);
      props.setHandleBtn(array);
      // var new_data1 = props.title;
      // if (localStorage.getItem("userDataButton") == null) {
      //   localStorage.setItem("userDataButton", "[]");
      // }
      // var old_data1 = JSON.parse(localStorage.removeItem("userDataButton"));
      // old_data.push(new_data1);
      // window.localStorage.setItem("userDataButton", JSON.stringify(old_data1));
      let devicesArray = JSON.parse(localStorage.getItem("userDataButton"));
      devicesArray.splice(devicesArray.indexOf(props.title), 1);
      localStorage.setItem("userDataButton", JSON.stringify(devicesArray));
    }

    setIsActive((current) => !current);
  }
  return (
    <div>
      <div
        className={props.trueBtn ? (isActive ? "card1" : "") : ""}
        id="idcard"
        style={{ backgroundColor: props.color }}
        onClick={handleClickk}
      >
        <div class="container">
          <p>
            <b>{props.title}</b>
          </p>
        </div>
        <img src={props.imgSrc} alt="Avatar" className="cardImg" />
      </div>
    </div>
  );
}
