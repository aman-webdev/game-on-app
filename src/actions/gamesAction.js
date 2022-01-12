import axios from "axios";
import {
  upcomingGames_url,
  popularGames_url,
  newGames_url,
  searchedGames_url,
} from "../apis/api";

export const loadUpcomingGames = (number) => async (dispatch) => {
  const responseUpcoming = await axios.get(upcomingGames_url(number));

  dispatch({ type: "FETCH_UPCOMING", payload: responseUpcoming.data.results });
};

export const loadNewGames = (number) => async (dispatch) => {
  const responseNew = await axios.get(newGames_url(number));
  dispatch({ type: "FETCH_NEW", payload: responseNew.data.results });
};

export const loadPopularGames = (number) => async (dispatch) => {
  const responsePopular = await axios.get(popularGames_url(number));
  dispatch({ type: "FETCH_POPULAR", payload: responsePopular.data.results });
};

export const loadSearchedGames = (term) => async (dispatch) => {
  const responseSearched = await axios.get(searchedGames_url(term));
  dispatch({ type: "FETCH_SEARCHED", payload: responseSearched.data.results });
};
