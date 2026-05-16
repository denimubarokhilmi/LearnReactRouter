import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { fecthUser } from "../../redux/FecthUser/userAction";

export default function User() {
  const dispatch = useDispatch();
  const { loading, users, error } = useSelector((state) => state.users);
  //   console.log(users);
  useEffect(() => {
    dispatch(fecthUser());
  }, []);

  if (loading) return <h1>loading...</h1>;
  if (error) {
    return <h1>{error}</h1>;
  }

  return (
    <div>
      <ul>
        {users.map((el) => (
          <li key={el.id}>{el.title}</li>
        ))}
      </ul>
    </div>
  );
}
