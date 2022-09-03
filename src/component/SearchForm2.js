import React, { useEffect, useRef } from "react";

function SearchForm2({ setSearchTerm }) {
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
    <div className="new-chat-window">
      <form onSubmit={handleSubmit}>
        <i className="fa fa-search" />
        <input
          type="text"
          className="new-chat-window-input"
          id="new-chat-window-input"
          placeholder="search"
          onChange={searchMovie}
          ref={searchValue}
        />
      </form>
    </div>
  );
}

export default SearchForm2;
