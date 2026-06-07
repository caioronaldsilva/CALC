const cacheName  = '1.0';
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
        console.log('Files cached!');
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
                    console.log('Catch Cache Keys Names with sucess!')
                }
            }
        }).catch((savedCacheKeys) => {
            console.log('Error to catch Cache Keys Names!');
        })
    );
    
});