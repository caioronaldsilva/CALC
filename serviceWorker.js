const cacheName  = '1.4';
const cacheFiles = [
    './index.html',
    './styles/calculator.css',
    './scripts/basicArithmetic.js'
];

self.addEventListener('install', (event) => {

    const cachePromise = caches.open(cacheName);
    
    event.waitUntil(
        cachePromise.then((cache) => {
            cache.addAll(cacheFiles);
        }).catch((error) => {
            console.log('Error on cache:', error);
        })
    );
    
});

self.addEventListener('activate', (event) => {

    const cacheKeysPromise = caches.keys();

    event.waitUntil(
        cacheKeysPromise.then((savedCacheKeys) => {
            for (let keys of savedCacheKeys) {
                if (keys != cacheName) {
                    caches.delete(keys);
                }
            }
        }).catch((error) => {
            console.log('Error on cache:', error);
        })
    );
    
});

self.addEventListener('fetch', (event) => {
    
    event.respondWith(
        caches.match(event.request).then((cachedResponse) => {
            if (cachedResponse) {
                return cachedResponse;
            } else {
                return fetch(event.request).then((response) => {
                    const cacheClone = response.clone();
                    caches.open(cacheName).then((cache) => {
                        cache.put(event.request, cacheClone);
                    });
                    return response;
                });
            }
        })
    )
    
})