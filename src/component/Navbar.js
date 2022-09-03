import React, { useContext, useEffect } from "react";
import { Link, useLocation } from "react-router-dom";
import LatestMovieContext from "../context/latestMovies/movieContext";
import M from "materialize-css";
import Theme from "./ThemeToggle";
const Navbar = () => {
  const location = useLocation();
  const { dispatch, popDispatch, theme } = useContext(LatestMovieContext);
  const switchTheme = theme === "light" ? "black" : "white";

  let url = "";
  useEffect(() => {
    let sideNav = document.querySelector("#mobile-demo");
    M.Sidenav.init(sideNav, {});
  }, []);

  const showToggle = (e) => {
    e.preventDefault();
    if (location.pathname.startsWith("/popular"))
      return popDispatch({ type: "SHOW_SEARCH" });
    if (location.pathname.startsWith("/"))
      return dispatch({ type: "SHOW_SEARCH" });
  };

  return (
    <>
      <nav>
        <div className={`nav-wrapper ${theme === "light" ? "white" : "black"}`}>
          <a href={url} className="sidenav-trigger" data-target="mobile-demo">
            <i
              className="material-icons"
              style={{ color: "#2196f3", fontSize: "2rem" }}
            >
              menu
            </i>
          </a>
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
            <span
              style={{
                fontFamily: "Leckerli One",
                color: switchTheme,
              }}
            >
              Tickler
            </span>
          </a>
          <ul className="right hide-on-med-and-down ">
            <li>
              <Theme />
            </li>
            {!location.pathname.startsWith("/about") && (
              <li>
                <a href={url} onClick={showToggle}>
                  <i
                    className="material-icons "
                    style={{
                      fontSize: "2rem",
                      color: "#2196f3",
                    }}
                  >
                    search
                  </i>
                </a>
              </li>
            )}

            <li>
              <Link
                to="/"
                style={{
                  color: switchTheme,
                  fontSize: "1.2rem",
                  textTransform: "capitalize",
                  fontFamily: "Oswald",
                }}
              >
                home
              </Link>
            </li>
            <li>
              <Link
                to="/popular"
                style={{
                  color: switchTheme,
                  fontSize: "1.2rem",
                  textTransform: "capitalize",
                  fontFamily: "Oswald",
                }}
              >
                popular
              </Link>
            </li>
            <li>
              <Link
                to="/about"
                style={{
                  color: switchTheme,
                  fontSize: "1.2rem",
                  textTransform: "capitalize",
                  fontFamily: "Oswald",
                }}
              >
                About
              </Link>
            </li>
          </ul>
        </div>
      </nav>

      <ul className="sidenav" id="mobile-demo">
        <li>
          <Theme />
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
              home
            </i>
          </Link>
        </li>
        {!location.pathname.startsWith("/about") && (
          <li>
            <a href={url} onClick={showToggle}>
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
        )}
        <li>
          <Link to="/popular">
            <i
              className="material-icons"
              style={{
                fontSize: "2rem",
                color: "#2196f3",
              }}
            >
              stars
            </i>
          </Link>
        </li>

        <li>
          <Link to="/about">
            <i
              className="material-icons"
              style={{
                fontSize: "2rem",
                color: "#2196f3",
              }}
            >
              info
            </i>
          </Link>
        </li>
      </ul>
    </>
  );
};

export default Navbar;
