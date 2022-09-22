import axios from "axios";

export default axios.create({
  baseURL: "https://api.themoviedb.org/3",
});

export const TMDB: string = `api_key=7bc0647377d818f011fa22d46b59dc4a`;
