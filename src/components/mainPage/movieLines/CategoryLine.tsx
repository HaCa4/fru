import React from "react";

import MovieCard from "../MovieCard";
import { CategoryLineProps, Movie } from "../../../utilities/types/types";

const CategoryLine: React.FC<CategoryLineProps> = ({ category }: CategoryLineProps) => {
  return (
    <div className="category-line">
      <h4 className="category-title">{category.name}</h4>
      <div className="movie-line">
        {category?.data?.map((movie: Movie, index: number) => {
          return (
            <div key={index}>
              <MovieCard movie={movie} />
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default CategoryLine;
