import React from "react";
import MovieList from "../components/mainPage/MovieList";
import SearchBar from "../components/mainPage/searchBar/SearchBar";

export const Main: React.FC = () => {
  return (
    <div>
      <SearchBar />
      <MovieList />
    </div>
  );
};
