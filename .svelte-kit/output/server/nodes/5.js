

export const index = 5;
let component_cache;
export const component = async () => component_cache ??= (await import('../entries/pages/media/_page.svelte.js')).default;
export const imports = ["_app/immutable/nodes/5.CP0c4kZ-.js","_app/immutable/chunks/BW6U-LBV.js","_app/immutable/chunks/B2Gl6wN4.js","_app/immutable/chunks/YTZjVfr2.js"];
export const stylesheets = [];
export const fonts = [];
