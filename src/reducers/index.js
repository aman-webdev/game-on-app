import { combineReducers } from "redux";
import gamesReducer from "./gamesReducer";
import gameDetailReducer from "./gameDetailReducer";
import isLoadingReducer from "./isLoadingReducer";
import wishlistReducer from "./wishlistReducer";
import gameCategoryReducer from "./gameCategoryReducer";
import genreReducer from "./genreReducer";
import developerReducer from "./developerReducer";

export default combineReducers({
  games: gamesReducer,
  detail: gameDetailReducer,
  isLoading: isLoadingReducer,
  wishlist: wishlistReducer,
  category: gameCategoryReducer,
  genre: genreReducer,
  developer: developerReducer,
});
