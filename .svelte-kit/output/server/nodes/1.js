

export const index = 1;
let component_cache;
export const component = async () => component_cache ??= (await import('../entries/fallbacks/error.svelte.js')).default;
export const imports = ["_app/immutable/nodes/1.BF3qFhCw.js","_app/immutable/chunks/scheduler.CODmr5Lb.js","_app/immutable/chunks/index.DGZifvhx.js","_app/immutable/chunks/stores.BzCJgzc1.js","_app/immutable/chunks/entry.BtaVN_qa.js"];
export const stylesheets = [];
export const fonts = [];
