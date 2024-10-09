import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";

// https://vitejs.dev/config/
export default defineConfig({
   base: "/{basic-english-lessons}",
  plugins: [react()],
});

// solution to deploy gh-pages using vite
// https://github.com/tschaub/gh-pages/issues/485
