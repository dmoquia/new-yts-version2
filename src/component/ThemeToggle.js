import React from "react";
import LatestMovieContext from "../context/latestMovies/movieContext";
function Theme() {
  const { theme, toggleTheme } = React.useContext(LatestMovieContext);
  return (
    <div className="switch">
      <i className="material-icons">
        {theme === "dark" ? "wb_sunny" : "brightness_2"}
      </i>
      <label>
        {theme === "dark" ? "Light Mode" : "Dark Mode"}
        <input
          type="checkbox"
          checked={theme === "dark"}
          onChange={toggleTheme}
        />
        <span className="lever"></span>
      </label>
    </div>
  );
}

export default Theme;
