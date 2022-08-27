const MovieRouteService = {
  getMovies: async (props) => {
    const res = await fetch(
      `https://yts.mx/api/v2/list_movies.json?query_term=${props}&limit=50`
    );
    const result = await res.json();
    const { movies } = result.data;
    return movies;
  },
};

export default MovieRouteService;
