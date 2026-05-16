import { useSelector } from "react-redux";
export default function Profile(props) {
  const counts = useSelector((state) => state.counter.count);
  return <h2>added state : {counts}</h2>;
}
