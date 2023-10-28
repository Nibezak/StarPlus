import axios from "axios";
import { API_URL } from "./constants";

const instance = axios.create({
  baseURL: API_URL,
  params: {
    // api_key: process.env.REACT_APP_API_KEY,
    api_key:"b49450f5e360f6b970137eb3078a7ed6",

  },
});

export default instance;
