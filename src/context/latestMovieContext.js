import React, { createContext, useReducer, useEffect } from "react";
import { paginate, helper } from "../utils/utils";
import reducer from "./movieReducer";

export const LatestMovieContext = createContext();

function LatestMovieProvider({ children }) {
  const initialState = {
    searchTerm: "",
    movies: [],
    loading: true,
    sorted: [],
    page: 0,
    toggleSearch: false,
  };

  const [state, dispatch] = useReducer(reducer, initialState);
  const [popState, popDispatch] = useReducer(reducer, initialState);

  useEffect(() => {
    (async function getMovies() {
      try {
        const res = await fetch(
          `https://yts.mx/api/v2/list_movies.json?query_term=${state.searchTerm}&limit=50`
        );
        const result = await res.json();
        const { movies } = result.data;

        if (movies) {
          const newMovies = movies.map((movie) => helper(movie));
          dispatch({ type: "GET_NEW_MOVIES", payload: newMovies });
          dispatch({ type: "GET_SORTED", payload: paginate(newMovies) });
        } else {
          dispatch({ type: "FETCH_FAILED", payload: [] });
        }
      } catch (error) {
        dispatch({ type: "FETCH_FAILED", payload: error });
        console.log(error);
      }
    })();
  }, [state.searchTerm]);

  useEffect(() => {
    (async function getPopular() {
      try {
        const res = await fetch(
          `https://yts.mx/api/v2/list_movies.json?sort_by=download_count&query_term=${popState.searchTerm}&limit=50`
        );
        const result = await res.json();
        const { movies } = result.data;
        if (movies) {
          const mostPopular = movies.map((movie) => helper(movie));

          popDispatch({ type: "GET_NEW_MOVIES", payload: mostPopular });
          popDispatch({ type: "GET_SORTED", payload: paginate(mostPopular) });
        } else {
          popDispatch({ type: "FETCH_FAILED", payload: [] });
        }
      } catch (error) {
        popDispatch({ type: "FETCH_FAILED", payload: error });
        console.log(error);
      }
    })();
  }, [popState.searchTerm]);

  return (
    <LatestMovieContext.Provider
      value={{ state, popState, dispatch, popDispatch }}
    >
      {children}
    </LatestMovieContext.Provider>
  );
}

export default LatestMovieProvider;
