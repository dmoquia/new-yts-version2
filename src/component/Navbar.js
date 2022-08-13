import React from "react";
import { Link } from "react-router-dom";
import { MovieContext } from "../context/movieContext";
const Navbar = () => {
  const { toggleSearch, showSearch } = React.useContext(MovieContext);
  let url = "";
  return (
    <nav>
      <div className="nav-wrapper  white">
        <a href="/" className="brand-logo" style={{ color: "black" }}>
          <i
            className="material-icons"
            style={{
              color: "#2196f3",
              marginLeft: "3rem",
              marginRight: "0.5rem",
            }}
          >
            movie
          </i>
          <span style={{ fontFamily: "Leckerli One" }}>Tickler</span>
        </a>
        <ul className="right hide-on-med-and-down ">
          <li>
            <a href={url} onClick={() => showSearch(!toggleSearch)}>
              <i
                className="material-icons"
                style={{
                  fontSize: "2rem",
                  color: "#2196f3",
                }}
              >
                search
              </i>
            </a>
          </li>
          <li>
            <Link to="/">
              <i
                className="material-icons"
                style={{
                  fontSize: "2rem",
                  color: "#2196f3",
                }}
              >
                menu
              </i>
            </Link>
          </li>
          <li>
            <Link
              to="/about"
              style={{
                color: "black",
                fontSize: "1.2rem",
                fontFamily: "Leckerli One",
              }}
            >
              About
            </Link>
          </li>
        </ul>
      </div>
    </nav>
  );
};

export default Navbar;
