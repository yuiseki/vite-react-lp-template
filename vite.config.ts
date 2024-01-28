import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  // TODO: You need to change this to your repo name
  base: "/vite-react-lp-template/",
});
