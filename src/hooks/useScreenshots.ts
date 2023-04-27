import { useQuery } from "@tanstack/react-query";
import { FetchResponse, rawg } from "../services/api-client";
import { Screenshot } from "../Types";

const useScreenshots = (gameId: number) => {
  // const endpoint = `/games/${id}/screenshots`;
  // const api = new APIClient<Screenshot>(endpoint);
  // return useQuery<FetchResponse<Screenshot>, Error>({
  //   queryKey: ["screenshots", id],
  //   queryFn: api.getAll,
  // });

  return useQuery<FetchResponse<Screenshot>, Error>({
    queryKey: ["screenshots", gameId],
    queryFn: () =>
      rawg
        .get<FetchResponse<Screenshot>>("games/" + gameId + "/screenshots")
        .then((res) => res.data),
  });
};

export default useScreenshots;
