import axios, { CanceledError } from "axios";

export default axios.create({
  baseURL: "https://api.rawg.io/api",
  params: {
    key: "4fb38a1575ff4a41a27be3585911b3f1",
  },
});

export { CanceledError };

//  api key
