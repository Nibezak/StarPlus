import axios from "axios";
import { API_URL } from "./constants";

const instance = axios.create({
  baseURL: API_URL,
  params: {
    // api_key: process.env.REACT_APP_API_KEY,
    api_key:"15e383204c1b8a09dbfaaa4c01ed7e17",

  },
});

export default instance;
