import { defineConfig } from "vite";

// Simple Vite config for static HTML/CSS/JS
export default defineConfig({
  server: {
    host: "::",
    port: 8080,
  },
  build: {
    rollupOptions: {
      input: {
        main: 'index.html'
      }
    }
  }
});