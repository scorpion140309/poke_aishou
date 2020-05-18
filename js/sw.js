// キャッシュ名とキャッシュファイルの指定
var CACHE_NAME = 'pwa-poke-aishou';
var urlsToCache = [
	"./index.html",
	"./poke_aishou_h.html",
	"./poke_aishou_v.html",
	"./main.css",
	"./main_h.css",
	"./main_v.css",
	"./js/poke_type_database.js",
	"./js/poke_aishou.js"
];

// インストール処理
self.addEventListener('install', function(event) {
	event.waitUntil(
		caches
			.open(CACHE_NAME)
			.then(function(cache) {
				return cache.addAll(urlsToCache);
			})
	);
});

// リソースフェッチ時のキャッシュロード処理
self.addEventListener('fetch', function(event) {
	event.respondWith(
		caches
			.match(event.request)
			.then(function(response) {
				return response ? response : fetch(event.request);
			})
	);
});
