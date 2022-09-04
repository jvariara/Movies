import React from "react";
import "../css/Home.css";
import image from "../assets/undraw_home_cinema_l7yl.svg";
import SearchInput from "../components/SearchInput";
import Nav from "../components/Nav";

function Home() {
  return (
    <div className="home">
      <Nav />
      <div className="header">
        <div className="header__content">
          <h1 className="header__title">
            Find your new favorite <span className="text__primary">Movies</span>{" "}
            and <span className="text__primary">TV Series!</span>
          </h1>
          <SearchInput />
        </div>
        <div class="header__img--container">
          <img src={image} className="header__img" alt="" />
        </div>
      </div>
    </div>
  );
}

export default Home;
