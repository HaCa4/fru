import React, { useEffect, useState } from "react";

import CategoryLine from "./CategoryLine";

import {
  getComedyMovies,
  getDramaMovies,
  getPopularMovies,
  getKidsMovies,
} from "../../../utilities/helper-functions/movieLineHelpers";
import { Category, Movie } from "../../../utilities/types/types";

const StandardLines: React.FC = () => {
  const [popularMovies, setPopularMovies] = useState<Movie[]>();
  const [kidsMovies, setKidsMovies] = useState<Movie[]>();
  const [dramaMovies, setDramaMovies] = useState<Movie[]>();
  const [comedyMovies, setComedyMovies] = useState<Movie[]>();

  const standardCategoriesArray: Category[] = [
    {
      name: "Popular Movies",
      data: popularMovies,
    },
    {
      name: "Drama Movies",
      data: dramaMovies,
    },
    {
      name: "Comedy Movies",
      data: comedyMovies,
    },
    {
      name: "Kids Movies",
      data: kidsMovies,
    },
  ];

  useEffect(() => {
    getPopularMovies(setPopularMovies);
    getKidsMovies(setKidsMovies);
    getDramaMovies(setDramaMovies);
    getComedyMovies(setComedyMovies);
  }, []);

  return (
    <div>
      {standardCategoriesArray.map((category, index) => {
        return (
          <div key={index}>
            <CategoryLine category={category} />
          </div>
        );
      })}
    </div>
  );
};

export default StandardLines;
