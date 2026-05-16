import { FETCH_REQUEST, FETCH_SUCCESS, FETCH_ERROR } from "./usertypes";

const initalStates = {
  loading: false,
  users: [],
  error: "",
};

const userReducer = (state = initalStates, action) => {
  switch (action.type) {
    case FETCH_REQUEST:
      return {
        ...state,
        loading: true,
      };
    case FETCH_SUCCESS:
      return {
        ...state,
        loading: false,
        users: action.payload,
      };
    case FETCH_ERROR:
      return {
        loading: false,
        users: [],
        error: action.payload,
      };
    default:
      return state;
  }
};

export { userReducer };
