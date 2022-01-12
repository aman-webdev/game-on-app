import axios from "axios";
import { genre_url } from "../apis/api";

export const loadGenres = (number) => async (dispatch) => {
  const responseGenre = await axios.get(genre_url(number));
  dispatch({
    type: "FETCH_GENRES",
    payload: responseGenre.data.results,
  });
};
