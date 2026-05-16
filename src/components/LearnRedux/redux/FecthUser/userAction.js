import { FETCH_REQUEST, FETCH_SUCCESS, FETCH_ERROR } from "./usertypes";

function delay() {
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve("");
    }, 2000);
  });
}
const fecthUser = () => {
  return async (dispatch, getState) => {
    dispatch({
      type: FETCH_REQUEST,
    });
    try {
      const res = await fetch("https://jsonplaceholder.typicode.com/posts");
      const data = await res.json();
      await delay();
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

// example thunk middleware
// const thunkMiddleware =
//   ({ dispatch, getState }) =>
//     (next) =>
//       (action) => {

//         if (typeof action === "function") {

//           return action(dispatch, getState)

//         }

//         return next(action)
//       }
export { fecthUser };
