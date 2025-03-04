

export const index = 8;
let component_cache;
export const component = async () => component_cache ??= (await import('../entries/pages/works/_page.svelte.js')).default;
export const imports = ["_app/immutable/nodes/8.DKZD6mYU.js","_app/immutable/chunks/disclose-version.BGtYnW3F.js","_app/immutable/chunks/runtime.D_U100VS.js","_app/immutable/chunks/legacy.DofSEwE7.js"];
export const stylesheets = [];
export const fonts = [];
