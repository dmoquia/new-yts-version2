import React from "react";
import MovieList from "../component/MovieList";
import { LatestMovieContext } from "../context/latestMovieContext";
import PaginatedPage from "../component/PaginatedPage";
const PopularDownload = () => {
  const {
    state: { sortedPop: sorted, page, loading },
  } = React.useContext(LatestMovieContext);

  return (
    <PaginatedPage>
      <MovieList
        movies={sorted[page]}
        loading={loading}
        title="popular movies"
      />
    </PaginatedPage>
  );
};

export default PopularDownload;
