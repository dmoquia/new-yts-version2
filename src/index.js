import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./App";
import reportWebVitals from "./reportWebVitals";
import { BrowserRouter } from "react-router-dom";
// import MovieProvider from "./context/movieContext";
import LatestMovieProvider from "./context/latestMovieContext";
const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <LatestMovieProvider>
    {/* <MovieProvider> */}
    <BrowserRouter>
      <App />
    </BrowserRouter>
    {/* </MovieProvider> */}
  </LatestMovieProvider>
);

reportWebVitals();
