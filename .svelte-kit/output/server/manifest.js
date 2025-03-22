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
		client: {start:"_app/immutable/entry/start.too9W-FI.js",app:"_app/immutable/entry/app.7uKjpSIc.js",imports:["_app/immutable/entry/start.too9W-FI.js","_app/immutable/chunks/DjMf1lJv.js","_app/immutable/chunks/BKOPFTRZ.js","_app/immutable/chunks/CAOyyBTL.js","_app/immutable/chunks/B1CQrgR_.js","_app/immutable/chunks/B50H9I1l.js","_app/immutable/entry/app.7uKjpSIc.js","_app/immutable/chunks/CAOyyBTL.js","_app/immutable/chunks/CWj6FrbW.js","_app/immutable/chunks/W_KokJe6.js","_app/immutable/chunks/GkQuViUG.js","_app/immutable/chunks/BiWf-tgx.js","_app/immutable/chunks/BHYjgMSy.js","_app/immutable/chunks/DqGiz7f7.js","_app/immutable/chunks/B1CQrgR_.js","_app/immutable/chunks/BKOPFTRZ.js"],stylesheets:[],fonts:[],uses_env_dynamic_public:false},
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
				id: "/api/video",
				pattern: /^\/api\/video\/?$/,
				params: [],
				page: null,
				endpoint: __memo(() => import('./entries/endpoints/api/video/_server.ts.js'))
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
