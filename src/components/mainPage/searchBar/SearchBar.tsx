import React from "react";
import SearchFilter from "./SearchFilter";
import SearchInput from "./SearchInput";

const SearchBar: React.FC = () => {
  return (
    <div className="search">
      <div className="search-background">
        <SearchInput />

        <span style={{ color: "white", height: "1rem", fontWeight: "700" }}>or</span>

        <SearchFilter />
      </div>
    </div>
  );
};

export default SearchBar;
