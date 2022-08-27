import React from "react";
import MovieList from "../component/MovieList";
import { LatestMovieContext } from "../context/latestMovieContext";
import PaginatedPage from "../component/PaginatedPage";
const PopularDownload = () => {
  const { popState, popDispatch } = React.useContext(LatestMovieContext);
  const { sorted, page, loading } = popState;

  const changePage = (index) => {
    popDispatch({ type: "SET_PAGE", payload: index });
  };
  return (
    <PaginatedPage changePage={changePage} {...popState}>
      <MovieList
        movies={sorted[page]}
        loading={loading}
        title="popular movies"
      />
    </PaginatedPage>
  );
};

export default PopularDownload;
