'use strict';

chrome.runtime.onInstalled.addListener(function (details) {
    console.log('previousVersion', details.previousVersion);
});

chrome.browserAction.setBadgeText({text: '\'Allo'});

console.log('\'Allo \'Allo! Event Page for Browser Action');
function resetDefaultSuggestion() {
  chrome.omnibox.setDefaultSuggestion({
  description: 'Overflaow'
  });
}
resetDefaultSuggestion();
function navigate(url) {
  chrome.tabs.query({active: true, currentWindow: true}, function(tabs) {
  chrome.tabs.update(tabs[0].id, {url: url});
  });
}
chrome.omnibox.onInputEntered.addListener(function(text) {
  // navigate("popup.html")
  // chrome.runtime.sendMessage({ text: text }, function(response) {});
  navigate("https://www.stackoverflow.com/search?q=" + text);
});