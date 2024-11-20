// Initial state for user
const initialState = {
    userInfo: null,
  };
  
  // User reducer
  const userReducer = (state = initialState, action) => {
    switch (action.type) {
      case "SET_USER":
        return {
          ...state,
          userInfo: action.payload,
        };
      case "LOGOUT_USER":
        return {
          ...state,
          userInfo: null,
        };
      default:
        return state;
    }
  };
  
  export default userReducer;
  