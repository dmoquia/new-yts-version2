import React, { useEffect, useState, createContext } from "react";
import { paginate } from "../component/utils/utils";
export const MovieContext = createContext();
const MovieProvider = ({ children }) => {
  const [loading, setLoading] = useState(false);
  const [searchTerm, setSearchTerm] = useState("");
  const [movies, setMovies] = useState([]);
  const [sorted, setSorted] = useState([]);
  const [page, setPage] = useState(0);
  const [toggleSearch, setToggle] = useState(false);
  useEffect(() => {
    (async function getMovies() {
      setLoading(true);
      try {
        const res = await fetch(
          `https://yts.mx/api/v2/list_movies.json?query_term=${searchTerm}&limit=50`
        );
        const result = await res.json();
        const { movies } = result.data;

        if (movies) {
          const newMovie = movies.map((movie) => {
            const {
              id,
              medium_cover_image,
              slug,
              title,
              year,
              genres,
              rating,
            } = movie;
            return {
              id,
              image: medium_cover_image,
              slug,
              title,
              year,
              genres,
              rating,
            };
          });
          setMovies(newMovie);
          setSorted(paginate(newMovie));
        } else {
          setMovies([]);
        }
      } catch (error) {
        console.log(error);
      }
      setLoading(false);
    })();
  }, [searchTerm]);

  const changePage = (index) => {
    setPage(index);
  };
  const showSearch = (search) => {
    setToggle(search);
  };

  return (
    <MovieContext.Provider
      value={{
        loading,
        movies,
        sorted,
        page,
        toggleSearch,
        changePage,
        setSearchTerm,
        showSearch,
      }}
    >
      {children}
    </MovieContext.Provider>
  );
};

export default MovieProvider;
