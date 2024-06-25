import axios from "axios";

const baseUrl = "http://image.tmdb.org/t/p/";
const s = "w300";

export const imgApi = async (imgData) => {
  try {
    const data = await axios.get(baseUrl, { options: { s, imgData } });
    return data;
  } catch (e) {
    console.log(e);
  }
};
