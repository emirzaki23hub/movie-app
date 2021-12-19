import React, { useReducer, useEffect, useState } from "react";
import "./App.css";
import Header from "./components/Header";
import Movie from "./components/Movie";
import { initialState, reducer } from "./store";
import spinner from "../src/assets/Spin.gif";
import Detail from "./components/Detail";
import axios from "axios";

const API = "http://www.omdbapi.com/?s=harry+potter&apikey=83b6585a";

function App() {
  const [state, dispatch] = useReducer(reducer, initialState);
  const [selectedMovie, onMovieSelect] = useState();

  useEffect(() => {
    axios.get(API).then((jsonResponse) => {
      dispatch({
        type: "SEARCH_MOVIES_SUCCESS",
        payload: jsonResponse.data.Search,
      });
    });
  }, []);

  const search = (search) => {
    dispatch({
      type: "SEARCH_MOVIES_REQ",
    });

    axios(`https://www.omdbapi.com/?s=${search}&apikey=83b6585a`).then(
      (jsonResponse) => {
        if (jsonResponse.data.Response === "True") {
          dispatch({
            type: "SEARCH_MOVIES_SUCCESS",
            payload: jsonResponse.data.Search,
          });
        } else {
          dispatch({
            type: "SEARCH_MOVIES_FAILURE",
            error: jsonResponse.data.Error,
          });
        }
      }
    );
  };

  const { movies, errorMessage, loading } = state;

  const displayMovies =
    loading && !errorMessage ? (
      <img className="spinner" src={spinner} alt="Loading spinner" />
    ) : errorMessage ? (
      <div className="errorMessage">{errorMessage}</div>
    ) : (
      movies.map((movie, index) => (
        <Movie
          key={`${index}-${movie.Title}`}
          movie={movie}
          onMovieSelect={onMovieSelect}
        />
      ))
    );

  return (
    <>
      <Header text="FinProHD" search={search} />
      <div className="container">
        {selectedMovie && (
          <Detail selectedMovie={selectedMovie} onMovieSelect={onMovieSelect} />
        )}
        <div className="movies">{displayMovies}</div>
      </div>
    </>
  );
}

export default App;
