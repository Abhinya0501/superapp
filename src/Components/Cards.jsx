import React, { useState } from "react";
import cardimg from "../assets/cardimg1.png";
import dramaimg from "../assets/drama.png";
import fantasyimg from "../assets/fantasy.png";
import romanceimg from "../assets/romance.png";
import thrillerimg from "../assets/thriller.png";
import westernimg from "../assets/western.png";
import horrorimg from "../assets/horror.png";
import musicimg from "../assets/music.png";
import fictionimg from "../assets/fiction.png";
import Card from "../Components/Card";
import "../Components/Cards.css";
import { useNavigate } from "react-router-dom";

export default function Cards(props) {
  const navigate = useNavigate();

  const onSubmit = () => {
    navigate("/homepage");
  };
  return (
    <>
      <div className="mainDiv">
        <div className="cardDiv1 ">
          <Card
            title="Action"
            imgSrc={cardimg}
            id="1"
            color="#FF5209"
            handleBtn={props.handleBtn}
            setHandleBtn={props.setHandleBtn}
            trueBtn={props.trueBtn}
            setTrueBtn={props.setTrueBtn}
          />

          <Card
            title="Drama"
            imgSrc={dramaimg}
            id="2"
            color="#D7A4FF"
            className="cardDiv3 "
            handleBtn={props.handleBtn}
            setHandleBtn={props.setHandleBtn}
            trueBtn={props.trueBtn}
            setTrueBtn={props.setTrueBtn}
          />
          <Card
            title="Romance"
            imgSrc={romanceimg}
            id="3"
            color="#148A08"
            className="cardDiv4 "
            handleBtn={props.handleBtn}
            setHandleBtn={props.setHandleBtn}
            trueBtn={props.trueBtn}
            setTrueBtn={props.setTrueBtn}
          />
          <Card
            title="Thriller"
            imgSrc={thrillerimg}
            id="4"
            color="#84C2FF"
            className="cardDiv5 "
            handleBtn={props.handleBtn}
            setHandleBtn={props.setHandleBtn}
            trueBtn={props.trueBtn}
            setTrueBtn={props.setTrueBtn}
          />
          <Card
            title="Western"
            imgSrc={westernimg}
            id="5"
            color="#902500"
            className="cardDiv6 "
            handleBtn={props.handleBtn}
            setHandleBtn={props.setHandleBtn}
            trueBtn={props.trueBtn}
            setTrueBtn={props.setTrueBtn}
          />
          <Card
            title="Horror"
            imgSrc={horrorimg}
            id="6"
            color="#7358FF"
            className="cardDiv7 "
            handleBtn={props.handleBtn}
            setHandleBtn={props.setHandleBtn}
            trueBtn={props.trueBtn}
            setTrueBtn={props.setTrueBtn}
          />
          <Card
            title="Fantasy"
            imgSrc={fantasyimg}
            id="7"
            color=" #FF4ADE "
            className="cardDiv8 "
            handleBtn={props.handleBtn}
            setHandleBtn={props.setHandleBtn}
            trueBtn={props.trueBtn}
            setTrueBtn={props.setTrueBtn}
          />
          <Card
            title="Music"
            imgSrc={musicimg}
            id="8"
            color="#E61E32"
            className="cardDiv9 "
            handleBtn={props.handleBtn}
            setHandleBtn={props.setHandleBtn}
            trueBtn={props.trueBtn}
            setTrueBtn={props.setTrueBtn}
          />
          <Card
            title="Fiction"
            imgSrc={fictionimg}
            id="9"
            color="#6CD061"
            className="cardDiv10 "
            handleBtn={props.handleBtn}
            setHandleBtn={props.setHandleBtn}
            trueBtn={props.trueBtn}
            setTrueBtn={props.setTrueBtn}
          />
          <div className="cardDivBtn">
            <button onClick={onSubmit}>Next Page</button>
          </div>
        </div>
      </div>
    </>
  );
}
