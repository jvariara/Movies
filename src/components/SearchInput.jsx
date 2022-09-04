import React, { useState } from "react";
import { Button } from "@mui/material";
import "../css/SearchInput.css";
import { useNavigate } from "react-router-dom";
import { actionTypes } from "../reducer";
import { useStateValue } from "../StateProvider";

const SearchInput = () => {
  const [{}, dispatch] = useStateValue();
  const [input, setInput] = useState("");
  const navigate = useNavigate()

  const search = (event) => {
    event.preventDefault();
    console.log("you hit search >> ", input);

    dispatch({
        type: actionTypes.SET_SEARCH_TERM,
        term: input
    })

    navigate('/search')
  };

  return (
    <form class="search">
      <input
        value={input}
        id="search"
        placeholder="Search by Title/Keyword"
        onChange={(event) => setInput(event.target.value)}
      />
      <Button type="submit" className="search__button" onClick={search}>
        Search
      </Button>
    </form>
  );
};

export default SearchInput;
