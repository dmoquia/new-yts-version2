import React, { useRef, useEffect } from "react";

const SearchForm = ({ setSearchTerm }) => {
  const searchValue = useRef("");

  useEffect(() => {
    searchValue.current.focus();
  }, []);

  const handleSubmit = (e) => {
    e.preventDefault();
  };
  const searchMovie = () => {
    setSearchTerm(searchValue.current.value);
  };

  return (
    <section className="section">
      <form onSubmit={handleSubmit} className="form search-form">
        <div className="form-control">
          <div>
            <label htmlFor="title">search your favorite movie</label>
            <input
              type="text"
              name="title"
              id="title"
              className="outline"
              onChange={searchMovie}
              ref={searchValue}
            />
          </div>
        </div>
      </form>
    </section>
  );
};

export default SearchForm;
