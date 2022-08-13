import React from "react";
import { Link } from "react-router-dom";
import { MovieContext } from "../context/movieContext";
import M from "materialize-css";
const Navbar = () => {
  const { toggleSearch, showSearch } = React.useContext(MovieContext);
  let url = "";
  React.useEffect(() => {
    let sideNav = document.querySelector("#mobile-demo");
    M.Sidenav.init(sideNav, {});
  }, []);
  const showToggle = (e) => {
    e.preventDefault();
    showSearch(!toggleSearch);
  };
  return (
    <>
      <nav>
        <div className="nav-wrapper  white">
          <a href={url} className="sidenav-trigger" data-target="mobile-demo">
            <i className="material-icons" style={{ color: "#2196f3" }}>
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
