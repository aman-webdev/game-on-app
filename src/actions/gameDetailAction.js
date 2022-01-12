import axios from "axios";
import { gameDetail_url, gameScreenshot_url } from "../apis/api";

const loadDetail = (id) => async (dispatch) => {
  const responseDetail = await axios.get(gameDetail_url(id));
  const responseScreenshot = await axios.get(gameScreenshot_url(id));
  dispatch({ type: "IS_LOADING" });

  dispatch({
    type: "FETCH_DETAIL",
    payload: {
      detail: responseDetail.data,
      screenshot: responseScreenshot.data.results,
    },
  });
};

export default loadDetail;
