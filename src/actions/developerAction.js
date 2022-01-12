import axios from "axios";
import { developers_url } from "../apis/api";

export const loadDevelopers = (number) => async (dispatch) => {
  const responseDevelopers = await axios.get(developers_url(number));
  dispatch({
    type: "FETCH_DEVELOPERS",
    payload: responseDevelopers.data.results,
  });
};
