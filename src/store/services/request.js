import axios from "axios";

export async function getComic(id) {
  return await axios({
    method: "GET",
    baseURL: process.env.REACT_APP_BASE_URL,
    url: `${id}`,
  });
}
