'use strict';
const MANIFEST = 'flutter-app-manifest';
const TEMP = 'flutter-temp-cache';
const CACHE_NAME = 'flutter-app-cache';
const RESOURCES = {
  "assets/AssetManifest.json": "106af8ba614ae8201459996f80fd55a6",
"assets/audios/holiday/01-Pista1.mp3": "d6d82d60f8eb03f6d108edd1cd522484",
"assets/audios/holiday/02-Pista2.mp3": "51d5b2a51a389d9ec85447acf767af4c",
"assets/audios/holiday/03-Pista3.mp3": "9c7516f50b768495307fe77ebe954ffb",
"assets/audios/holiday/04-Pista4.mp3": "9d2e7e026a42f2d9dd819b9506dcf3fd",
"assets/audios/holiday/05-Pista5.mp3": "6a7a5a4ecefb0ac63fb2d973463c4184",
"assets/audios/holiday/06-Pista6.mp3": "59dfab50fe584b4623384ad7c2f2b784",
"assets/audios/holiday/07-Pista7.mp3": "de4f6326e9ab1679e401c7f8a41ceb2b",
"assets/audios/holiday/08-Pista8.mp3": "fd3407718b0f953a2dbb529ee27839c0",
"assets/audios/holiday/09-Pista9.mp3": "3f5c5de9a011b4675f679cb27040e0ce",
"assets/audios/holiday/10-Pista10.mp3": "1057ec5073e1c577a6e7f21be92fc9cb",
"assets/audios/holiday/11-Pista11.mp3": "e4d6ce4c3c067ba9b2c1020eaad88860",
"assets/audios/holiday/12-Pista12.mp3": "ac2c00e92fbc13f8dc5e0902a5992813",
"assets/audios/holiday/13-Pista13.mp3": "3f8801377705ac50ee033b9e6051e8c2",
"assets/audios/holiday/14-Pista14.mp3": "8012358eeb1f5de73efaba1b8220c772",
"assets/audios/holiday/15-Pista15.mp3": "979a442dfbc90f41e2ac62563c19965b",
"assets/audios/holiday/16-Pista16.mp3": "ed0662394f5117bf7227c41df1467328",
"assets/audios/holiday/17-Pista17.mp3": "f9dfc64554326119b2fc030a8e16d94a",
"assets/audios/holiday/18-Pista18.mp3": "aa028bc50170c4814ddf77edfa437e6c",
"assets/audios/holiday/19-Pista19.mp3": "021447bf8813a4796b4fb888815769c8",
"assets/audios/holiday/20-Pista20.mp3": "25859c8ca866c578cb6e71e8f093cd29",
"assets/audios/holiday/21-Pista21.mp3": "2464f1d0620bf3e54f210777355bafba",
"assets/audios/holiday/22-Pista22.mp3": "4870dfed6b4a73d4f029698321571379",
"assets/audios/holiday/23-Pista23.mp3": "4605c503844016bc9b2b152a391ce270",
"assets/audios/holiday/24-Pista24.mp3": "c0de4295df70b70ed422c2d3161e00cd",
"assets/audios/holiday/25-Pista25.mp3": "a7de01f7560b81610836a3cc9cc71606",
"assets/audios/holiday/26-Pista26.mp3": "26f9e0263114d64fec4c754ab8fdfb05",
"assets/audios/holiday/27-Pista27.mp3": "6e87c8698242792d461a8b56fdf03dfe",
"assets/audios/holiday/28-Pista28.mp3": "0b4133fc078d9f2c017d4d0566a86082",
"assets/audios/holiday/29-Pista29.mp3": "0299cab82f9fd743414473ddf78d4bbf",
"assets/audios/holiday/30-Pista30.mp3": "e3be6a1fff020893bcf4811d9851f02a",
"assets/audios/levantinos/01-Pista1.mp3": "a90e15abc8cc2cf2c746ff6f3d3fdc84",
"assets/audios/levantinos/02-Pista2.mp3": "23585e1b1ce367010896147fecece0c0",
"assets/audios/levantinos/03-Pista3.mp3": "4c30428982451b0dd6887eb0a87c08d7",
"assets/audios/levantinos/04-Pista4.mp3": "feb2890138b42275c0c1c418ce5031cb",
"assets/audios/levantinos/05-Pista5.mp3": "ef322d9b781413cdc650c1df3f7111d6",
"assets/audios/levantinos/06-Pista6.mp3": "0f2506b93d36a7f1c3680e217149a8ac",
"assets/audios/levantinos/07-Pista7.mp3": "970cc38c9c0a85407837b9953f52a957",
"assets/audios/levantinos/08-Pista8.mp3": "fda6e13ec3d43a6289eb22cddc1deaaf",
"assets/audios/levantinos/09-Pista9.mp3": "870b59d595e1d6c19db2a4268cfe74ec",
"assets/audios/levantinos/10-Pista10.mp3": "9f33d9e11f74f0f4701e22f8bd64db93",
"assets/audios/levantinos/11-Pista11.mp3": "9248b83ada3e831bbdbbf5dcdbb80cee",
"assets/audios/levantinos/12-Pista12.mp3": "1778b24a4125061829fa70c092349b7f",
"assets/FontManifest.json": "dc3d03800ccca4601324923c0b1d6d57",
"assets/fonts/MaterialIcons-Regular.otf": "1288c9e28052e028aba623321f7826ac",
"assets/images/fotos/1--min.jpg": "71c4c1ad8599958e6f828ea6ad5ea8be",
"assets/images/fotos/1-.jpg": "5c13132cb23a8848f6bc17300827de92",
"assets/images/fotos/10--min.jpg": "7ee8c6c227220588c533f60bbff020be",
"assets/images/fotos/10-.jpg": "d51f0565ac3dbb7bbc7e36bf419e9099",
"assets/images/fotos/11--min.jpg": "949848bf9a09015b8245a36877228fe5",
"assets/images/fotos/11-.jpg": "875daf1b0f80b8611ec6b814236a253f",
"assets/images/fotos/12--min.jpg": "ae762911a3f79896878b1f8b62ae43a3",
"assets/images/fotos/12-.jpg": "879c401ada0bcc1d9ed8805afbeb7e7a",
"assets/images/fotos/13--min.jpg": "d4ed2b709ef6b55aad4e9f886efe67be",
"assets/images/fotos/13-.jpg": "e0122ecfbb0f50c74b797f8bc4fc3c34",
"assets/images/fotos/14--min.jpg": "3ed886ec98a803fac0faf4fbe5205f57",
"assets/images/fotos/14-.jpg": "acfa01961b3cbec9b55ec6b4c9e7e2df",
"assets/images/fotos/15--min.jpg": "2b2f3d9742f0ca8c26e4902eaab467f6",
"assets/images/fotos/15-.jpg": "0515aba0c2c0b14bf1f730f1704a7e88",
"assets/images/fotos/16--min.jpg": "26466f8d44587d3c6c6db6612135dd6f",
"assets/images/fotos/16-.jpg": "6834d0e1c13e6749380cb8a70bdb737b",
"assets/images/fotos/17--min.jpg": "86828e7d90e1cee7726f74dbf0cf410c",
"assets/images/fotos/17-.jpg": "9cd052ef1f9aac7fc091443000c147e6",
"assets/images/fotos/18--min.jpg": "f68c9e5c297661d80cadeeda88f0e369",
"assets/images/fotos/18-.jpg": "a3be30770b542eb56eae0ba6964ad47b",
"assets/images/fotos/19--min.jpg": "d69ee3f31a65aa3b53fd79f06f255b96",
"assets/images/fotos/19-.jpg": "390acb864788a56021a14b1c20880529",
"assets/images/fotos/2--min.jpg": "e33d03db3bd6661effcdfdf88fb907c2",
"assets/images/fotos/2-.jpg": "eb043f9f2bb8ec53d103c23a4cd2c21e",
"assets/images/fotos/20--min.jpg": "ae74f3252959e3967f4078bc74542f80",
"assets/images/fotos/20-.jpg": "a71a6c4eb820758c5f2d0c79b04dfbc9",
"assets/images/fotos/21--min.jpg": "a0d0166147639b96096fd729129f05d3",
"assets/images/fotos/21-.jpg": "60aeb109fa7fcb303524ed2a6819191e",
"assets/images/fotos/22--min.jpg": "cad5d6aa86ac12766b0fa9c988ec6121",
"assets/images/fotos/22-.jpg": "224c88353477afd7296a98652805d3ac",
"assets/images/fotos/23--min.jpg": "48d511ebed1d5dfc31309073d149a8fc",
"assets/images/fotos/23-.jpg": "56aea65d1f3adb9355dbb0af58aa672c",
"assets/images/fotos/24--min.jpg": "cf4f5d83456fddc89017d3d39d52f544",
"assets/images/fotos/24-.jpg": "e275516bb8e8475a60b1dd2d7b3760f0",
"assets/images/fotos/25--min.jpg": "770da4736f1ce71885f408212bbdd74a",
"assets/images/fotos/25-.jpg": "2bf3032ac7378477a9789b19116fff7c",
"assets/images/fotos/26--min.jpg": "47ecaab93744109b235a707eb4c86659",
"assets/images/fotos/26-.jpg": "194de041a60a6cc8d2c3ec942686be8c",
"assets/images/fotos/27--min.jpg": "14d02c807a7780a448644c2be1bfa777",
"assets/images/fotos/27-.jpg": "3fab900ebefe2f8df829a0b06cdfabb8",
"assets/images/fotos/28--min.jpg": "084d8dd0f6a12fe4bd8a71db5813c824",
"assets/images/fotos/28-.jpg": "899480f98f40b5f988f6f4ef68dcca3b",
"assets/images/fotos/29--min.jpg": "25981213b3a6c18184f1eefc4db68d4d",
"assets/images/fotos/29-.jpg": "7d16fe80becd386abc47ca1a7cfaaa0b",
"assets/images/fotos/3--min.jpg": "5b23fbc468270cb5f5358f97e56c66e0",
"assets/images/fotos/3-.jpg": "5fd4e97726695789088c07049b258c54",
"assets/images/fotos/30--min.jpg": "42ff162cacb0c318a2b1f8a5b4addd4d",
"assets/images/fotos/30-.jpg": "a7273355161f2c28c19304d965e6de09",
"assets/images/fotos/31--min.jpg": "cd40eea3fb1d4903928cf0a0ef832a51",
"assets/images/fotos/31-.jpg": "25202bc2e9c5d485325ff7ccbc689793",
"assets/images/fotos/32--min.jpg": "4b7433ea66b6de9388c0fc692f075a96",
"assets/images/fotos/32-.jpg": "57338c5f68b3f47094720d763f122d61",
"assets/images/fotos/33--min.jpg": "2fe091e363082a0bc9ad756047482a2f",
"assets/images/fotos/33-.jpg": "82c3a18c38285ed41a1b73a72c57f91b",
"assets/images/fotos/34--min.jpg": "7b93f8d8640956da399389ded098d491",
"assets/images/fotos/34-.jpg": "46f21a455bd1a24177c4c9e32729665a",
"assets/images/fotos/35--min.jpg": "67812edab7cb951df69cf6b7be8bd7d3",
"assets/images/fotos/35-.jpg": "94955eaf14f33c91212229af9afd62c8",
"assets/images/fotos/36--min.jpg": "bb97e6115cc763ff70683979ba8dbab4",
"assets/images/fotos/36-.jpg": "f511ee442f56d30e1f22725448e1bdf9",
"assets/images/fotos/37--min.jpg": "7e434e1b1c5b5835728b37edc114d3c8",
"assets/images/fotos/37-.jpg": "a339bdce9230ea9c49a441c7240daef1",
"assets/images/fotos/39--min.jpg": "eb846e7aae028915ccb4afb0888c1b25",
"assets/images/fotos/39-.jpg": "384cf91bc924f96e36c468f9b6c9feb6",
"assets/images/fotos/4--min.jpg": "b42eb7bf58ddfc53b76c4ac9369bb80a",
"assets/images/fotos/4-.jpg": "f38d4d0e1a4a04030437681a8f58d989",
"assets/images/fotos/40--min.jpg": "d379d81d32e11b5bfcfeef3511e5e83a",
"assets/images/fotos/40-.jpg": "7dcc68832d8ec743b5ee605a3439f216",
"assets/images/fotos/41--min.jpg": "fd6c9f37aba444d116eb0753cfa923db",
"assets/images/fotos/41-.jpg": "8002b96d93dea0caee90d547a8378ad9",
"assets/images/fotos/42--min.jpg": "5a63f249c881254c853efe8194b38193",
"assets/images/fotos/42-.jpg": "77b4c48d6e25516e8eac9919b8908499",
"assets/images/fotos/43--min.jpg": "2cbce8d0c0630bcfe2696efb59e63fbf",
"assets/images/fotos/43-.jpg": "63928d10ee59c2e8e70e4b44cfc455cc",
"assets/images/fotos/44--min.jpg": "2f5a29cdbabbf343f3f0dcd2be2561f9",
"assets/images/fotos/44-.jpg": "a64b31c2b816b9ab57152be795f6f0d5",
"assets/images/fotos/45--min.jpg": "7401b91bad9f97694813119b13239b4b",
"assets/images/fotos/45-.jpg": "29bcd3d86a5c9fba9d168e75911f9bf9",
"assets/images/fotos/46--min.jpg": "d9817f7c7e91726deb206246313d90c3",
"assets/images/fotos/46-.jpg": "d271530a8d627252e8f7e83458f03a71",
"assets/images/fotos/47--min.jpg": "ee830871000669de18340a0373309d08",
"assets/images/fotos/47-.jpg": "e7b243696bd5b309c0c6072dc70a92ea",
"assets/images/fotos/48--min.jpg": "91076d5483d7bd529923cdc25b74c1a1",
"assets/images/fotos/48-.jpg": "f7b8b4fff25b9db84e902f01e99d6ccb",
"assets/images/fotos/49--min.jpg": "f950f32db19036063dfc15c8981bbfe6",
"assets/images/fotos/49-.jpg": "1b8644902997d6940fa02a7fe5b4a7d5",
"assets/images/fotos/5--min.jpg": "0ab83c9533fd46b322af8e304b902e1b",
"assets/images/fotos/5-.jpg": "5ad7339b57a9a06a69264d8fc784b4e3",
"assets/images/fotos/50--min.jpg": "cd610c726f5c3d8a2aba2c8d73ab797d",
"assets/images/fotos/50-.jpg": "dfb19be98d8089aa2952d6d69beaa8ab",
"assets/images/fotos/51--min.jpg": "d8ac764799bbc6ed8be5e8eae823e7fe",
"assets/images/fotos/51-.jpg": "6fe48f02f35b2e772a666ce52d88a33f",
"assets/images/fotos/52--min.jpg": "c27ca2ef1f835b6cda8d23dafaa8c304",
"assets/images/fotos/52-.jpg": "0b345ddcef6bdc9346fab9a627caa0e3",
"assets/images/fotos/6--min.jpg": "79bcfbe217d16307e44a3378f4f8ff10",
"assets/images/fotos/6-.jpg": "648ef173797d9ae0417c6bd08d297685",
"assets/images/fotos/7--min.jpg": "2c2d28e1d7c810fda78534c4e78d2578",
"assets/images/fotos/7-.jpg": "5c1bf7cf5bd7f09ede5447b18afd5082",
"assets/images/fotos/8--min.jpg": "aee45545b1cf5d25b46d3f6a9443a185",
"assets/images/fotos/8-.jpg": "70daf14797ea8b376d35caf25b81e315",
"assets/images/fotos/81--min.jpg": "b5a05f93e570a12d79205f8b77015333",
"assets/images/fotos/81-.jpg": "f92c5f4969c520fdf2222f9a3c9aec36",
"assets/images/fotos/9--min.jpg": "c16c5b6aafbd5aa24916376158d7ceac",
"assets/images/fotos/9-.jpg": "6d711542eb4f8847cb3fceab7a053301",
"assets/images/fotos.png": "d1d5a98cd9a68b0a2e7df07cc073c918",
"assets/images/imagebibliography.png": "dcc66dcfdbf423b66e0133b00711364b",
"assets/images/imagefotos.png": "47b9a27c236c30260a6104cd38931ff9",
"assets/images/imagemusic.png": "6b823b2a2ffad35353a9764e1620c100",
"assets/images/imagenvideo1_1.png": "d6087dbd3c4d928399ccf8d1f21bd043",
"assets/images/imagenvideo2_1.png": "cfdd82b2f34618c6f33612b1bdd089d2",
"assets/images/imagevideo.png": "1fb831de1a64c283cc2e380acfc07ddf",
"assets/images/loslevantinos.png": "bfd088e757c3501335381de631539249",
"assets/images/musica.jpg": "82c3a18c38285ed41a1b73a72c57f91b",
"assets/images/primera.jpg": "d47bb9b5ab1562bb4c477f0f405b7b8f",
"assets/images/videos/1-.mp4": "29073a45f5e4101e16479711523211ed",
"assets/images/videos/2-.mp4": "4075bf91879e5369882857c02143ee74",
"assets/images/videos.png": "90ee2e5beba7f2e0bcc71a871822872f",
"assets/NOTICES": "2d38a34e15d7ba48fdbe3aadb67f6923",
"assets/packages/cupertino_icons/assets/CupertinoIcons.ttf": "6d342eb68f170c97609e9da345464e5e",
"favicon.png": "3ac2918a748ddc6982be60fc0052ab70",
"icons/Icon-192.png": "ac9a721a12bbc803b44f645561ecb1e1",
"icons/Icon-512.png": "96e752610906ba2a93c65f8abe1645f1",
"index.html": "9b5d610c305d65929c85e8765d13686d",
"/": "9b5d610c305d65929c85e8765d13686d",
"main.dart.js": "328f8cc546a83b976164c3f63de8c64b",
"manifest.json": "c543d15495afebb64343a6f04242f509",
"version.json": "9a3408d22c0af4a117347015827e7a00"
};

// The application shell files that are downloaded before a service worker can
// start.
const CORE = [
  "/",
"main.dart.js",
"index.html",
"assets/NOTICES",
"assets/AssetManifest.json",
"assets/FontManifest.json"];
// During install, the TEMP cache is populated with the application shell files.
self.addEventListener("install", (event) => {
  self.skipWaiting();
  return event.waitUntil(
    caches.open(TEMP).then((cache) => {
      return cache.addAll(
        CORE.map((value) => new Request(value + '?revision=' + RESOURCES[value], {'cache': 'reload'})));
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
        // lazily populate the cache.
        return response || fetch(event.request).then((response) => {
          cache.put(event.request, response.clone());
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
