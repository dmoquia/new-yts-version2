import React, { useContext, useEffect } from "react";
import { Link, useLocation } from "react-router-dom";
import { LatestMovieContext } from "../context/latestMovieContext";
import M from "materialize-css";
const Navbar = () => {
  const location = useLocation();
  const { dispatch } = useContext(LatestMovieContext);
  let url = "";
  useEffect(() => {
    let sideNav = document.querySelector("#mobile-demo");
    M.Sidenav.init(sideNav, {});
  }, []);
  const showToggle = (e) => {
    e.preventDefault();
    dispatch({ type: "SHOW_SEARCH" });
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
            {!location.pathname.startsWith("/popular") &&
              !location.pathname.startsWith("/about") && (
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
                {/* <i
                  className="material-icons"
                  style={{
                    fontSize: "2rem",
                    color: "#2196f3",
                  }}
                >
                  home
                </i> */}
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
                {/* <i
                  className="material-icons"
                  style={{
                    fontSize: "1rem",
                    color: "#2196f3",
                  }}
                >
                  stars{" "}
                  <span
                    style={{
                      color: "black",
                      fontSize: "1.2rem",

                      fontFamily: "Yanone Kaffeesatz",
                    }}
                  >
                    popular
                  </span>
                </i> */}
                popular
              </Link>
            </li>
            <li>
              <Link
                to="/about"
                style={{
                  color: "black",
                  fontSize: "1.5rem",
                  // fontFamily: "Leckerli One",
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
        {!location.pathname.startsWith("/popular") && (
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
