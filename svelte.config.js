import { vitePreprocess } from '@sveltejs/vite-plugin-svelte'
import adapter from "@sveltejs/adapter-static"
/** @type {import("@sveltejs/kit").Config} */
export default {
  preprocess: vitePreprocess(),
  kit: {
    adapter: adapter({
      pages: "docs",
      assets:"docs",
      precompress:false,
      fallback: "404.html",
      strict:true
    }),
  }
}

