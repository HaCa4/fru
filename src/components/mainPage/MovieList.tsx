import React, { useContext } from "react";
import { Context } from "../../utilities/api/context";

import FilteredLine from "./movieLines/FilteredLine";
import RecommendedLine from "./movieLines/RecommendedLine";
import SearchedLine from "./movieLines/SearchedLine";
import StandardLines from "./movieLines/StandardLines";

const MovieList = () => {
  const { isFilterSelected, isSearchSelected, isUserIn } = useContext(Context);

  return (
    <div>
      {isFilterSelected && <FilteredLine />}
      {isSearchSelected && <SearchedLine />}
      {isUserIn && <RecommendedLine />}
      <StandardLines />
    </div>
  );
};

export default MovieList;
