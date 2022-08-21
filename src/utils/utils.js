export function paginate(movies) {
  const itemsPerPage = 8;
  // const numberOfPage = products.length / itemsPerPage;
  const numberOfPage = Math.ceil(movies.length / itemsPerPage);

  // const newProducts = Array.from({ length: numberOfPage }, () => {
  //   return products.slice(0, itemsPerPage);
  // });

  const newMovies = Array.from({ length: numberOfPage }, (_, index) => {
    const start = index * itemsPerPage;
    return movies.slice(start, start + itemsPerPage);
  });

  return newMovies;
}

export function addComma(str) {
  return str?.map((char, i) => {
    return (
      <span key={i} style={{ display: "inline" }}>
        {char} {i < str.length - 1 ? "," : "."}
      </span>
    );
  });
}

export function getNewMovies(props) {
  const { id, medium_cover_image, slug, title, year, genres, rating } = props;
  return {
    id,
    image: medium_cover_image,
    slug,
    title,
    year,
    genres,
    rating,
  };
}
function utils(props) {
  const res = props.map((item) => item);
  const url = `https://yts.mx/torrent/download/`;
  return res ? (
    <div
      style={{
        display: "flex",
        justifyContent: "center",
        alignContent: "center",
      }}
    >
      {res.map((item, index) => (
        <div key={index}>
          <h4>{item.quality}</h4>
          <h4>{item.type}</h4>
          <div style={{ margin: "auto 0.5rem " }}>
            <a href={`${url}${item.hash}`} className="btn btn-primary">
              download
            </a>
          </div>
        </div>
      ))}
    </div>
  ) : null;
}

export default utils;
