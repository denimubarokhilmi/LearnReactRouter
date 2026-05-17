import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";

// https://vite.dev/config/
export default defineConfig({
  plugins: [react()],
  build: {
    rollupOptions: {
      input: {
        index: "index.html",
        redux: "redux.html",
        reduxToolkit: "reduxToolkit.html",
        zustand: "zustand.html",
      },
    },
  },
});
