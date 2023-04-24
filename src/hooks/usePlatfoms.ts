// import useData from "./useData";
import { Platform } from "./useGames";
import json from "../data/platforms.json";

// const usePlatform = () => useData<Platform>("/platforms/lists/parents");
const usePlatform = () => ({
  error: null,
  isLoading: false,
  data: json as Platform[],
});

export default usePlatform;
