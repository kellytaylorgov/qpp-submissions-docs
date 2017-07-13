"use strict";function setOfCachedUrls(e){return e.keys().then(function(e){return e.map(function(e){return e.url})}).then(function(e){return new Set(e)})}var precacheConfig=[["index.html","b2cad71462dd01961f5aa151ac8c9a1b"],["static/css/main.818b88db.css","814e42f938de1f24a3825afe06c08189"],["static/js/main.ba17316a.js","5c83efe7ed6989ad1d7235e3b064d06a"],["static/media/Bitter-Bold.21c58d74.ttf","21c58d749d8fc57d9897bc9cccdc9b7f"],["static/media/Bitter-Bold.9efe74f3.eot","9efe74f309c7ba82a61ff03327f3bf21"],["static/media/Bitter-Bold.b786d169.woff","b786d169390a1d0acac51045cbf78c2f"],["static/media/Bitter-Bold.fc1844c7.woff2","fc1844c778ae7b225b282ecb5efa8ff3"],["static/media/Bitter-Italic.18853b8c.eot","18853b8c4438ca1b310e8877ce325133"],["static/media/Bitter-Italic.58093e86.ttf","58093e86d36ba0cbc6e47f76748e2070"],["static/media/Bitter-Italic.75fb25c1.woff2","75fb25c17e1848550052b1efb07107e1"],["static/media/Bitter-Italic.f09ccd61.woff","f09ccd6102ce34fc359dba6ed0e5501d"],["static/media/Bitter-Regular.0078d318.woff2","0078d31897ce38a60c0017770552fe91"],["static/media/Bitter-Regular.12b71a42.eot","12b71a42b9b263b8e859a226bf4df3fd"],["static/media/Bitter-Regular.22c8272f.woff","22c8272ff9c0af3f05b76c7cf93e116d"],["static/media/Bitter-Regular.c99f7ae5.ttf","c99f7ae5952f464b2119c58157abf51b"],["static/media/OpenSans-Bold-webfont.3c4dc405.woff2","3c4dc405a2fb4cfd4c8c04e9155a3db0"],["static/media/OpenSans-Bold-webfont.6a13b444.woff","6a13b444647bac755a03da311b0633e2"],["static/media/OpenSans-Bold-webfont.8bb31d27.eot","8bb31d277e63b3d03253dd5060c74e93"],["static/media/OpenSans-Bold-webfont.bf0b1c03.ttf","bf0b1c035c98563b62c8e427d1ec0926"],["static/media/OpenSans-Italic-webfont.318b4f41.woff2","318b4f4140a3518cb54b2d416c01a641"],["static/media/OpenSans-Italic-webfont.346b43cf.ttf","346b43cf85bdc059069d1a83d308a034"],["static/media/OpenSans-Italic-webfont.9487423d.eot","9487423dc35bf8a541354926e95e7598"],["static/media/OpenSans-Italic-webfont.c0de58fc.woff","c0de58fc662222308ea9a1e43031c415"],["static/media/OpenSans-Light-webfont.4c5dfccb.woff2","4c5dfccb894e03d27082695dfc8bba9e"],["static/media/OpenSans-Light-webfont.d5f64f53.ttf","d5f64f5341b899c7afc3db4a69ab3ad7"],["static/media/OpenSans-Light-webfont.d8c8f250.eot","d8c8f250a3f80e108527810bac6e90b9"],["static/media/OpenSans-Light-webfont.f0417068.woff","f041706894c4d5aef91828c00d7856d8"],["static/media/OpenSans-Regular-webfont.33ec9bca.eot","33ec9bca49d30244ff5e1bae261afd36"],["static/media/OpenSans-Regular-webfont.467063b1.woff","467063b18b4823e9fc4f645b6a0b19ee"],["static/media/OpenSans-Regular-webfont.cb95bc69.ttf","cb95bc691478b7f108a1127710c1aa4a"],["static/media/OpenSans-Regular-webfont.e3b01381.woff2","e3b013811489b74c41521d426a11992e"],["static/media/OpenSans-Semibold-webfont.80744a04.ttf","80744a049a00b14a200ab18d3ca0c8d6"],["static/media/OpenSans-Semibold-webfont.8e80acc0.woff","8e80acc061be9580f1c03bed43855e27"],["static/media/OpenSans-Semibold-webfont.aebd17d5.woff2","aebd17d58f1ccdebd1b806290b6a864d"],["static/media/OpenSans-Semibold-webfont.d543421f.eot","d543421f6d099c83a80f2920c6718645"]],cacheName="sw-precache-v3-sw-precache-webpack-plugin-"+(self.registration?self.registration.scope:""),ignoreUrlParametersMatching=[/^utm_/],addDirectoryIndex=function(e,t){var a=new URL(e);return"/"===a.pathname.slice(-1)&&(a.pathname+=t),a.toString()},cleanResponse=function(e){return e.redirected?("body"in e?Promise.resolve(e.body):e.blob()).then(function(t){return new Response(t,{headers:e.headers,status:e.status,statusText:e.statusText})}):Promise.resolve(e)},createCacheKey=function(e,t,a,c){var n=new URL(e);return c&&n.pathname.match(c)||(n.search+=(n.search?"&":"")+encodeURIComponent(t)+"="+encodeURIComponent(a)),n.toString()},isPathWhitelisted=function(e,t){if(0===e.length)return!0;var a=new URL(t).pathname;return e.some(function(e){return a.match(e)})},stripIgnoredUrlParameters=function(e,t){var a=new URL(e);return a.hash="",a.search=a.search.slice(1).split("&").map(function(e){return e.split("=")}).filter(function(e){return t.every(function(t){return!t.test(e[0])})}).map(function(e){return e.join("=")}).join("&"),a.toString()},hashParamName="_sw-precache",urlsToCacheKeys=new Map(precacheConfig.map(function(e){var t=e[0],a=e[1],c=new URL(t,self.location),n=createCacheKey(c,hashParamName,a,/\.\w{8}\./);return[c.toString(),n]}));self.addEventListener("install",function(e){e.waitUntil(caches.open(cacheName).then(function(e){return setOfCachedUrls(e).then(function(t){return Promise.all(Array.from(urlsToCacheKeys.values()).map(function(a){if(!t.has(a)){var c=new Request(a,{credentials:"same-origin"});return fetch(c).then(function(t){if(!t.ok)throw new Error("Request for "+a+" returned a response with status "+t.status);return cleanResponse(t).then(function(t){return e.put(a,t)})})}}))})}).then(function(){return self.skipWaiting()}))}),self.addEventListener("activate",function(e){var t=new Set(urlsToCacheKeys.values());e.waitUntil(caches.open(cacheName).then(function(e){return e.keys().then(function(a){return Promise.all(a.map(function(a){if(!t.has(a.url))return e.delete(a)}))})}).then(function(){return self.clients.claim()}))}),self.addEventListener("fetch",function(e){if("GET"===e.request.method){var t,a=stripIgnoredUrlParameters(e.request.url,ignoreUrlParametersMatching);t=urlsToCacheKeys.has(a);t||(a=addDirectoryIndex(a,"index.html"),t=urlsToCacheKeys.has(a));!t&&"navigate"===e.request.mode&&isPathWhitelisted(["^(?!\\/__).*"],e.request.url)&&(a=new URL("/qpp-submissions-docs/index.html",self.location).toString(),t=urlsToCacheKeys.has(a)),t&&e.respondWith(caches.open(cacheName).then(function(e){return e.match(urlsToCacheKeys.get(a)).then(function(e){if(e)return e;throw Error("The cached response that was expected is missing.")})}).catch(function(t){return console.warn('Couldn\'t serve response for "%s" from cache: %O',e.request.url,t),fetch(e.request)}))}});