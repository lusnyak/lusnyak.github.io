'use strict';
const MANIFEST = 'flutter-app-manifest';
const TEMP = 'flutter-temp-cache';
const CACHE_NAME = 'flutter-app-cache';

const RESOURCES = {"version.json": "e11d666628d2b926730b946ef502894a",
"index.html": "2832dad5d85b14b4a722c4a3dac1c9d7",
"/": "2832dad5d85b14b4a722c4a3dac1c9d7",
"main.dart.js": "476e45083144d12dc83a584a892c0423",
"flutter.js": "6fef97aeca90b426343ba6c5c9dc5d4a",
"favicon.png": "5dcef449791fa27946b3d35ad8803796",
"icons/Icon-192.png": "ac9a721a12bbc803b44f645561ecb1e1",
"icons/Icon-maskable-192.png": "c457ef57daa1d16f64b27b786ec2ea3c",
"icons/Icon-maskable-512.png": "301a7604d45b3e739efc881eb04896ea",
"icons/Icon-512.png": "96e752610906ba2a93c65f8abe1645f1",
"manifest.json": "15e02d2267f8190fbeefa8f8fa03c795",
"assets/AssetManifest.json": "30e3b27eccd1cfe5a6d31547404add31",
"assets/NOTICES": "76b20781cf8bb0725bfd3ab518392e1c",
"assets/FontManifest.json": "2b294ec57e46463e2e3a3843af5f553f",
"assets/packages/cupertino_icons/assets/CupertinoIcons.ttf": "89ed8f4e49bcdfc0b5bfc9b24591e347",
"assets/shaders/ink_sparkle.frag": "f8b80e740d33eb157090be4e995febdf",
"assets/AssetManifest.bin": "13ef0b542a26424e827181890a1c5a58",
"assets/fonts/MaterialIcons-Regular.otf": "d1334b2166ab35b65a6160ab5ed76774",
"assets/assets/svg/blue_accept.svg": "e0eb1977d4bbb7d8af35c90123f1a754",
"assets/assets/svg/image-red.svg": "e9e28a30e718964be4c3699dbf2cbd10",
"assets/assets/svg/first-page.svg": "33f384bee8c1a2eec62ef68e40e92283",
"assets/assets/svg/mars-gender-white.svg": "34e7257aca32e7e804ae28e849f78f00",
"assets/assets/svg/android-red.svg": "b6a16e8aa2473a2ba5dc182931a21c5b",
"assets/assets/svg/inactive-brown.svg": "f9becc10525308c2b0b19cff59716f82",
"assets/assets/svg/venus-gender-brown.svg": "e64331838c887555214fa2e01b522681",
"assets/assets/svg/android.svg": "10f0b7600e6d4513726afcbe88e0e7f0",
"assets/assets/svg/mars-gender-brown.svg": "c1fc73e81e7c620759bc9d7f0ad95611",
"assets/assets/svg/user_default.svg": "c4df113908adf83aef3719b6f591ba52",
"assets/assets/svg/venus-gender-white.svg": "61479d890fa7b38651396c11efe155f3",
"assets/assets/svg/inactive-white.svg": "78402dccd1c7b175ba47d61a69ef9c88",
"assets/assets/svg/show.svg": "9a0a8694c21416d8c318af62063a647b",
"assets/assets/svg/user-circle-add.svg": "fe92bf643f5b476aef2b4e7f8591b95c",
"assets/assets/svg/gay-gender-brown.svg": "27ad4b7c904a75b5d2f236483921de47",
"assets/assets/svg/amore.svg": "7692e5b021e169d4b8818f4a8c01b7a8",
"assets/assets/svg/clock-red.svg": "34e9665ad31dc55a1f84a67f53591e67",
"assets/assets/svg/trash-white.svg": "0d73c9e86682d39ea8a8ce42ebd1e0e0",
"assets/assets/svg/close-circle.svg": "e16cea94387f555b4e05a39441b9e25b",
"assets/assets/svg/slash.svg": "0c5936c14eba033b1844eaffe64e85d2",
"assets/assets/svg/slash-red.svg": "2d1b5cb6f648fe819629eb935a475fbf",
"assets/assets/svg/search-normal.svg": "20b91564bd6843ad1755bda2612ff255",
"assets/assets/svg/gay-gender-white.svg": "3b98ba6fa22707cc8e8bca6cc525139c",
"assets/assets/svg/people.svg": "9ea90dd78ecfa5f86195154b8db8da13",
"assets/assets/svg/info-circle.svg": "a64eadf2602b07772af955eb309040d0",
"assets/assets/svg/people-red.svg": "86779b12d9eea81b8912832771a8a9c7",
"assets/assets/svg/hide.svg": "ee1cd6d78a6672d75c7327b1c08a9974",
"assets/assets/svg/user-circle-add-red.svg": "e0447770293057da0936bb428bf5f143",
"assets/assets/svg/crown.svg": "01f951130aca54fd565825589873a10b",
"assets/assets/svg/crown-red.svg": "2a5db69e966035a3d57ba233cab8cf12",
"assets/assets/svg/send.svg": "e872083470f128c9546a22ba98adff8f",
"assets/assets/svg/trash.svg": "9b6019d651dfbac9bbd623c521f839ed",
"assets/assets/svg/gallery-add.svg": "1c1b55851c4ff750204cae4d20078a7f",
"assets/assets/svg/clock.svg": "60c153ed9d5629768674d188e8a519b9",
"assets/assets/svg/lesbian-gender-brown.svg": "44fc74cba18e8c001f2a92619e285f50",
"assets/assets/svg/crown-white.svg": "f67a1d2faf7b0ff633b3be65265551d4",
"assets/assets/svg/red_reject.svg": "2446f06a88c7805f7738b6e3d330c34c",
"assets/assets/svg/close-circle-white.svg": "1bf3ba82c9e59772441a50d78f3eedfd",
"assets/assets/svg/messages-brown.svg": "fb10afbb8b7cb5394e4c9ea9defcbb1e",
"assets/assets/svg/close-square.svg": "6086344b9bc468f059b9f2d24aabece5",
"assets/assets/svg/radar-red.svg": "0ea4071d6936fd93df324eb59fa268a2",
"assets/assets/svg/show-big.svg": "4272d7b2d8f490d240f7fcc82bbc1bed",
"assets/assets/svg/messages-white.svg": "3a021855c1f899728fd91c32a3cd4950",
"assets/assets/svg/lesbian-gender-white.svg": "ff70418dd4525f0c7e49e084ff5e5618",
"assets/assets/svg/close-circle-red.svg": "64f1fc939b0085e95ff6736660518546",
"assets/assets/svg/location-red.svg": "68d12ca28144958b86a47018946f7341",
"assets/assets/svg/minus.svg": "69cf36ee6aae3cc819aa55370b8412d6",
"assets/assets/svg/crown-brown.svg": "a5c16f7a67a434b7f561e58bb9286d8b",
"assets/assets/svg/heart.svg": "841ddc8fcf0fc282c9423aeccbead47d",
"assets/assets/svg/android-white.svg": "dd28c5bab27ab3ab624089a14689aaa8",
"assets/assets/images/user_default.png": "c49b8ad80d00f0718cf39314643e6504",
"assets/assets/fonts/Circe/Circe-ExtraBold.otf": "7e553a6c0bf3a0622f0a2459c640b17e",
"assets/assets/fonts/Circe/Circe-Light.otf": "fcff34ec64e71eb0d96c580ad4468343",
"assets/assets/fonts/Circe/Circe-ExtraLight.otf": "73b8b3e4cd98276d9c6027f37eabb6c6",
"assets/assets/fonts/Circe/Circe-Regular.otf": "534ec7d59fae6ac015a8491928d1f159",
"assets/assets/fonts/Circe/Circe-Bold.otf": "208f1642b4f4c1bd8b66d7c7f56b5579",
"canvaskit/skwasm.js": "95f16c6690f955a45b2317496983dbe9",
"canvaskit/skwasm.wasm": "d1fde2560be92c0b07ad9cf9acb10d05",
"canvaskit/chromium/canvaskit.js": "ffb2bb6484d5689d91f393b60664d530",
"canvaskit/chromium/canvaskit.wasm": "393ec8fb05d94036734f8104fa550a67",
"canvaskit/canvaskit.js": "5caccb235fad20e9b72ea6da5a0094e6",
"canvaskit/canvaskit.wasm": "d9f69e0f428f695dc3d66b3a83a4aa8e",
"canvaskit/skwasm.worker.js": "51253d3321b11ddb8d73fa8aa87d3b15"};
// The application shell files that are downloaded before a service worker can
// start.
const CORE = ["main.dart.js",
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
        // Claim client to enable caching on first launch
        self.clients.claim();
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
      // Claim client to enable caching on first launch
      self.clients.claim();
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
