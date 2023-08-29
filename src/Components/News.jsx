import React from "react";
import "../Components/News.css";
import { useEffect, useState } from "react";

//API key : 20a49f50669640eab2d8aaa0475b1762
export default function News() {
  const [newsData, setNewsData] = useState([]);

  const getData = async () => {
    const data = await fetch(
      "https://newsapi.org/v2/top-headlines?sources=techcrunch&apiKey=20a49f50669640eab2d8aaa0475b1762"
    );
    const result = await data.json();
    let artical = result.articles[3];
    setNewsData(artical);
    console.log(artical);
  };
  useEffect(() => {
    getData();
  }, []);

  return (
    <>
      <div className="news_main">
        <div className="news_section">
          <div
            className="news_heading"
            style={{
              backgroundImage: `url(${newsData.urlToImage})`,
              backgroundSize: "cover",
            }}
          >
            <div className="news_des">
              <h1>{newsData.title}</h1>
              <p>{newsData.publishedAt}</p>
            </div>
          </div>
          <div className="news_details">
            <p>{newsData.content}</p>
          </div>
        </div>
      </div>
      <div className="browseBtn">
        <button>Browse</button>
      </div>
    </>
  );
}
