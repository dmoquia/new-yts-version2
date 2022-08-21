import React, { useContext } from "react";
import { LatestMovieContext } from "../context/latestMovieContext";
import Loader from "./Loader";
function PaginatedPage({ children }) {
  const {
    state: { sorted, page, toggleSearch },
    dispatch,
  } = useContext(LatestMovieContext);
  const changePage = (index) => {
    dispatch({ type: "SET_PAGE", payload: index });
  };
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

          <article key="1">{children}</article>,

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
