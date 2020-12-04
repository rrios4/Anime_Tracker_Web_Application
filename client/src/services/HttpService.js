import axios from "axios";
//Never used
const HttpService = axios.create({
  baseURL: "https://api.jikan.moe/v3/",
});

export default HttpService;
