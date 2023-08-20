import React from "react";
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
export default function Cards() {
  return (
    <>
      <div className="mainDiv">
        <div className="cardDiv1 ">
          <Card
            title="Action"
            imgSrc={cardimg}
            color="#FF5209"
            className="cardDiv2 "
          />
          <Card
            title="Drama"
            imgSrc={dramaimg}
            color="#D7A4FF"
            className="cardDiv3 "
          />
          <Card
            title="Action"
            imgSrc={romanceimg}
            color="#11B800"
            className="cardDiv4 "
          />
          <Card
            title="Action"
            imgSrc={thrillerimg}
            color="#84C2FF"
            className="cardDiv5 "
          />
          <Card
            title="Action"
            imgSrc={westernimg}
            color="#902500"
            className="cardDiv6 "
          />
          <Card
            title="Action"
            imgSrc={horrorimg}
            color="#7358FF"
            className="cardDiv7 "
          />
          <Card
            title="Action"
            imgSrc={fantasyimg}
            color=" #FF4ADE "
            className="cardDiv8 "
          />
          <Card
            title="Action"
            imgSrc={musicimg}
            color="#E61E32"
            className="cardDiv9 "
          />
          <Card
            title="Action"
            imgSrc={fictionimg}
            color="#6CD061"
            className="cardDiv10 "
          />
          <div className="cardDivBtn">
            <button>Next Page</button>
          </div>
        </div>
      </div>
    </>
  );
}
