import React, { useEffect, useState, useRef } from "react";
import { useParams, Link } from "react-router-dom";
import axios from "axios";
import Nav from "./Nav";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import imdb from "../assets/imdb_logo.png";
import "../css/Movie.css";

function Movie() {
  const { id } = useParams();
  const [movieData, setMovieData] = useState({});
  const [img, setImg] = useState();
  const mountedRef = useRef(true);

  useEffect(() => {
    async function fetchDesc() {
      const { data } = await axios.get(
        `https://www.omdbapi.com/?apikey=8d79dc22&i=${id}`
      );
      console.log(data);
      setMovieData(data);
    }
    fetchDesc();
  }, [id]);

  useEffect(() => {
    const image = new Image();
    image.src = movieData.Poster;
    image.onload = () => {
      setTimeout(() => {
        setImg(image);
      }, 300);
    };
    return () => {
      mountedRef.current = false;
    };
  }, [movieData.Poster]);

  return (
    <div className="moviePage">
      <Nav />
      <div className="movies__main">
        <div className="movies__container">
          <div className="row">
            <div className="movie__selected--top">
              <Link to="/search" className="movie__link">
                <FontAwesomeIcon icon="arrow-left" />
                <h2 className="movie__selected--title--top">Back</h2>
              </Link>
            </div>
            <div className="movie__selected">
              {img ? (
                <>
                  <figure className="movie__selected--figure">
                    <img
                      src={movieData.Poster}
                      alt=""
                      className="movie__selected--img"
                    />
                  </figure>
                  <div className="movie__selected--description">
                    <h1 className="movie__selected--title">
                      {movieData.Title}
                    </h1>
                    <div className="movie__selected--year">
                      {movieData.Year}
                    </div>
                    <div className="movie__selected--type">
                      {movieData.Type} | {movieData.Released} |{" "}
                      {movieData.Runtime} | {movieData.Rated}
                    </div>
                    <div className="movie__plot">
                      <h2 className="movie__plot--title">Plot</h2>
                      <p className="movie__plot--para">{movieData.Plot}</p>
                    </div>
                    <div className="movie__selected--extras">
                      <div className="movie__extra">
                        <b>Director:</b> {movieData.Director}
                      </div>
                      <div className="movie__extra">
                        <b>Actors:</b> {movieData.Actors}
                      </div>
                      <div className="movie__extra">
                        <b>Genre:</b> {movieData.Genre}
                      </div>
                    </div>
                    <div className="movie__ratings">
                      <div className="movie__rating">
                        <img src={imdb} alt="" className="rating__logo" />
                        <span className="rating">{movieData.imdbRating}</span>
                      </div>
                    </div>
                  </div>
                </>
              ) : (
                <>
                  <div className="movie__img--skeleton"></div>
                  <div className="movie__selected--description">
                    <div className="movie__title--skeleton skeleton"></div>
                    <div className="movie__year--skeleton skeleton"></div>
                    <div className="movie__type--skeleton skeleton"></div>
                    <div className="movie__plot--skeleton skeleton"></div>
                    <div className="movie__extra--skeleton skeleton"></div>
                  </div>
                </>
              )}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Movie;
