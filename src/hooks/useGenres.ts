// import useData from "./useData";
import json from "../data/genres.json";

export interface Genre {
  id: number;
  name: string;
  image_background: string;
}

// const useGenres = () => useData<Genre>("/genres")
const useGenres = () => ({
  data: json as Genre[],
  error: null,
  isLoading: false,
});

export default useGenres;
