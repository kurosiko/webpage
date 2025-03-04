

export const index = 5;
let component_cache;
export const component = async () => component_cache ??= (await import('../entries/pages/media/_page.svelte.js')).default;
export const imports = ["_app/immutable/nodes/5.I1SPPFGT.js","_app/immutable/chunks/disclose-version.BGtYnW3F.js","_app/immutable/chunks/runtime.D_U100VS.js","_app/immutable/chunks/legacy.DofSEwE7.js"];
export const stylesheets = [];
export const fonts = [];
