import React from "react";
import SearchForm from "../component/SearchForm";
import { MovieContext } from "../context/movieContext";
import PaginatedPage from "../component/PaginatedPage";
const Home = () => {
  const { toggleSearch, setSearchTerm } = React.useContext(MovieContext);
  return (
    <main>
      {toggleSearch && <SearchForm setSearchTerm={setSearchTerm} />}
      <PaginatedPage />
    </main>
  );
};

export default Home;
