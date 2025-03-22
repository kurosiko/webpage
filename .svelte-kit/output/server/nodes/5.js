

export const index = 5;
let component_cache;
export const component = async () => component_cache ??= (await import('../entries/pages/media/_page.svelte.js')).default;
export const imports = ["_app/immutable/nodes/5.DtH7URir.js","_app/immutable/chunks/CWj6FrbW.js","_app/immutable/chunks/D_gzOEQK.js","_app/immutable/chunks/CAOyyBTL.js"];
export const stylesheets = [];
export const fonts = [];
