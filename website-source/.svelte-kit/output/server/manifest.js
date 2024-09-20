export const manifest = (() => {
function __memo(fn) {
	let value;
	return () => value ??= (value = fn());
}

return {
	appDir: "_app",
	appPath: "website/_app",
	assets: new Set(["favicon.png"]),
	mimeTypes: {".png":"image/png"},
	_: {
		client: {"start":"_app/immutable/entry/start.C8eSdHX-.js","app":"_app/immutable/entry/app.tpt8PVIx.js","imports":["_app/immutable/entry/start.C8eSdHX-.js","_app/immutable/chunks/entry.Bjz-zkOo.js","_app/immutable/chunks/scheduler.CODmr5Lb.js","_app/immutable/entry/app.tpt8PVIx.js","_app/immutable/chunks/scheduler.CODmr5Lb.js","_app/immutable/chunks/index.DGZifvhx.js"],"stylesheets":[],"fonts":[],"uses_env_dynamic_public":false},
		nodes: [
			__memo(() => import('./nodes/0.js')),
			__memo(() => import('./nodes/1.js'))
		],
		routes: [
			
		],
		matchers: async () => {
			
			return {  };
		},
		server_assets: {}
	}
}
})();
