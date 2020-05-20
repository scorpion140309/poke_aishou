// キャッシュ名とキャッシュファイルの指定
var CACHE_NAME = 'scorpion140309-poke-aishou';
var urlsToCache = [
	"/poke_aishou/",
	"/poke_aishou/main.css",
	"/poke_aishou/main_h.css",
	"/poke_aishou/main_v.css",
	"/poke_aishou/js/poke_type_database.js",
	"/poke_aishou/js/poke_aishou.js"
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
