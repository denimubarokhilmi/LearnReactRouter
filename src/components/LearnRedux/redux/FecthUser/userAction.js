import { FETCH_REQUEST, FETCH_SUCCESS, FETCH_ERROR } from "./usertypes";

const fecthUser = () => {
  return async (dispatch, getState) => {
    dispatch({
      type: FETCH_REQUEST,
    });
    try {
      const res = await fetch("https://jsonplaceholder.typicode.com/posts");
      const data = await res.json();
      dispatch({
        type: FETCH_SUCCESS,
        payload: data,
      });
    } catch (error) {
      dispatch({
        type: FETCH_ERROR,
        payload: error.message,
      });
    }
  };
};

export { fecthUser };
