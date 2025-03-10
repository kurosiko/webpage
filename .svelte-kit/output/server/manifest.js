export const manifest = (() => {
function __memo(fn) {
	let value;
	return () => value ??= (value = fn());
}

return {
	appDir: "_app",
	appPath: "webpage/_app",
	assets: new Set([]),
	mimeTypes: {},
	_: {
		client: {start:"_app/immutable/entry/start.CRNo3wr3.js",app:"_app/immutable/entry/app.Cc4Pv1_7.js",imports:["_app/immutable/entry/start.CRNo3wr3.js","_app/immutable/chunks/DkyCB1aZ.js","_app/immutable/chunks/DzLxjRAp.js","_app/immutable/chunks/DIeogL5L.js","_app/immutable/chunks/CUAGXukK.js","_app/immutable/chunks/Bp873bLV.js","_app/immutable/chunks/BGKcGItD.js","_app/immutable/entry/app.Cc4Pv1_7.js","_app/immutable/chunks/DzLxjRAp.js","_app/immutable/chunks/DIeogL5L.js","_app/immutable/chunks/CRDblv9v.js","_app/immutable/chunks/nxxMPMlL.js","_app/immutable/chunks/B9QI8j-U.js","_app/immutable/chunks/DigXLuHG.js","_app/immutable/chunks/CWj6FrbW.js","_app/immutable/chunks/XNcYlZy4.js","_app/immutable/chunks/C670VDik.js","_app/immutable/chunks/D-jRvTjg.js","_app/immutable/chunks/BUZE7XSo.js","_app/immutable/chunks/CUAGXukK.js","_app/immutable/chunks/BGKcGItD.js"],stylesheets:[],fonts:[],uses_env_dynamic_public:false},
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
