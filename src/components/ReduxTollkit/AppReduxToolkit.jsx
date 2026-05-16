import { useSelector, useDispatch } from "react-redux";
import { decrement, increment } from "./counterSlice";
export default function AppReduxToolkit() {
  const count = useSelector((state) => state.counter.count);
  const dispatch = useDispatch();
  return (
    <div className="redux-toolkit">
      <h1
        style={{
          textAlign: "center",
        }}
      >
        hii Redux Toolkit
      </h1>

      <p>Current value : {count}</p>
      <button onClick={() => dispatch(increment())}>Increment</button>
      <button onClick={() => dispatch(decrement())}>Decrement</button>
    </div>
  );
}
