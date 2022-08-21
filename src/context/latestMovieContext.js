import React, { createContext, useReducer, useEffect } from "react";
import { paginate } from "../utils/utils";
import reducer from "./movieReducer";
export const LatestMovieContext = createContext();

function LatestMovieProvider({ children }) {
  const initialState = {
    searchTerm: "",
    movies: [],
    loading: true,
    popular: [],
    sorted: [],
    sortedPop: [],
    page: 0,
    toggleSearch: false,
  };

  const [state, dispatch] = useReducer(reducer, initialState);

  useEffect(() => {
    (async function getMovies() {
      try {
        const res = await fetch(
          `https://yts.mx/api/v2/list_movies.json?query_term=${state.searchTerm}&limit=50`
        );
        const result = await res.json();
        const { movies } = result.data;

        if (movies) {
          const newMovies = movies.map((movie) => {
            const {
              id,
              medium_cover_image,
              slug,
              title,
              year,
              genres,
              rating,
            } = movie;
            return {
              id,
              image: medium_cover_image,
              slug,
              title,
              year,
              genres,
              rating,
            };
          });

          dispatch({ type: "GET_NEW_MOVIES", payload: newMovies });
          dispatch({ type: "GET_SORTED", payload: paginate(newMovies) });
        } else {
          dispatch({ type: "FAILED_MOVIES", payload: [] });
        }
      } catch (error) {
        dispatch({ type: "FAILED_MOVIES", payload: error });
        console.log(error);
      }
    })();
  }, [state.searchTerm]);

  useEffect(() => {
    (async function getPopular() {
      try {
        const res = await fetch(
          `https://yts.mx/api/v2/list_movies.json?sort_by=download_count&limit=50`
        );
        const result = await res.json();
        const { movies } = result.data;
        if (movies) {
          const mostPopular = movies.map((movie) => {
            const {
              id,
              medium_cover_image,
              slug,
              title,
              year,
              genres,
              rating,
            } = movie;
            return {
              id,
              image: medium_cover_image,
              slug,
              title,
              year,
              genres,
              rating,
            };
          });
          dispatch({ type: "GET_POPULAR", payload: mostPopular });
          dispatch({ type: "GET_SORTED_POP", payload: paginate(mostPopular) });
        } else {
          dispatch({ type: "FETCH_FAILED", payload: [] });
        }
      } catch (error) {
        dispatch({ type: "FETCH_FAILED", payload: error });
        console.log(error);
      }
    })();
  }, []);

  return (
    <LatestMovieContext.Provider value={{ state, dispatch }}>
      {children}
    </LatestMovieContext.Provider>
  );
}

export default LatestMovieProvider;
