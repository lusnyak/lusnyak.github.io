'use strict';
const MANIFEST = 'flutter-app-manifest';
const TEMP = 'flutter-temp-cache';
const CACHE_NAME = 'flutter-app-cache';
const RESOURCES = {
  "version.json": "bd590c03f7df172523c49538cc223e27",
"index.html": "621580ee3a5899e7b00cce10eabc15c6",
"/": "621580ee3a5899e7b00cce10eabc15c6",
"main.dart.js": "f56bf5a6d24891cb307f91bae630a4f2",
"favicon.png": "5dcef449791fa27946b3d35ad8803796",
"icons/Icon-192.png": "ac9a721a12bbc803b44f645561ecb1e1",
"icons/Icon-maskable-192.png": "c457ef57daa1d16f64b27b786ec2ea3c",
"icons/Icon-maskable-512.png": "301a7604d45b3e739efc881eb04896ea",
"icons/Icon-512.png": "96e752610906ba2a93c65f8abe1645f1",
"manifest.json": "15e02d2267f8190fbeefa8f8fa03c795",
"assets/AssetManifest.json": "aba23e6a8f708fc06569a67c9818b62f",
"assets/NOTICES": "fe0c6f993ba163b67c178c60b0b601a9",
"assets/FontManifest.json": "2b294ec57e46463e2e3a3843af5f553f",
"assets/packages/cupertino_icons/assets/CupertinoIcons.ttf": "6d342eb68f170c97609e9da345464e5e",
"assets/fonts/MaterialIcons-Regular.otf": "e7069dfd19b331be16bed984668fe080",
"assets/assets/svg/first-page.svg": "33f384bee8c1a2eec62ef68e40e92283",
"assets/assets/svg/android-red.svg": "b6a16e8aa2473a2ba5dc182931a21c5b",
"assets/assets/svg/android.svg": "10f0b7600e6d4513726afcbe88e0e7f0",
"assets/assets/svg/user_default.svg": "c4df113908adf83aef3719b6f591ba52",
"assets/assets/svg/show.svg": "9a0a8694c21416d8c318af62063a647b",
"assets/assets/svg/user-circle-add.svg": "fe92bf643f5b476aef2b4e7f8591b95c",
"assets/assets/svg/amore.svg": "7692e5b021e169d4b8818f4a8c01b7a8",
"assets/assets/svg/clock-red.svg": "34e9665ad31dc55a1f84a67f53591e67",
"assets/assets/svg/trash-white.svg": "0d73c9e86682d39ea8a8ce42ebd1e0e0",
"assets/assets/svg/close-circle.svg": "e16cea94387f555b4e05a39441b9e25b",
"assets/assets/svg/slash.svg": "0c5936c14eba033b1844eaffe64e85d2",
"assets/assets/svg/slash-red.svg": "2d1b5cb6f648fe819629eb935a475fbf",
"assets/assets/svg/search-normal.svg": "20b91564bd6843ad1755bda2612ff255",
"assets/assets/svg/people.svg": "9ea90dd78ecfa5f86195154b8db8da13",
"assets/assets/svg/info-circle.svg": "a64eadf2602b07772af955eb309040d0",
"assets/assets/svg/people-red.svg": "86779b12d9eea81b8912832771a8a9c7",
"assets/assets/svg/hide.svg": "ee1cd6d78a6672d75c7327b1c08a9974",
"assets/assets/svg/user-circle-add-red.svg": "e0447770293057da0936bb428bf5f143",
"assets/assets/svg/crown.svg": "01f951130aca54fd565825589873a10b",
"assets/assets/svg/crown-red.svg": "2a5db69e966035a3d57ba233cab8cf12",
"assets/assets/svg/trash.svg": "9b6019d651dfbac9bbd623c521f839ed",
"assets/assets/svg/gallery-add.svg": "1c1b55851c4ff750204cae4d20078a7f",
"assets/assets/svg/clock.svg": "60c153ed9d5629768674d188e8a519b9",
"assets/assets/svg/close-square.svg": "6086344b9bc468f059b9f2d24aabece5",
"assets/assets/svg/radar-red.svg": "0ea4071d6936fd93df324eb59fa268a2",
"assets/assets/svg/show-big.svg": "4272d7b2d8f490d240f7fcc82bbc1bed",
"assets/assets/svg/close-circle-red.svg": "64f1fc939b0085e95ff6736660518546",
"assets/assets/svg/location-red.svg": "68d12ca28144958b86a47018946f7341",
"assets/assets/svg/minus.svg": "69cf36ee6aae3cc819aa55370b8412d6",
"assets/assets/svg/heart.svg": "841ddc8fcf0fc282c9423aeccbead47d",
"assets/assets/svg/android-white.svg": "dd28c5bab27ab3ab624089a14689aaa8",
"assets/assets/images/user_default.png": "c49b8ad80d00f0718cf39314643e6504",
"assets/assets/fonts/Circe/Circe-ExtraBold.otf": "7e553a6c0bf3a0622f0a2459c640b17e",
"assets/assets/fonts/Circe/Circe-Light.otf": "fcff34ec64e71eb0d96c580ad4468343",
"assets/assets/fonts/Circe/Circe-ExtraLight.otf": "73b8b3e4cd98276d9c6027f37eabb6c6",
"assets/assets/fonts/Circe/Circe-Regular.otf": "534ec7d59fae6ac015a8491928d1f159",
"assets/assets/fonts/Circe/Circe-Bold.otf": "208f1642b4f4c1bd8b66d7c7f56b5579"
};

// The application shell files that are downloaded before a service worker can
// start.
const CORE = [
  "main.dart.js",
"index.html",
"assets/AssetManifest.json",
"assets/FontManifest.json"];
// During install, the TEMP cache is populated with the application shell files.
self.addEventListener("install", (event) => {
  self.skipWaiting();
  return event.waitUntil(
    caches.open(TEMP).then((cache) => {
      return cache.addAll(
        CORE.map((value) => new Request(value, {'cache': 'reload'})));
    })
  );
});

// During activate, the cache is populated with the temp files downloaded in
// install. If this service worker is upgrading from one with a saved
// MANIFEST, then use this to retain unchanged resource files.
self.addEventListener("activate", function(event) {
  return event.waitUntil(async function() {
    try {
      var contentCache = await caches.open(CACHE_NAME);
      var tempCache = await caches.open(TEMP);
      var manifestCache = await caches.open(MANIFEST);
      var manifest = await manifestCache.match('manifest');
      // When there is no prior manifest, clear the entire cache.
      if (!manifest) {
        await caches.delete(CACHE_NAME);
        contentCache = await caches.open(CACHE_NAME);
        for (var request of await tempCache.keys()) {
          var response = await tempCache.match(request);
          await contentCache.put(request, response);
        }
        await caches.delete(TEMP);
        // Save the manifest to make future upgrades efficient.
        await manifestCache.put('manifest', new Response(JSON.stringify(RESOURCES)));
        return;
      }
      var oldManifest = await manifest.json();
      var origin = self.location.origin;
      for (var request of await contentCache.keys()) {
        var key = request.url.substring(origin.length + 1);
        if (key == "") {
          key = "/";
        }
        // If a resource from the old manifest is not in the new cache, or if
        // the MD5 sum has changed, delete it. Otherwise the resource is left
        // in the cache and can be reused by the new service worker.
        if (!RESOURCES[key] || RESOURCES[key] != oldManifest[key]) {
          await contentCache.delete(request);
        }
      }
      // Populate the cache with the app shell TEMP files, potentially overwriting
      // cache files preserved above.
      for (var request of await tempCache.keys()) {
        var response = await tempCache.match(request);
        await contentCache.put(request, response);
      }
      await caches.delete(TEMP);
      // Save the manifest to make future upgrades efficient.
      await manifestCache.put('manifest', new Response(JSON.stringify(RESOURCES)));
      return;
    } catch (err) {
      // On an unhandled exception the state of the cache cannot be guaranteed.
      console.error('Failed to upgrade service worker: ' + err);
      await caches.delete(CACHE_NAME);
      await caches.delete(TEMP);
      await caches.delete(MANIFEST);
    }
  }());
});

// The fetch handler redirects requests for RESOURCE files to the service
// worker cache.
self.addEventListener("fetch", (event) => {
  if (event.request.method !== 'GET') {
    return;
  }
  var origin = self.location.origin;
  var key = event.request.url.substring(origin.length + 1);
  // Redirect URLs to the index.html
  if (key.indexOf('?v=') != -1) {
    key = key.split('?v=')[0];
  }
  if (event.request.url == origin || event.request.url.startsWith(origin + '/#') || key == '') {
    key = '/';
  }
  // If the URL is not the RESOURCE list then return to signal that the
  // browser should take over.
  if (!RESOURCES[key]) {
    return;
  }
  // If the URL is the index.html, perform an online-first request.
  if (key == '/') {
    return onlineFirst(event);
  }
  event.respondWith(caches.open(CACHE_NAME)
    .then((cache) =>  {
      return cache.match(event.request).then((response) => {
        // Either respond with the cached resource, or perform a fetch and
        // lazily populate the cache only if the resource was successfully fetched.
        return response || fetch(event.request).then((response) => {
          if (response && Boolean(response.ok)) {
            cache.put(event.request, response.clone());
          }
          return response;
        });
      })
    })
  );
});

self.addEventListener('message', (event) => {
  // SkipWaiting can be used to immediately activate a waiting service worker.
  // This will also require a page refresh triggered by the main worker.
  if (event.data === 'skipWaiting') {
    self.skipWaiting();
    return;
  }
  if (event.data === 'downloadOffline') {
    downloadOffline();
    return;
  }
});

// Download offline will check the RESOURCES for all files not in the cache
// and populate them.
async function downloadOffline() {
  var resources = [];
  var contentCache = await caches.open(CACHE_NAME);
  var currentContent = {};
  for (var request of await contentCache.keys()) {
    var key = request.url.substring(origin.length + 1);
    if (key == "") {
      key = "/";
    }
    currentContent[key] = true;
  }
  for (var resourceKey of Object.keys(RESOURCES)) {
    if (!currentContent[resourceKey]) {
      resources.push(resourceKey);
    }
  }
  return contentCache.addAll(resources);
}

// Attempt to download the resource online before falling back to
// the offline cache.
function onlineFirst(event) {
  return event.respondWith(
    fetch(event.request).then((response) => {
      return caches.open(CACHE_NAME).then((cache) => {
        cache.put(event.request, response.clone());
        return response;
      });
    }).catch((error) => {
      return caches.open(CACHE_NAME).then((cache) => {
        return cache.match(event.request).then((response) => {
          if (response != null) {
            return response;
          }
          throw error;
        });
      });
    })
  );
}
