

export const index = 3;
let component_cache;
export const component = async () => component_cache ??= (await import('../entries/pages/_page.svelte.js')).default;
export const imports = ["_app/immutable/nodes/3.D2i1QKno.js","_app/immutable/chunks/BW6U-LBV.js","_app/immutable/chunks/B2Gl6wN4.js","_app/immutable/chunks/YTZjVfr2.js"];
export const stylesheets = [];
export const fonts = [];
