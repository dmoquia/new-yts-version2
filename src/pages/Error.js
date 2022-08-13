import React from "react";
import { Link } from "react-router-dom";
const Error = () => {
  return (
    <section>
      <div className="container">
        <h1>opps! it's a dead end</h1>
        <Link to="/" className="btn btn-primary orange">
          back home
        </Link>
      </div>
    </section>
  );
};

export default Error;
