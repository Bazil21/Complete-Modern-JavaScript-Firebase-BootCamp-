
//outer width and height
let oh = window.outerHeight;
let ow = window.outerWidth;
// console.log(oh, ow)

//inner width and height
let ih = window.innerHeight;
let iw = window.innerWidth;
// console.log(ih, iw)
//scroll points
let sy = window.scrollY;
let sx = window.scrollX;
// console.log(sx, sy)

//Location object
let val;
val = window.location;
val = window.location.hostname;
val = window.location.port;
val = window.location.href;
val = window.location.search;

//Redirect
// window.location.href = "http://www.google.com"
//Reload
// window.location.reload()

//History
// window.history.go(-2)
//Navigator object
val = window.navigator;
val = window.navigator.appName;
val = window.navigator.appVersion;
val = window.navigator.userAgent;
val = window.navigator.platform;
val = window.navigator.vendor;
val = window.navigator.language;
console.log(val)
