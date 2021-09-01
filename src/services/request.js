import axios from "axios";

export const getComic = async (id) => {
  try {
    const comic = await axios({
      method: "GET",
      url: `https://xkcd.com/${id}/info.0.json `,
    });
    return comic.data;
  } catch (error) {
    throw error;
  }
};
