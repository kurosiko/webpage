export const manifest = (() => {
function __memo(fn) {
	let value;
	return () => value ??= (value = fn());
}

return {
	appDir: "_app",
	appPath: "_app",
	assets: new Set(["assets/font/Jersey15-Regular.ttf","assets/font/Roboto-VariableFont_wdth,wght.ttf","assets/lamunation.png","assets/logo.png"]),
	mimeTypes: {".ttf":"font/ttf",".png":"image/png"},
	_: {
		client: {start:"_app/immutable/entry/start.Bx2PXG6p.js",app:"_app/immutable/entry/app.CJs7jIF_.js",imports:["_app/immutable/entry/start.Bx2PXG6p.js","_app/immutable/chunks/DefGaBfG.js","_app/immutable/chunks/Dd4iVm2f.js","_app/immutable/chunks/Bht5SLqx.js","_app/immutable/chunks/BS-E1QM5.js","_app/immutable/chunks/BsnDdvKJ.js","_app/immutable/entry/app.CJs7jIF_.js","_app/immutable/chunks/Bht5SLqx.js","_app/immutable/chunks/CWj6FrbW.js","_app/immutable/chunks/B1kXKHkC.js","_app/immutable/chunks/DF35C1Zg.js","_app/immutable/chunks/2GwkvFBd.js","_app/immutable/chunks/CxZZTNPy.js","_app/immutable/chunks/BS-E1QM5.js","_app/immutable/chunks/BnxZ9qG_.js","_app/immutable/chunks/Dd4iVm2f.js"],stylesheets:[],fonts:[],uses_env_dynamic_public:false},
		nodes: [
			__memo(() => import('./nodes/0.js')),
			__memo(() => import('./nodes/1.js')),
			__memo(() => import('./nodes/2.js')),
			__memo(() => import('./nodes/3.js')),
			__memo(() => import('./nodes/4.js')),
			__memo(() => import('./nodes/5.js')),
			__memo(() => import('./nodes/6.js')),
			__memo(() => import('./nodes/7.js')),
			__memo(() => import('./nodes/8.js')),
			__memo(() => import('./nodes/9.js')),
			__memo(() => import('./nodes/10.js'))
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
				id: "/tool",
				pattern: /^\/tool\/?$/,
				params: [],
				page: { layouts: [0,], errors: [1,], leaf: 8 },
				endpoint: null
			},
			{
				id: "/tool/clipborad",
				pattern: /^\/tool\/clipborad\/?$/,
				params: [],
				page: { layouts: [0,], errors: [1,], leaf: 9 },
				endpoint: null
			},
			{
				id: "/works",
				pattern: /^\/works\/?$/,
				params: [],
				page: { layouts: [0,], errors: [1,], leaf: 10 },
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
