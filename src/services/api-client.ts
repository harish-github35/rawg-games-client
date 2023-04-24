import axios, { CanceledError } from "axios";

const key = import.meta.env.VITE_API_KEY;

export default axios.create({
  baseURL: "https://api.rawg.io/api",
  params: {
    key: key,
  },
});

export { CanceledError };

//  api key
