import React from "react";
import MovieList from "../component/MovieList";
import { LatestMovieContext } from "../context/latestMovieContext";
import PaginatedPage from "../component/PaginatedPage";
import SearchForm from "../component/SearchForm";
const PopularDownload = () => {
  const { popState, popDispatch } = React.useContext(LatestMovieContext);
  const { sorted, page, loading, toggleSearch } = popState;

  const setSearchTerm = (setTerm) => {
    popDispatch({ type: "SET_SEARCH_TERM", payload: setTerm });
  };
  const changePage = (index) => {
    popDispatch({ type: "SET_PAGE", payload: index });
  };
  return (
    <main>
      {toggleSearch && <SearchForm setSearchTerm={setSearchTerm} />}
      <PaginatedPage changePage={changePage} {...popState}>
        <MovieList
          movies={sorted[page]}
          loading={loading}
          title="popular movies"
        />
      </PaginatedPage>
    </main>
  );
};

export default PopularDownload;
