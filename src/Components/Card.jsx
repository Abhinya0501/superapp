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
    } else {
      const array = props.handleBtn.filter((ele) => ele !== props.title);
      props.setHandleBtn(array);
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
        <img src={props.imgSrc} alt="Avatar" />
      </div>
    </div>
  );
}
