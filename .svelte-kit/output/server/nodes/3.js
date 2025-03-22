

export const index = 3;
let component_cache;
export const component = async () => component_cache ??= (await import('../entries/pages/_page.svelte.js')).default;
export const imports = ["_app/immutable/nodes/3.Djv6vhA9.js","_app/immutable/chunks/CWj6FrbW.js","_app/immutable/chunks/BFzncZVi.js","_app/immutable/chunks/DCVJXIUe.js"];
export const stylesheets = [];
export const fonts = [];
