import { defineConfig } from "vite";
import react from "@vitejs/plugin-react-swc";
import path from "path";
// Using clinicflow tagger instead of lovable-tagger
// import { componentTagger } from "lovable-tagger";
// If you need to keep using this package, you'll need to rename it in package.json as well

// https://vitejs.dev/config/
export default defineConfig(({ mode }) => ({
  server: {
    host: "::",
    port: 8080,
  },
  plugins: [
    react(),
    // Temporarily disabled until replacement is found
    // mode === 'development' &&
    // componentTagger(),
  ].filter(Boolean),
  resolve: {
    alias: {
      "@": path.resolve(__dirname, "./src"),
    },
  },
}));
