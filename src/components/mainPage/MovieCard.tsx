import React from "react";
import { useNavigate } from "react-router-dom";
import { MovieCardProps } from "../../utilities/types/types";

const MovieCard: React.FC<MovieCardProps> = ({ movie }: MovieCardProps) => {
  const navigate = useNavigate();

  return (
    <div className="movie-card" onClick={() => navigate(`/detail/${movie?.id}`)}>
      <div className="movie-card-image-container">
        <img
          className="movie-card-image"
          src={`https://image.tmdb.org/t/p/w500${movie?.poster_path}`}
          alt={movie.original_title}
        />
      </div>
      <div className="movie-card-title">{movie?.original_title}</div>
      <div className="movie-card-rating">{movie?.vote_average}</div>
    </div>
  );
};

export default MovieCard;
