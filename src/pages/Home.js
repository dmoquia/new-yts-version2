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

  return (
    <main>
      {toggleSearch && <SearchForm setSearchTerm={setSearchTerm} />}
      <PaginatedPage>
        <MovieList movies={sorted[page]} title="movies" />
      </PaginatedPage>
    </main>
  );
};

export default Home;
