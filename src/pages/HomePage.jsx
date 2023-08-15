import React from "react";
import Homeimage from "../Components/Homeimage";
import Form from "../Components/Form";
import "./HomePage.css";

export default function HomePage() {
  return (
    <div className="appDiv1">
      <div className="appDiv2">
        <Homeimage />
      </div>
      <div className="appDiv3">
        <Form />
      </div>
    </div>
  );
}
