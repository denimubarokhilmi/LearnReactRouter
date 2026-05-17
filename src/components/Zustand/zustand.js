import { create } from "zustand";

const useBear = create((set) => ({
  bear: 0,
  misal: "oke",
  increasePopulation: () =>
    set((state) => ({
      bear: state.bear + 1,
    })),
  removeAllBear: () => set({ bear: 0 }),
  updateBear: (newBear) => set({ bear: newBear }),
}));

export { useBear };
