const wishlistReducer = (state = [], action) => {
  switch (action.type) {
    case "ADD_WISHLIST":
      return [...state, action.payload];
    case "REMOVE_WISHLIST":
      return [
        ...state.slice(0, action.payload),
        ...state.slice(action.payload + 1),
      ];
    default:
      return [...state];
  }
};

export default wishlistReducer;
