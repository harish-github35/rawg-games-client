import axios, { AxiosRequestConfig } from "axios";

const key = import.meta.env.VITE_API_KEY;

const rawg = axios.create({
  baseURL: "https://api.rawg.io/api",
  params: {
    key: key,
  },
});

export interface FetchResponse<T> {
  count?: number;
  previous?: string | null;
  next?: string | null;
  results: T[];
}

// export { CanceledError };

//  api key

class APIClient<T> {
  endpoint: string;

  constructor(endpoint: string) {
    this.endpoint = endpoint;
  }

  getAll(requestConfig?: AxiosRequestConfig) {
    return rawg
      .get<FetchResponse<T>>(this.endpoint, requestConfig)
      .then((res) => res.data);
  }
}

export default APIClient;
