import React, { useState } from "react";
import { Button } from "react-bootstrap";
import "../styles/Search.css";

const Search = (props) => {
  const [search, setSearch] = useState("");

  const handleSearch = (event) => {
    setSearch(event.target.value);
  };

  const resetInput = () => {
    setSearch("");
  };

  const callSearchMovies = (event) => {
    event.preventDefault();
    props.search(search);
    resetInput();
  };

  return (
    <form className="search">
      <input
        className="input"
        value={search}
        onChange={handleSearch}
        type="text"
        placeholder="Search Movies..."
      />
      <Button
        className="input-submit"
        onClick={callSearchMovies}
        type="submit"
        value="Search"
      >
        Search{" "}
      </Button>
    </form>
  );
};

export default Search;
