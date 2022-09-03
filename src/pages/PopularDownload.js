import React, { useContext } from "react";
import MovieList from "../component/MovieList";
import LatestMovieContext from "../context/latestMovies/movieContext";
import PaginatedPage from "../component/PaginatedPage";
import SearchForm2 from "../component/SearchForm2";
import SearchForm from "../component/SearchForm";
import { SET_SEARCH_TERM, SET_PAGE } from "../context/types";
const PopularDownload = () => {
  const { popState, popDispatch, theme } = useContext(LatestMovieContext);
  const { sorted, page, loading, toggleSearch } = popState;

  const setSearchTerm = (setTerm) => {
    popDispatch({ type: SET_SEARCH_TERM, payload: setTerm });
  };
  const changePage = (index) => {
    popDispatch({ type: SET_PAGE, payload: index });
  };
  const SearchFormOption =
    theme === "dark" ? (
      <SearchForm2 setSearchTerm={setSearchTerm} />
    ) : (
      <SearchForm setSearchTerm={setSearchTerm} />
    );
  return (
    <main>
      {toggleSearch && SearchFormOption}
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
