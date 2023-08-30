import React from "react";
import { Link } from "react-router-dom";
import userIcon from "../assets/userIcon.png";
import { useState, useEffect } from "react";
import "./Movies.css";
const genre = JSON.parse(window.localStorage.getItem("userDataButton"));
const Movies = () => {
  const [gener1, setGener1] = useState([]);
  const [gener2, setGener2] = useState([]);
  const [gener3, setGener3] = useState([]);
  useEffect(() => {
    const getDataGenre1 = async () => {
      await fetch(
        `https://www.omdbapi.com/?i=tt3896198&apikey=d20a227b&s=${genre[0]}`
      )
        .then((response) => response.json())
        .then((response) => setGener1(response.Search.splice(4, 4)))
        .catch((err) => console.error(err));
    };
    const getDataGenre2 = async () => {
      await fetch(
        `https://www.omdbapi.com/?i=tt3896198&apikey=d20a227b&s=${genre[1]}`
      )
        .then((response) => response.json())
        .then((response) => setGener2(response.Search.splice(4, 4)))
        .catch((err) => console.error(err));
    };
    const getDataGenre3 = async () => {
      await fetch(
        `https://www.omdbapi.com/?i=tt3896198&apikey=d20a227b&s=${genre[2]}`
      )
        .then((response) => response.json())
        .then((response) => setGener3(response.Search.splice(4, 4)))
        .catch((err) => console.error(err));
    };

    getDataGenre1();
    getDataGenre2();
    getDataGenre3();
  }, []);

  return (
    <div className="entertainment_container_main">
      <div className="userDiv">
        <h3>Super app</h3>
        <Link to="/homepage">
          <img src={userIcon} alt="user" />
        </Link>
      </div>
      <div className="category_container_div">
        <h4>Entertainment according to your choice</h4>
        <div className="collection_container_div">
          <p>{genre[0]}</p>
          <div className="movies_container_div">
            {gener1?.map((item, id) => {
              return (
                <div key={id} className="generImages">
                  <img src={item.Poster} alt={item.Title} />
                </div>
              );
            })}
          </div>
        </div>
        <div className="collection_container_div">
          <p>{genre[1]}</p>
          <div className="movies_container_div">
            {gener2?.map((item, id) => {
              return (
                <div key={id} className="generImages">
                  <img src={item.Poster} alt={item.Title} />
                </div>
              );
            })}
          </div>
        </div>
        <div className="collection_container_div">
          <p>{genre[2]}</p>
          <div className="movies_container_div">
            {gener3?.map((item, id) => {
              return (
                <div key={id} className="generImages">
                  <img src={item.Poster} alt={item.Title} />
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Movies;
