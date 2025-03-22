

export const index = 3;
let component_cache;
export const component = async () => component_cache ??= (await import('../entries/pages/_page.svelte.js')).default;
export const imports = ["_app/immutable/nodes/3.D5VJT_35.js","_app/immutable/chunks/CWj6FrbW.js","_app/immutable/chunks/D_gzOEQK.js","_app/immutable/chunks/CAOyyBTL.js"];
export const stylesheets = [];
export const fonts = [];
