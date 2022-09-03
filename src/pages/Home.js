import React, { useContext } from "react";
import SearchForm from "../component/SearchForm";
import PaginatedPage from "../component/PaginatedPage";
import MovieList from "../component/MovieList";
import LatestMovieContext from "../context/latestMovies/movieContext";
import SearchForm2 from "../component/SearchForm2";

const Home = () => {
  const { state, dispatch, theme } = useContext(LatestMovieContext);
  const { sorted, page, loading, toggleSearch } = state;
  const setSearchTerm = (setTerm) => {
    dispatch({ type: "SET_SEARCH_TERM", payload: setTerm });
  };
  const changePage = (index) => {
    dispatch({ type: "SET_PAGE", payload: index });
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

      <PaginatedPage changePage={changePage} {...state}>
        <MovieList movies={sorted[page]} loading={loading} title="movies" />
      </PaginatedPage>
    </main>
  );
};

export default Home;
