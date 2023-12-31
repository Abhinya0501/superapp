import React, { useState } from "react";
import "../pages/SelectCategory.css";
import Page2Half from "../Components/Page2Half";
import Cards from "../Components/Cards";
export default function SelectCategory() {
  const [handleBtn, setHandleBtn] = useState([]);
  const [trueBtn, setTrueBtn] = useState([]);
  const [isActive, setIsActive] = useState(false);
  return (
    <div className="scMainDiv">
      <div className="scPageDiv1">
        <Page2Half
          handleBtn={handleBtn}
          setHandleBtn={setHandleBtn}
          trueBtn={trueBtn}
          setTrueBtn={setTrueBtn}
          isActive={isActive}
          setIsActive={setIsActive}
        />
      </div>
      <div className="scPageDiv2">
        <Cards
          setHandleBtn={setHandleBtn}
          handleBtn={handleBtn}
          trueBtn={trueBtn}
          setTrueBtn={setTrueBtn}
          isActive={isActive}
          setIsActive={setIsActive}
        />
      </div>
    </div>
  );
}
