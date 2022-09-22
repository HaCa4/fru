import React, { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";

import { getSingleMovie } from "../utilities/helper-functions/movieLineHelpers";
import { Movie } from "../utilities/types/types";

const Detail: React.FC = () => {
  const [selectedMovie, setSelectedMovie] = useState<Movie>();

  const { id } = useParams();

  const navigate = useNavigate();

  useEffect(() => {
    getSingleMovie(setSelectedMovie, id);
  }, []);

  if (!selectedMovie?.vote_average) {
    navigate("*");
  }

  return (
    <div className="detail-background">
      <div className="detail">
        <div>
          <img
            className="detail-image"
            src={`https://image.tmdb.org/t/p/w500${selectedMovie?.poster_path}`}
            alt={`${selectedMovie?.original_title}`}
          />
        </div>
        <div className="detail-information">
          <h3 className="detail-title">{selectedMovie?.original_title}</h3>
          <h4>
            {`Rate: ${selectedMovie?.vote_average?.toFixed(1)}`}
            <br />
            {`Release Year: ${selectedMovie?.release_date?.slice(0, 4)}`}
          </h4>
          <h4>Overview:</h4>
          <p className="detail-content">{selectedMovie?.overview}</p>
        </div>
      </div>
    </div>
  );
};

export default Detail;
