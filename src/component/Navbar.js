import React, { useContext, useEffect } from "react";
import { Link, useLocation } from "react-router-dom";
import { LatestMovieContext } from "../context/latestMovieContext";
import M from "materialize-css";
const Navbar = () => {
  const location = useLocation();
  const { dispatch, popDispatch } = useContext(LatestMovieContext);
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
        <div className="nav-wrapper  white">
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
            <span style={{ fontFamily: "Leckerli One" }}>Tickler</span>
          </a>
          <ul className="right hide-on-med-and-down ">
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
              <Link
                to="/"
                style={{
                  color: "black",
                  fontSize: "1.5rem",

                  fontFamily: "Yanone Kaffeesatz",
                }}
              >
                home
              </Link>
            </li>
            <li>
              <Link
                to="/popular"
                style={{
                  color: "black",
                  fontSize: "1.5rem",

                  fontFamily: "Yanone Kaffeesatz",
                }}
              >
                popular
              </Link>
            </li>
            <li>
              <Link
                to="/about"
                style={{
                  color: "black",
                  fontSize: "1.5rem",
                  fontFamily: "Yanone Kaffeesatz",
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
