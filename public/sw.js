if (!self.define) {
  let e,
    s = {};
  const a = (a, n) => (
    (a = new URL(a + '.js', n).href),
    s[a] ||
      new Promise((s) => {
        if ('document' in self) {
          const e = document.createElement('script');
          (e.src = a), (e.onload = s), document.head.appendChild(e);
        } else (e = a), importScripts(a), s();
      }).then(() => {
        let e = s[a];
        if (!e) throw new Error(`Module ${a} didn’t register its module`);
        return e;
      })
  );
  self.define = (n, i) => {
    const c =
      e ||
      ('document' in self ? document.currentScript.src : '') ||
      location.href;
    if (s[c]) return;
    let l = {};
    const t = (e) => a(e, c),
      p = { module: { uri: c }, exports: l, require: t };
    s[c] = Promise.all(n.map((e) => p[e] || t(e))).then((e) => (i(...e), l));
  };
}
define(['./workbox-dff6d9f4'], function (e) {
  'use strict';
  importScripts(),
    self.skipWaiting(),
    e.clientsClaim(),
    e.precacheAndRoute(
      [
        {
          url: '/_next/static/-bj4zQJn2NlkQUeCYwj2q/_buildManifest.js',
          revision: '-bj4zQJn2NlkQUeCYwj2q',
        },
        {
          url: '/_next/static/-bj4zQJn2NlkQUeCYwj2q/_ssgManifest.js',
          revision: '-bj4zQJn2NlkQUeCYwj2q',
        },
        {
          url: '/_next/static/chunks/ae51ba48-678b8fe997016f512947.js',
          revision: '-bj4zQJn2NlkQUeCYwj2q',
        },
        {
          url: '/_next/static/chunks/framework-895f067827ebe11ffe45.js',
          revision: '-bj4zQJn2NlkQUeCYwj2q',
        },
        {
          url: '/_next/static/chunks/main-0c9a28a002d9e4d4b8d0.js',
          revision: '-bj4zQJn2NlkQUeCYwj2q',
        },
        {
          url: '/_next/static/chunks/pages/_app-8c4a2c03c3c3fc4d689d.js',
          revision: '-bj4zQJn2NlkQUeCYwj2q',
        },
        {
          url: '/_next/static/chunks/pages/_error-737a04e9a0da63c9d162.js',
          revision: '-bj4zQJn2NlkQUeCYwj2q',
        },
        {
          url: '/_next/static/chunks/pages/index-107f99cf483a58c3f2d7.js',
          revision: '-bj4zQJn2NlkQUeCYwj2q',
        },
        {
          url: '/_next/static/chunks/polyfills-a40ef1678bae11e696dba45124eadd70.js',
          revision: '-bj4zQJn2NlkQUeCYwj2q',
        },
        {
          url: '/_next/static/chunks/webpack-1a8a258926ecde76681b.js',
          revision: '-bj4zQJn2NlkQUeCYwj2q',
        },
        {
          url: '/_next/static/css/0d66c2b8533967000534.css',
          revision: '-bj4zQJn2NlkQUeCYwj2q',
        },
        {
          url: '/_next/static/media/oswald-all-400-normal.f2f316c26625136e591d8825c3ab8547.woff',
          revision: '-bj4zQJn2NlkQUeCYwj2q',
        },
        {
          url: '/_next/static/media/oswald-cyrillic-400-normal.31bdfbc69b2e80f4bc4b132b14e824bf.woff2',
          revision: '-bj4zQJn2NlkQUeCYwj2q',
        },
        {
          url: '/_next/static/media/oswald-cyrillic-ext-400-normal.2140c711cd14bc61cc52701129a25e62.woff2',
          revision: '-bj4zQJn2NlkQUeCYwj2q',
        },
        {
          url: '/_next/static/media/oswald-latin-400-normal.c21c1cd857a6c6535478e5876569399b.woff2',
          revision: '-bj4zQJn2NlkQUeCYwj2q',
        },
        {
          url: '/_next/static/media/oswald-latin-ext-400-normal.0d3864f20f3490be8d0515aeca25c52e.woff2',
          revision: '-bj4zQJn2NlkQUeCYwj2q',
        },
        {
          url: '/_next/static/media/oswald-vietnamese-400-normal.ba5b5084895220583f92ffeda2a25be3.woff2',
          revision: '-bj4zQJn2NlkQUeCYwj2q',
        },
        { url: '/countdown.svg', revision: '4f61a19b816749fc0d92a3fc703e0402' },
        {
          url: '/icons/apple-icon-180.png',
          revision: '4420e86583d82db126948fca92aa0e75',
        },
        {
          url: '/icons/manifest-icon-192.png',
          revision: '7f1885b361d8c81d8385a8a1499013f0',
        },
        {
          url: '/icons/manifest-icon-512.png',
          revision: '9d5e72251e532588e83cd75cfb022554',
        },
        { url: '/manifest.json', revision: '906549bcfd992c2322054db0e4791940' },
        {
          url: '/splash/apple-splash-1125-2436.jpg',
          revision: 'b21bc19cd3a4fcfb90095261074e675f',
        },
        {
          url: '/splash/apple-splash-1136-640.jpg',
          revision: '14bd4564388c7e31fd3d00c71c142500',
        },
        {
          url: '/splash/apple-splash-1170-2532.jpg',
          revision: 'cea1ac8ac6f082c370e0b8e2f0560435',
        },
        {
          url: '/splash/apple-splash-1242-2208.jpg',
          revision: '1746ad2dccfd469ff3241afcbeb919a7',
        },
        {
          url: '/splash/apple-splash-1242-2688.jpg',
          revision: 'a5fe720109f4a230e12596e09cea9d53',
        },
        {
          url: '/splash/apple-splash-1284-2778.jpg',
          revision: 'd6a8d921b34d506581c7d7b758578bca',
        },
        {
          url: '/splash/apple-splash-1334-750.jpg',
          revision: '899b038f426b0d0c993c5e8e352a8e5c',
        },
        {
          url: '/splash/apple-splash-1536-2048.jpg',
          revision: '19e6ecf3f9164887ea3505b3f2b5cc11',
        },
        {
          url: '/splash/apple-splash-1620-2160.jpg',
          revision: '792e7d5a7756f1f3656efb058c8f4dc6',
        },
        {
          url: '/splash/apple-splash-1668-2224.jpg',
          revision: '246796e56dd7817c6a8b67a1923f09b9',
        },
        {
          url: '/splash/apple-splash-1668-2388.jpg',
          revision: '5523129bdd220dd31b7a10d52ba3c5dc',
        },
        {
          url: '/splash/apple-splash-1792-828.jpg',
          revision: '6660ff571da7c314624422d3bb40b7f7',
        },
        {
          url: '/splash/apple-splash-2048-1536.jpg',
          revision: 'e0a02652b2f924ec0d39f8b94854e0c5',
        },
        {
          url: '/splash/apple-splash-2048-2732.jpg',
          revision: '16887100ec2883131abe15f42c169e08',
        },
        {
          url: '/splash/apple-splash-2160-1620.jpg',
          revision: 'b09bf3025c42c55dbdf8f3a56868598c',
        },
        {
          url: '/splash/apple-splash-2208-1242.jpg',
          revision: '21b1bcb784fb527e5a8a763feef6a35f',
        },
        {
          url: '/splash/apple-splash-2224-1668.jpg',
          revision: 'cb1b15027ed568ce324917ae3ab07e47',
        },
        {
          url: '/splash/apple-splash-2388-1668.jpg',
          revision: 'a63a65fb98ff6f4d9fd9693926f7a53c',
        },
        {
          url: '/splash/apple-splash-2436-1125.jpg',
          revision: '924156e2c62a66476ca6f31c1dbdf596',
        },
        {
          url: '/splash/apple-splash-2532-1170.jpg',
          revision: '9cb32a6701b7246e307c18528f1cf991',
        },
        {
          url: '/splash/apple-splash-2688-1242.jpg',
          revision: 'bb83df2c84d4425bfc9dceaa867bb40d',
        },
        {
          url: '/splash/apple-splash-2732-2048.jpg',
          revision: '3cb90c2d8ab5e9a080b1b0c2e19281bc',
        },
        {
          url: '/splash/apple-splash-2778-1284.jpg',
          revision: '0849dc40ed66fcb87c7d6158e3c2d007',
        },
        {
          url: '/splash/apple-splash-640-1136.jpg',
          revision: '3b7e2640886c52d0edc107b721250899',
        },
        {
          url: '/splash/apple-splash-750-1334.jpg',
          revision: 'b1d799a0011ef0cad5e4925d9400cc6e',
        },
        {
          url: '/splash/apple-splash-828-1792.jpg',
          revision: '193b049005883d03c0a2a381bd8118e3',
        },
        { url: '/vercel.svg', revision: '4b4f1876502eb6721764637fe5c41702' },
      ],
      { ignoreURLParametersMatching: [] }
    ),
    e.cleanupOutdatedCaches(),
    e.registerRoute(
      '/',
      new e.NetworkFirst({
        cacheName: 'start-url',
        plugins: [
          {
            cacheWillUpdate: async ({
              request: e,
              response: s,
              event: a,
              state: n,
            }) =>
              s && 'opaqueredirect' === s.type
                ? new Response(s.body, {
                    status: 200,
                    statusText: 'OK',
                    headers: s.headers,
                  })
                : s,
          },
        ],
      }),
      'GET'
    ),
    e.registerRoute(
      /^https:\/\/fonts\.(?:gstatic)\.com\/.*/i,
      new e.CacheFirst({
        cacheName: 'google-fonts-webfonts',
        plugins: [
          new e.ExpirationPlugin({ maxEntries: 4, maxAgeSeconds: 31536e3 }),
        ],
      }),
      'GET'
    ),
    e.registerRoute(
      /^https:\/\/fonts\.(?:googleapis)\.com\/.*/i,
      new e.StaleWhileRevalidate({
        cacheName: 'google-fonts-stylesheets',
        plugins: [
          new e.ExpirationPlugin({ maxEntries: 4, maxAgeSeconds: 604800 }),
        ],
      }),
      'GET'
    ),
    e.registerRoute(
      /\.(?:eot|otf|ttc|ttf|woff|woff2|font.css)$/i,
      new e.StaleWhileRevalidate({
        cacheName: 'static-font-assets',
        plugins: [
          new e.ExpirationPlugin({ maxEntries: 4, maxAgeSeconds: 604800 }),
        ],
      }),
      'GET'
    ),
    e.registerRoute(
      /\.(?:jpg|jpeg|gif|png|svg|ico|webp)$/i,
      new e.StaleWhileRevalidate({
        cacheName: 'static-image-assets',
        plugins: [
          new e.ExpirationPlugin({ maxEntries: 64, maxAgeSeconds: 86400 }),
        ],
      }),
      'GET'
    ),
    e.registerRoute(
      /\/_next\/image\?url=.+$/i,
      new e.StaleWhileRevalidate({
        cacheName: 'next-image',
        plugins: [
          new e.ExpirationPlugin({ maxEntries: 64, maxAgeSeconds: 86400 }),
        ],
      }),
      'GET'
    ),
    e.registerRoute(
      /\.(?:mp3|wav|ogg)$/i,
      new e.CacheFirst({
        cacheName: 'static-audio-assets',
        plugins: [
          new e.RangeRequestsPlugin(),
          new e.ExpirationPlugin({ maxEntries: 32, maxAgeSeconds: 86400 }),
        ],
      }),
      'GET'
    ),
    e.registerRoute(
      /\.(?:mp4)$/i,
      new e.CacheFirst({
        cacheName: 'static-video-assets',
        plugins: [
          new e.RangeRequestsPlugin(),
          new e.ExpirationPlugin({ maxEntries: 32, maxAgeSeconds: 86400 }),
        ],
      }),
      'GET'
    ),
    e.registerRoute(
      /\.(?:js)$/i,
      new e.StaleWhileRevalidate({
        cacheName: 'static-js-assets',
        plugins: [
          new e.ExpirationPlugin({ maxEntries: 32, maxAgeSeconds: 86400 }),
        ],
      }),
      'GET'
    ),
    e.registerRoute(
      /\.(?:css|less)$/i,
      new e.StaleWhileRevalidate({
        cacheName: 'static-style-assets',
        plugins: [
          new e.ExpirationPlugin({ maxEntries: 32, maxAgeSeconds: 86400 }),
        ],
      }),
      'GET'
    ),
    e.registerRoute(
      /\/_next\/data\/.+\/.+\.json$/i,
      new e.StaleWhileRevalidate({
        cacheName: 'next-data',
        plugins: [
          new e.ExpirationPlugin({ maxEntries: 32, maxAgeSeconds: 86400 }),
        ],
      }),
      'GET'
    ),
    e.registerRoute(
      /\.(?:json|xml|csv)$/i,
      new e.NetworkFirst({
        cacheName: 'static-data-assets',
        plugins: [
          new e.ExpirationPlugin({ maxEntries: 32, maxAgeSeconds: 86400 }),
        ],
      }),
      'GET'
    ),
    e.registerRoute(
      ({ url: e }) => {
        if (!(self.origin === e.origin)) return !1;
        const s = e.pathname;
        return !s.startsWith('/api/auth/') && !!s.startsWith('/api/');
      },
      new e.NetworkFirst({
        cacheName: 'apis',
        networkTimeoutSeconds: 10,
        plugins: [
          new e.ExpirationPlugin({ maxEntries: 16, maxAgeSeconds: 86400 }),
        ],
      }),
      'GET'
    ),
    e.registerRoute(
      ({ url: e }) => {
        if (!(self.origin === e.origin)) return !1;
        return !e.pathname.startsWith('/api/');
      },
      new e.NetworkFirst({
        cacheName: 'others',
        networkTimeoutSeconds: 10,
        plugins: [
          new e.ExpirationPlugin({ maxEntries: 32, maxAgeSeconds: 86400 }),
        ],
      }),
      'GET'
    ),
    e.registerRoute(
      ({ url: e }) => !(self.origin === e.origin),
      new e.NetworkFirst({
        cacheName: 'cross-origin',
        networkTimeoutSeconds: 10,
        plugins: [
          new e.ExpirationPlugin({ maxEntries: 32, maxAgeSeconds: 3600 }),
        ],
      }),
      'GET'
    );
});
