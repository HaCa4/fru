import React, { useContext } from "react";
import MovieCard from "../MovieCard";

import { Context } from "../../../utilities/api/context";

import { useQuery } from "react-query";
import axios, { TMDB } from "../../../utilities/api/axios";

import qs from "qs";
import { Movie } from "../../../utilities/types/types";

const FilteredLine: React.FC = () => {
  const { releaseYearValue, categoryValue } = useContext(Context);

  const qsFilter = qs.stringify({
    with_genres: categoryValue !== "none" ? categoryValue : null,
    primary_release_year: releaseYearValue !== "none" ? releaseYearValue : null,
  });

  const filterQuery = useQuery(
    ["filter", qsFilter],
    () => axios.get(`/discover/movie?${qsFilter}&${TMDB}`).then((res) => res.data),
    { staleTime: 30000, refetchIntervalInBackground: true }
  );

  return (
    <div className="category-line">
      <h4 className="category-title">Filtered Results</h4>
      <div className="movie-line">
        {filterQuery?.data?.results?.map((movie: Movie) => {
          return <MovieCard key={movie.id} movie={movie} />;
        })}
      </div>
    </div>
  );
};
export default FilteredLine;
