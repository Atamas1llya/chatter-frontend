const cacheName = 'chatter-dev';

const cacheUrls = [
  // '/',
  '/chat',
  '/login',
  '/manifest.json',
  '/bundle.js',
  'https://fonts.googleapis.com/css?family=VT323',
  'https://fonts.gstatic.com/s/vt323/v9/vB0CfoJ37mvN-Rdp92NUWaCWcynf_cDxXwCLxiixG1c.woff2',
  'https://fonts.googleapis.com/css?family=Source+Sans+Pro:300,400,700',
  'http://code.ionicframework.com/ionicons/2.0.1/css/ionicons.min.css',
  'https://maxcdn.bootstrapcdn.com/bootswatch/3.3.7/cosmo/bootstrap.min.css',
];

self.addEventListener('install', (event) => {
  event.waitUntil(
    caches.open(cacheName).then(cache => cache.addAll(cacheUrls))
  );
});

self.addEventListener('fetch', function(event) {
  event.respondWith(
    fetch(event.request).catch(() => {
      return caches.match(event.request).then((res) => {
        if (res) {
          return res;
        } else {
          return fetch(event.request)
            .then(res => {
              cache.put(event.request, response.clone());
              return res;
            })
            .catch(console.warn);
        }
      })
    })
  );
});
