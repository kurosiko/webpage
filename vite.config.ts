import { defineConfig } from 'vite'
import { sveltekit } from "@sveltejs/kit/vite"
import tailwindcss from "@tailwindcss/vite"
export default defineConfig({  
  base:"./",
  build: {
    outDir:"./docs"
  },
  plugins: [
    tailwindcss(),
    sveltekit()

  ],
})
