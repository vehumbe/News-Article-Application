import path from "path"
import { fileURLToPath } from "url"   // ✅ Import for fixing __dirname
import tailwindcss from "@tailwindcss/vite"
import react from "@vitejs/plugin-react"
import { defineConfig } from "vite"

// ✅ Define __dirname manually (not available in ESM)
const __filename = fileURLToPath(import.meta.url)
const __dirname = path.dirname(__filename)

// https://vite.dev/config/
export default defineConfig({
  server:{
    proxy: {
      "/api": {
        target: "http://localhost:5000",
        secure: false
      },
    },
  },
  plugins: [react(), tailwindcss()],
  resolve: {
    alias: {
      "@": path.resolve(__dirname, "./src"),
    },
  },
})
