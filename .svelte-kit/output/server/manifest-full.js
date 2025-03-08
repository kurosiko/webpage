export const manifest = (() => {
function __memo(fn) {
	let value;
	return () => value ??= (value = fn());
}

return {
	appDir: "_app",
	appPath: "_app",
	assets: new Set([]),
	mimeTypes: {},
	_: {
		client: {start:"_app/immutable/entry/start.DfcOqw_h.js",app:"_app/immutable/entry/app.CAZ48E0s.js",imports:["_app/immutable/entry/start.DfcOqw_h.js","_app/immutable/chunks/ueDIGRz5.js","_app/immutable/chunks/BXHawrhg.js","_app/immutable/chunks/DIeogL5L.js","_app/immutable/chunks/3nt4sMdx.js","_app/immutable/chunks/DCap3dqG.js","_app/immutable/entry/app.CAZ48E0s.js","_app/immutable/chunks/BXHawrhg.js","_app/immutable/chunks/DIeogL5L.js","_app/immutable/chunks/4fP3Vshk.js","_app/immutable/chunks/DGP4HvRY.js","_app/immutable/chunks/B9QI8j-U.js","_app/immutable/chunks/yiCEUnhv.js","_app/immutable/chunks/3nt4sMdx.js","_app/immutable/chunks/CWj6FrbW.js","_app/immutable/chunks/CS7GesOW.js","_app/immutable/chunks/D9dE5YX2.js","_app/immutable/chunks/zXWgaeTd.js","_app/immutable/chunks/DCap3dqG.js"],stylesheets:[],fonts:[],uses_env_dynamic_public:false},
		nodes: [
			__memo(() => import('./nodes/0.js')),
			__memo(() => import('./nodes/1.js')),
			__memo(() => import('./nodes/2.js')),
			__memo(() => import('./nodes/3.js')),
			__memo(() => import('./nodes/4.js')),
			__memo(() => import('./nodes/5.js')),
			__memo(() => import('./nodes/6.js')),
			__memo(() => import('./nodes/7.js')),
			__memo(() => import('./nodes/8.js'))
		],
		routes: [
			{
				id: "/",
				pattern: /^\/$/,
				params: [],
				page: { layouts: [0,], errors: [1,], leaf: 3 },
				endpoint: null
			},
			{
				id: "/ahoge",
				pattern: /^\/ahoge\/?$/,
				params: [],
				page: { layouts: [0,], errors: [1,], leaf: 4 },
				endpoint: null
			},
			{
				id: "/media",
				pattern: /^\/media\/?$/,
				params: [],
				page: { layouts: [0,2,], errors: [1,,], leaf: 5 },
				endpoint: null
			},
			{
				id: "/media/image",
				pattern: /^\/media\/image\/?$/,
				params: [],
				page: { layouts: [0,2,], errors: [1,,], leaf: 6 },
				endpoint: null
			},
			{
				id: "/media/video",
				pattern: /^\/media\/video\/?$/,
				params: [],
				page: { layouts: [0,2,], errors: [1,,], leaf: 7 },
				endpoint: null
			},
			{
				id: "/works",
				pattern: /^\/works\/?$/,
				params: [],
				page: { layouts: [0,], errors: [1,], leaf: 8 },
				endpoint: null
			}
		],
		prerendered_routes: new Set([]),
		matchers: async () => {
			
			return {  };
		},
		server_assets: {}
	}
}
})();
