export type Movie = {
  adult?: boolean;
  backdrop_path?: string;
  belongs_to_collection?: null;
  budget?: number;
  genres?: {
    id?: number;
    name?: string;
  }[];
  homepage?: string;
  id?: 985939;
  imdb_id?: string;
  original_language?: string;
  original_title?: string;
  overview?: string;
  popularity?: number;
  poster_path?: string;
  production_companies?: {
    id?: number;
    logo_path?: string;
    name?: string;
    origin_country?: string;
  }[];
  production_countries?: {
    iso_3166_1?: string;
    name?: string;
  }[];
  release_date?: string;
  revenue?: number;
  runtime?: number;
  spoken_languages?: {
    english_name?: string;
    iso_639_1?: string;
    name?: string;
  }[];
  status?: string;
  tagline?: string;
  title?: string;
  video?: boolean;
  vote_average?: number;
  vote_count?: 767;
};

export type Genre = {
  id: number;
  name: string;
};

export type MovieCardProps = {
  movie: Movie;
};

export type Category = {
  name: string;
  data: Movie[] | undefined;
};

export type CategoryLineProps = {
  category: Category;
};

export type ContextProps = {
  isSearchSelected: boolean;
  setIsSearchSelected: React.Dispatch<React.SetStateAction<boolean>>;
  isFilterSelected: boolean;
  setIsFilterSelected: React.Dispatch<React.SetStateAction<boolean>>;
  isUserIn: boolean;
  setIsUserIn: React.Dispatch<React.SetStateAction<boolean>>;
  searchValue: string;
  setSearchValue: React.Dispatch<React.SetStateAction<string>>;
  categoryValue: string;
  setCategoryValue: React.Dispatch<React.SetStateAction<string>>;
  releaseYearValue: string;
  setReleaseYearValue: React.Dispatch<React.SetStateAction<string>>;
};
