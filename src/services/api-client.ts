import axios from "axios";

export default axios.create({
  baseURL: "https://api.rawg.io/api",

  params: {
    key: "288b98ff60a34c25a7e2526fb72f633a",
  },
});
