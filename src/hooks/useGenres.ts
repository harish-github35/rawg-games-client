// import useData from "./useData";
import json from "../data/genres.json";

import { useQuery } from "@tanstack/react-query";
import APIClient from "../services/api-client";
import { Genre } from "../Types";

// const useGenres = () => useData<Genre>("/genres")
// const useGenres = () => ({
//   data: json as Genre[],
//   error: null,
//   isLoading: false,
// });
const useGenres = () =>
  useQuery({
    queryKey: ["genres"],
    queryFn: new APIClient<Genre>("/genres").getAll,
    staleTime: 24 * 60 * 60 * 1000, // 24h
    initialData: { results: json },
  });

export default useGenres;
