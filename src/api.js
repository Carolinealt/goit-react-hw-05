import axios from "axios";

const url = "https://api.themoviedb.org/3/";

const options = {
  headers: {
    Authorization:
      "Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiJjMTA3NGM4YjkzZmM3YjBkY2JhMTZkNjdmZjZlYzc3MCIsIm5iZiI6MTcxOTMyOTM0NS4xMDgyNSwic3ViIjoiNjY3YWRlYTBkMjI0NmZmYmQxYTBiMzYwIiwic2NvcGVzIjpbImFwaV9yZWFkIl0sInZlcnNpb24iOjF9.dM_M8V-eplXoDJmrLE2Thd2n_HFnecf49_Jg4go8nVs",
  },
};

export const funcApi = async () => {
  try {
    const data = await axios.get(
      `${url}trending/movie/day?language=en-US`,
      options
    );
    return data;
  } catch (e) {
    console.log(e);
  }
};

export const singleMovie = async (id) => {
  const data = await axios.get(`${url}movie/${id}?language=en-US`, options);
  return data;
};

export const searchByQuery = async (query) => {
  const data = await axios.get(
    `${url}search/movie?query=${query}&include_adult=false&language=en-US&page=1`,
    options
  );
  return data;
};

