import { useQuery } from "@tanstack/react-query";
import APIClient from "../services/api-client";
import { Game } from "../Types";

const api = new APIClient<Game>("/games");

const useGame = (slug: string) => {
  return useQuery<Game, Error>({
    queryKey: ["game", slug],
    queryFn: () => api.get(slug),
    staleTime: 24 * 60 * 60 * 1000, //24hrs
  });
};

export default useGame;
