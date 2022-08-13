import React from "react";
import MovieList from "./MovieList";
import { MovieContext } from "../context/movieContext";
import Loader from "./Loader";
function PaginatedPage() {
  const { sorted, page, changePage, toggleSearch } =
    React.useContext(MovieContext);

  if (sorted[page]) {
    return (
      <>
        {sorted.length > 1 && [
          <article
            className={
              toggleSearch ? "pagination-buttons" : "toggled-pagination-buttons"
            }
            key="0"
          >
            {/* prev */}
            {page > 0 && (
              <button
                className="prev-page-btn"
                onClick={() => changePage(page - 1)}
              >
                <i className="material-icons">chevron_left</i>
              </button>
            )}

            {sorted.map((_, index) => {
              return (
                <button
                  onClick={() => changePage(index)}
                  key={index}
                  className={`page-btn ${page === index && `page-btn-current`}`}
                >
                  {index + 1}
                </button>
              );
            })}
            {page < sorted.length - 1 && (
              <button
                className="next-page-btn"
                onClick={() => changePage(page + 1)}
              >
                <i className="material-icons">chevron_right</i>
              </button>
            )}

            {/* next */}
          </article>,
          <MovieList movies={sorted[page]} key="1" />,
          <article className="pagination-buttons" key="2">
            {/* prev */}
            {page > 0 && (
              <button
                className="prev-page-btn"
                onClick={() => changePage(page - 1)}
              >
                <i className="material-icons">chevron_left</i>
              </button>
            )}

            {sorted.map((_, index) => {
              return (
                <button
                  onClick={() => changePage(index)}
                  key={index}
                  className={`page-btn ${page === index && `page-btn-current`}`}
                >
                  {index + 1}
                </button>
              );
            })}
            {page < sorted.length - 1 && (
              <button
                className="next-page-btn"
                onClick={() => changePage(page + 1)}
              >
                <i className="material-icons">chevron_right</i>
              </button>
            )}

            {/* next */}
          </article>,
        ]}
      </>
    );
  } else {
    return <Loader />;
  }
}

export default PaginatedPage;
