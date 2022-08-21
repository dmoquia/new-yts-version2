import React, { useState, useEffect } from "react";
import { useParams, useNavigate } from "react-router-dom";
import Modal from "../component/Modal";
import utils from "../utils/utils";
import { defaultPic } from "../utils/defaultImg";
import { addComma } from "../utils/utils";
import Loader from "../component/Loader";

const SingleMovie = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(false);
  const [movie, setMovie] = useState(null);

  const loadFailed = () => {
    setError(true);
  };

  useEffect(() => {
    (async function getMovieDetails() {
      setLoading(true);
      try {
        const res = await fetch(
          `https://yts.mx/api/v2/movie_details.json?movie_id=${id}`
        );
        const data = await res.json();
        const {
          data: { movie },
        } = data;
        if (movie) {
          const {
            title_long: title,
            large_cover_image: image,
            year,
            genres,
            description_intro: desc,
            torrents,
            yt_trailer_code: trailer,
          } = movie;
          const newMovie = {
            title,
            image,
            year,
            genres,
            desc,
            torrents,
            trailer,
          };
          setMovie(newMovie);
        } else {
          setMovie(null);
        }
      } catch (error) {
        console.log(error);
      }
      setLoading(false);
    })();
  }, [id]);

  if (loading) {
    return <Loader />;
  }
  if (!movie) {
    return <h2 className="section-title">no movie to display</h2>;
  }
  const { title, image, year, genres, desc, torrents, trailer } = movie;
  return (
    <section className="section movie-section">
      <h2 className="section-title">{title}</h2>
      <div className="single">
        <img
          src={error ? defaultPic : image}
          alt={title}
          onError={loadFailed}
        />
        <div className="single-info">
          <p>title: {title}</p>
          <p>year: {year}</p>
          <p>genres: {addComma(genres)}</p>
          <p>description: {desc}</p>
          <div>
            <button
              type="button"
              className="waves-effect waves-light btn"
              style={{ width: "8.5rem", marginBottom: "1.5rem" }}
              onClick={() => {
                navigate(-1);
              }}
            >
              back
            </button>
          </div>
          <Modal>{utils(torrents)}</Modal>

          <iframe
            style={{ marginTop: "1rem" }}
            title="selected movie trailer frame"
            height="350px"
            width="450px"
            src={`https://www.youtube.com/embed/${trailer}`}
            frameBorder="0"
            allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture"
            allowFullScreen
          ></iframe>
        </div>
      </div>
    </section>
  );
};

export default SingleMovie;
