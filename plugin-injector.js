var script = document.createElement("SCRIPT");
script.src = chrome.extension.getURL("date-picker-plugin.js");
document.documentElement.appendChild(script);
console.log("Plugin - Injected.");