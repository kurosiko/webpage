export const manifest = (() => {
function __memo(fn) {
	let value;
	return () => value ??= (value = fn());
}

return {
	appDir: "_app",
	appPath: "_app",
	assets: new Set(["assets/font/Jersey15-Regular.ttf","assets/logo.png"]),
	mimeTypes: {".ttf":"font/ttf",".png":"image/png"},
	_: {
		client: {start:"_app/immutable/entry/start.DSobzPBt.js",app:"_app/immutable/entry/app.CZRkZPqn.js",imports:["_app/immutable/entry/start.DSobzPBt.js","_app/immutable/chunks/Ca2jStNv.js","_app/immutable/chunks/COUZ8-z6.js","_app/immutable/chunks/DIeogL5L.js","_app/immutable/chunks/DGCl-Fr1.js","_app/immutable/chunks/jaP-fC8n.js","_app/immutable/chunks/Dp7Xd_KZ.js","_app/immutable/entry/app.CZRkZPqn.js","_app/immutable/chunks/COUZ8-z6.js","_app/immutable/chunks/DIeogL5L.js","_app/immutable/chunks/CGGbK_rP.js","_app/immutable/chunks/DoeZhbiU.js","_app/immutable/chunks/DVPvwRl_.js","_app/immutable/chunks/DGCl-Fr1.js","_app/immutable/chunks/B8t1Mn1I.js","_app/immutable/chunks/CWj6FrbW.js","_app/immutable/chunks/C0goLzWD.js","_app/immutable/chunks/35n5RWcI.js","_app/immutable/chunks/m68JhT5u.js","_app/immutable/chunks/Dp7Xd_KZ.js"],stylesheets:[],fonts:[],uses_env_dynamic_public:false},
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
