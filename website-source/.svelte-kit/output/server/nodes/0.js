import * as universal from '../entries/pages/_layout.js';

export const index = 0;
let component_cache;
export const component = async () => component_cache ??= (await import('../entries/pages/_layout.svelte.js')).default;
export { universal };
export const universal_id = "src/routes/+layout.js";
export const imports = ["_app/immutable/nodes/0.nvRARjTv.js","_app/immutable/chunks/scheduler.CODmr5Lb.js","_app/immutable/chunks/index.DGZifvhx.js"];
export const stylesheets = ["_app/immutable/assets/0.ye5twLYB.css"];
export const fonts = [];
