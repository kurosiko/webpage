import { vitePreprocess } from '@sveltejs/vite-plugin-svelte'
import adapter from "@sveltejs/adapter-cloudflare"

export default {
    preprocess: vitePreprocess(),
    kit: {
        adapter: adapter({
            pages: "docs",
            assets: "docs",
            precompress: false,
            fallback: "index.html",
            strict: true,
        }),
    },
    compilerOptions: {
        customElement: true
    }
};

