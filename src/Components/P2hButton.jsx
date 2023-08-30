import React from "react";
import "../Components/P2hButton.css";
export default function P2hButton(props) {
  function handleClickk1(title) {
    const found = props.handleBtn.find((element) => element === props.title);
    if (!found) {
      props.setHandleBtn([...props.handleBtn, props.title]);
    } else {
      const array = props.handleBtn.filter((ele) => ele !== props.title);
      props.setHandleBtn(array);
      props.setIsActive(!props.isActive);
      // window.localStorage.removeItem("userData");
    }
    // const found1 = props.trueBtn.find((element) => element === props.title);
    // if (!found1) {
    //   props.setTrueBtn([...props.trueBtn, props.title]);
    // } else {
    //   const array = props.handleBtn.filter((ele) => ele !== props.title);
    //   props.setHandleBtn(array);
    // }
  }
  return (
    <div>
      <button className="p2hbutton" onClick={handleClickk1}>
        {props.title}
      </button>
    </div>
  );
}
