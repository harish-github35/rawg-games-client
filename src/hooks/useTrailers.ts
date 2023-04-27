import { useQuery } from "@tanstack/react-query";
import { Trailer } from "../Types";
import { FetchResponse, rawg } from "../services/api-client";

const useTrailers = (gameId: number) => {
  // const apiClient = new APIClient<Trailer>(`/games/${gameId}/movies`);

  return useQuery<FetchResponse<Trailer>, Error>({
    queryKey: ["trailers", gameId],
    queryFn: () =>
      rawg
        .get<FetchResponse<Trailer>>("games/" + gameId + "/movies")
        .then((res) => res.data),
  });
};

export default useTrailers;
