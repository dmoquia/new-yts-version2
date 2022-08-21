import React from "react";
import { Link } from "react-router-dom";
import { defaultPic } from "../utils/defaultImg";
export default function Movie({ id, image, title, year, rating, genres }) {
  const [error, setError] = React.useState(false);
  const loadFailed = () => {
    setError(true);
  };

  return (
    <article className="movie">
      <div className="img-container">
        <img
          src={error ? defaultPic : image}
          onError={loadFailed}
          alt={title || "default title"}
        />

        <Link to={`/movie/${id}`} className="btn btn-primary movie-link">
          details
        </Link>
        <p className="rating-link">{rating}/10</p>

        <p className="genres-link">{genres ? genres[0] : "loading"}</p>
      </div>
      <div className="movie-footer">
        <p className="movie-title">{title}</p>
        <p className="movie-title">{year}</p>
      </div>
    </article>
  );
}
