import { useBear } from "./zustand";

export default function AppZustand() {
  const bear = useBear((state) => state.bear);
  const increasePopulation = useBear((state) => state.increasePopulation);
  return (
    <div className="zustand">
      <h1
        style={{
          textAlign: "center",
        }}
      >
        Hi Zustand
      </h1>
      <h2>{bear} bear arround here...</h2>
      <button onClick={increasePopulation}>One UP</button>
    </div>
  );
}
