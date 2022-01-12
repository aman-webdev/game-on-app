const initState = {
  upcomingGames: [],
  popularGames: [],
  newGames: [],
  searchedGames: [],
};
const gamesReducer = (state = initState, action) => {
  switch (action.type) {
    case "FETCH_UPCOMING":
      return { ...state, upcomingGames: action.payload };
    case "FETCH_POPULAR":
      return { ...state, popularGames: action.payload };
    case "FETCH_NEW":
      return { ...state, newGames: action.payload };
    case "FETCH_SEARCHED":
      return { ...state, searchedGames: action.payload };
    default:
      return state;
  }
};

export default gamesReducer;
