const filesToCache = [
	"Worms.htm",
	"Worms.json",
	"Worms.png",
	"WormsFavIcon_16x16.png",
	"WormsFavIcon_192x192.png",
	"WormsFavIcon_512x512.png",
	"WormsGame.htm",
	"WormsGame.js",
	"WormsShare.png"
];

const staticCacheName = "worms-v1";

self.addEventListener("install", event => {
	event.waitUntil(
		caches.open(staticCacheName)
		.then(cache => {
			return cache.addAll(filesToCache);
		})
	);
});

self.addEventListener("fetch", event => {
	event.respondWith(
		caches.match(event.request)
		.then(response => {
			if (response) {
				return response;
			}
			return fetch(event.request)
		}).catch(error => {
		})
	);
});