import React, { useContext } from "react";
import { useQuery } from "react-query";
import qs from "qs";

import MovieCard from "../MovieCard";

import axios, { TMDB } from "../../../utilities/api/axios";
import { Context } from "../../../utilities/api/context";
import { Movie } from "../../../utilities/types/types";

const SearchedLine: React.FC = () => {
  const { searchValue } = useContext(Context);

  const qsSearch = qs.stringify({
    query: searchValue !== "" ? searchValue : null,
  });

  const searchQuery = useQuery(
    ["search", qsSearch],
    () => axios.get(`/search/movie?${qsSearch}&${TMDB}`).then((res) => res.data),
    { staleTime: 30000, refetchIntervalInBackground: true }
  );
  return (
    <>
      {searchQuery?.data?.results.length && (
        <div className="category-line">
          <h4 className="category-title">Search Results</h4>
          <div className="movie-line">
            {searchQuery?.data?.results?.map((movie: Movie) => {
              return <MovieCard key={movie.id} movie={movie} />;
            })}
          </div>
        </div>
      )}
    </>
  );
};

export default SearchedLine;
