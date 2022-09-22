import React, { useContext } from "react";
import { Context } from "../../../utilities/api/context";
import { handleSearch } from "../../../utilities/helper-functions/searchBarHelpers";

const SearchInput: React.FC = () => {
  const { searchValue, setSearchValue, setIsFilterSelected, setIsSearchSelected } =
    useContext(Context);

  return (
    <div className="search-form">
      <input
        className="search-input"
        placeholder="Search by Movie Name"
        name="name"
        type="text"
        onChange={(event) => {
          handleSearch(event, setSearchValue, setIsFilterSelected);
          setIsSearchSelected(true);
        }}
        value={searchValue}
      />
    </div>
  );
};

export default SearchInput;
