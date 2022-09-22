import axios, { TMDB } from "../api/axios";
import { Movie } from "../types/types";

export const getPopularMovies = (setPopularMovies: any) => {
  axios.get(`/discover/movie?sort_by=popularity.desc&${TMDB}`).then((res) => {
    setPopularMovies(res.data.results.slice(0, 10));
  });
};

export const getKidsMovies = (setRatedMovies: any) => {
  axios
    .get(`/discover/movie?with_genres=16&sort_by=popularity.desc&${TMDB}&include_adult=false`)
    .then((res) => {
      setRatedMovies(res.data.results.slice(0, 10));
    });
};

export const getDramaMovies = (setDramaMovies: any) => {
  axios
    .get(`/discover/movie?with_genres=18&primary_release_year=2022&${TMDB}`)
    .then((res) => setDramaMovies(res.data.results.slice(0, 10)));
};

export const getComedyMovies = (setComedyMovies: any) => {
  axios
    .get(`/discover/movie?with_genres=35&sort_by=popularity.desc&${TMDB}`)
    .then((res) => setComedyMovies(res.data.results.slice(0, 10)));
};

export const getSingleMovie = (
  setSelectedMovie: React.Dispatch<React.SetStateAction<Movie | undefined>>,
  id: string | undefined
) => {
  axios.get(`/movie/${id}?${TMDB}`).then((res) => {
    setSelectedMovie(res.data);
  });
};
