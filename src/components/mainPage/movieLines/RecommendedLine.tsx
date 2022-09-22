import React from "react";
import { useQuery } from "react-query";

import MovieCard from "../MovieCard";
import axios, { TMDB } from "../../../utilities/api/axios";
import { Movie } from "../../../utilities/types/types";

const RecommendedLine: React.FC = () => {
  const recommendedQuery = useQuery(
    ["popular"],
    () => axios.get(`/discover/movie?sort_by=popular.desc&${TMDB}`).then((res) => res.data),
    { staleTime: 30000, refetchIntervalInBackground: true }
  );

  return (
    <div className="category-line">
      <h4 className="category-title">
        <span style={{ fontSize: "bolder", color: "orange" }}>Test User,</span> recommended movies
        for you
      </h4>
      <div className="movie-line">
        {recommendedQuery?.data?.results?.map((movie: Movie) => {
          return <MovieCard movie={movie} />;
        })}
      </div>
    </div>
  );
};

export default RecommendedLine;
