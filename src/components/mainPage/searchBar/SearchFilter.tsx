import React, { useContext, useEffect, useState } from "react";
import { useQuery } from "react-query";
import axios, { TMDB } from "../../../utilities/api/axios";

import { Context } from "../../../utilities/api/context";
import {
  getGenres,
  handleClear,
  handleFilter,
} from "../../../utilities/helper-functions/searchBarHelpers";
import { Genre } from "../../../utilities/types/types";

const SearchFilter: React.FC = () => {
  const {
    setSearchValue,
    setReleaseYearValue,
    setCategoryValue,
    setIsFilterSelected,
    setIsSearchSelected,
  } = useContext(Context);

  const [category, setCategory] = useState<string>("");
  const [year, setYear] = useState<string>("");
  const [genres, setGenres] = useState<Genre[]>();

  const yearsArray = [];

  for (let i = 1990; i < 2023; i++) {
    yearsArray.push(i);
  }

  useEffect(() => {
    getGenres(setGenres);
  }, []);
  return (
    <>
      <div className="search-form">
        <div className="select-div">
          <select
            className="search-select"
            name="category"
            onChange={(event) => setCategory(event.target.value)}
            value={category}
          >
            <option value="none">Category</option>
            {genres?.map((genre: Genre) => {
              return (
                <option key={genre.id} value={genre.id}>
                  {genre.name}
                </option>
              );
            })}
          </select>

          <select
            name="year"
            className="search-select"
            onChange={(event) => setYear(event.target.value)}
            value={year}
            placeholder="Release Year"
          >
            <option className="search-select-option" value="none">
              Release Year
            </option>
            {yearsArray.map((year, index) => {
              return (
                <option key={index} className="search-select-option">
                  {" "}
                  {year}{" "}
                </option>
              );
            })}
          </select>

          <button
            className="search-button"
            onClick={() =>
              handleFilter(
                setCategoryValue,
                setReleaseYearValue,
                setIsFilterSelected,
                setIsSearchSelected,
                setSearchValue,
                category,
                year
              )
            }
          >
            Filter
          </button>
        </div>
      </div>
      <button
        className="clear-button"
        onClick={() =>
          handleClear(
            setIsFilterSelected,
            setIsSearchSelected,
            setSearchValue,
            setCategory,
            setYear
          )
        }
      >
        Clear
      </button>
    </>
  );
};

export default SearchFilter;
