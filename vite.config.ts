import { defineConfig } from "vite";
import react from "@vitejs/plugin-react-swc";
import path from "path";

// https://vitejs.dev/config/
export default defineConfig({
  server: {
    host: "::",
    port: 8080,
    hmr: {
      overlay: false,
    },
  },
  plugins: [react()],
  resolve: {
    alias: {
      "@": path.resolve(__dirname, "./src"),
    },
  },
  build: {
    rollupOptions: {
      // Extra HTML entries carry route-specific share tags for crawlers that don't run JS (WhatsApp, LinkedIn).
      input: {
        main: path.resolve(__dirname, "index.html"),
        roda: path.resolve(__dirname, "roda-de-conversa/index.html"),
        rodaEscala: path.resolve(__dirname, "roda-de-conversa/fim-escala-6x1-na-pratica/index.html"),
      },
    },
  },
});
