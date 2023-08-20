import React from "react";
import "../pages/SelectCategory.css";
import Page2Half from "../Components/Page2Half";
import Cards from "../Components/Cards";
export default function SelectCategory() {
  return (
    <div className="scMainDiv">
      <div className="scPageDiv1">
        <Page2Half />
      </div>
      <div className="scPageDiv2">
        <Cards />
      </div>
    </div>
  );
}
