import axios from "axios";
import { particularGenre } from "../apis/api";
const loadCategory = (category) => async (dispatch) => {
  const responseCategory = await axios.get(particularGenre(category));
  dispatch({ type: "FETCH_CATEGORY", payload: responseCategory.data.results });
};

export default loadCategory;
