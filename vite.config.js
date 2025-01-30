import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import { visualizer } from "rollup-plugin-visualizer";

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react(), visualizer({ open: true })],
  resolve: {
    alias: {
      "~": "/src",
    },
  },

  build: {
    chunkSizeWarningLimit: 2000,
    rollupOptions: {
      output: {
        manualChunks: {
          react: ["react", "react-dom"],
          seo: ["react-helmet-async"], // Explicitly chunk SEO-related libraries
          city: ["country-state-city"], // Explicitly chunk country-state-city
          icons: ["react-icons"], // Explicitly react icons
        },
      },
      treeshake: true, // Ensure unused code is removed
    },
  },
});
