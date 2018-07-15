var CACHE_NAME = 'site-cache';
var urlsToCache = [
  '/',
  '/404.html'
];

// Below is largely a hybrid of https://developers.google.com/web/ilt/pwa/caching-files-with-service-worker 
// and Jake Archibalds guide. Little point reinventing the wheel for Service Workers.

self.addEventListener('install', function(event) {
    // Perform install steps
    event.waitUntil(
      caches.open(CACHE_NAME)
        .then(function(cache) {
          return cache.addAll(urlsToCache);
        })
    );
  });

self.addEventListener('fetch', function(event) {
  event.respondWith(
    caches.match(event.request,{ignoreSearch: true}).then(function(response) {
        return response || fetch(event.request).then(function(response) {
          return caches.open(CACHE_NAME).then(function(cache) {
            cache.put(event.request, response.clone());
            return response;
          });  
        });
    }).catch(function(error) {
      if (event.request.mode === 'navigate') {
        return caches.match('/404.html');
      }
    })
  );
});