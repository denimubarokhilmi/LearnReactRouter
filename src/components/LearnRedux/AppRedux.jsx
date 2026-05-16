import Counter from "./components/ExampleReduxCore/Counter";
import Profile from "./components/ExampleReduxCore/Profile";
import User from "./components/Thunk/UserFetchComp";
export default function AppLearnRedux() {
  return (
    <>
      <h2
        style={{
          textAlign: "center",
        }}
      >
        hii hello redux
      </h2>
      <Counter></Counter>
      <Profile></Profile>
      <User></User>
    </>
  );
}
