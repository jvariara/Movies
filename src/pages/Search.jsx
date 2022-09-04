import React, { useEffect, useState, useRef } from "react";
import SearchInput from "../components/SearchInput";
import { useStateValue } from "../StateProvider";
import "../css/Search.css";
import Nav from "../components/Nav";
import { Link } from "react-router-dom";
import axios from "axios";

function Search() {
  const [{ term }, dispatch] = useStateValue();
  const [movieData, setMovieData] = useState([]);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    const fetchData = async () => {
      setLoading(true);
      const { data } = await axios.get(
        `https://www.omdbapi.com/?apikey=8d79dc22&s=${term}&page=1`
      );
      setMovieData(data.Search);
      setLoading(false);
    };
    fetchData();
  }, [term]);

  return (
    <div className="searchPage">
      <div className="search__header">
        <Nav />
        <h1 className="search__title">
          Browse for <span className="text__primary">Movies</span> or{" "}
          <span className="text__primary">TV Shows</span>
        </h1>
        <SearchInput />
        <div className="background__cover"></div>
      </div>

      <div className="container">
        <div className="row">
          <h1 className="search__result">
            Search Results For:{" "}
            <span className="text__primary search__term">{term}</span>
          </h1>
          <div className="movies">
            {movieData
              .filter((movie) => movie.Poster !== "N/A")
              .slice(0, 8)
              .map((movie) => (
                <div className="movie" key={movie.imdbID}>
                  {!loading ? (
                    <>
                      <Link to={`/search/${movie.imdbID}`}>
                        <figure className="movie__img--wrapper">
                          <img
                            className="movie__img"
                            src={movie.Poster}
                            alt=""
                          />
                          <div className="movie__wrapper--bg"></div>
                          <div className="movie__desc">Click for more info</div>
                        </figure>
                        <div className="movie__title">{movie.Title}</div>
                        <div className="movie__year">{movie.Year}</div>
                      </Link>
                    </>
                  ) : (
                    <>
                      <div className="movie__img--skeleton"></div>
                      <div className="movie__title--skeleton skeleton"></div>
                      <div className="movie__year--skeleton skeleton"></div>
                    </>
                  )}
                </div>
              ))}
          </div>
        </div>
      </div>
    </div>
  );
}

export default Search;
