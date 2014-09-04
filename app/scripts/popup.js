'use strict';

console.log('\'Allo \'Allo! Popup');
chrome.runtime.onMessage.addListener(
  function(req, sender, sendResponse) {
  console.log("blah");
  if (req.text) {
    console.log(req.text);
  }
});