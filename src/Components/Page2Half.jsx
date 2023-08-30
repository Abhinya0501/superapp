import React from "react";
import "../Components/Page2Half.css";
import P2hButton from "../Components/P2hButton";
export default function Page2Half(props) {
  return (
    <>
      <div className="p2Div1">
        <h1>Super app</h1>
      </div>
      <div className="p2Div2">
        <h2>Choose your entertainment category</h2>
      </div>
      <div className="p2Div3">
        {props.handleBtn.map((title, index) => {
          return (
            <P2hButton
              title={title}
              handleBtn={props.handleBtn}
              setHandleBtn={props.setHandleBtn}
              isActive={props.isActive}
              setIsActive={props.setIsActive}
            />
          );
        })}
        {/* {props.trueBtn.map((title, index) => {
          return (
            <P2hButton
              title={title}
              trueBtn={props.trueBtn}
              setTrueBtn={props.setTrueBtn}
            />
          );
        })} */}
      </div>
    </>
  );
}
