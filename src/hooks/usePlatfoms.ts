// import useData from "./useData";

import json from "../data/platforms.json";
import { useQuery } from "@tanstack/react-query";
import APIClient from "../services/api-client";

export interface Platform {
  id: number;
  name: string;
  slug: string;
}

// const usePlatform = () => useData<Platform>("/platforms/lists/parents");
// const usePlatform = () => ({
//   error: null,
//   isLoading: false,
//   data: json as Platform[],
// });
const usePlatforms = () =>
  useQuery({
    queryKey: ["platfoms"],
    queryFn: new APIClient<Platform>("/platforms/lists/parents").getAll,
    staleTime: 24 * 60 * 60 * 1000, // 24h
    initialData: { results: json },
  });

export default usePlatforms;
