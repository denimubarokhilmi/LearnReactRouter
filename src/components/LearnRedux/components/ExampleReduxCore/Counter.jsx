import { useSelector, useDispatch } from "react-redux";
import { increment, decrement, reset } from "../../redux/Counter/action";
export default function Counter() {
  const count = useSelector((state) => state.counter.count);

  const dispatch = useDispatch();
  return (
    <div className="usage-redux">
      <p>Current state : {count}</p>
      <button onClick={() => dispatch(increment())}>count +</button>
      <button onClick={() => dispatch(decrement())}>count -</button>
      <button onClick={() => dispatch(reset())}>Reset count</button>
    </div>
  );
}
