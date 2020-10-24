"use strict";
exports.__esModule = true;
var preact_1 = require("preact");
var app_1 = require("./component/app");
preact_1.render(<app_1["default"] />, document.getElementById("root"));
// if (process.env.NODE_ENV === "production") {
//   // Update on upgrade
//   const runtime = require("offline-plugin/runtime");
//   runtime.install({
//     onUpdateReady: () => {
//       runtime.applyUpdate();
//     },
//     onUpdated: () => {
//       window.location.reload();
//     },
//   });
//   // Redirect traffic to https
//   if (location.protocol === "http:" && localStorage.tried_ssl !== "true") {
//     localStorage.tried_ssl = "true";
//     location.href = "https" + location.href.substring(4);
//   }
// }
