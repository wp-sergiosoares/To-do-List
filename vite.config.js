import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import tailwindcss from "@tailwindcss/vite";

// https://vite.dev/config/
export default defineConfig({
  base: "https://wp-sergiosoares.github.io/Lista-de-Compras-Interativa/",
  plugins: [react(), tailwindcss()],
});
