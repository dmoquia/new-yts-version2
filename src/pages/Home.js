import React, { useContext } from "react";
import SearchForm from "../component/SearchForm";
import PaginatedPage from "../component/PaginatedPage";
import MovieList from "../component/MovieList";
import { LatestMovieContext } from "../context/latestMovieContext";

const Home = () => {
  const { state, dispatch } = useContext(LatestMovieContext);
  const { sorted, page, toggleSearch } = state;
  const setSearchTerm = (setTerm) => {
    dispatch({ type: "SET_SEARCH_TERM", payload: setTerm });
  };
  const changePage = (index) => {
    dispatch({ type: "SET_PAGE", payload: index });
  };

  return (
    <main>
      {toggleSearch && <SearchForm setSearchTerm={setSearchTerm} />}

      <PaginatedPage changePage={changePage} {...state}>
        <MovieList movies={sorted[page]} title="movies" />
      </PaginatedPage>
    </main>
  );
};

export default Home;
