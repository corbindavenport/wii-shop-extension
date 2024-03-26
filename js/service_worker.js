// Service worker that acts as main background code in Chromium extensions

const isFirefox = chrome.runtime.getURL('').startsWith('moz-extension://')

// Handle offscreen document for clipboard operations
let creating; // A global promise to avoid concurrency issues
async function setupOffscreenDocument(path) {
  // Check all windows controlled by the service worker to see if one
  // of them is the offscreen document with the given path
  const offscreenUrl = chrome.runtime.getURL(path);
  const existingContexts = await chrome.runtime.getContexts({
    contextTypes: ['OFFSCREEN_DOCUMENT'],
    documentUrls: [offscreenUrl]
  });
  if (existingContexts.length > 0) {
    return;
  }
  // create offscreen document
  if (creating) {
    await creating;
  } else {
    creating = chrome.offscreen.createDocument({
      url: path,
      reasons: ['AUDIO_PLAYBACK'],
      justification: 'Play audio in background',
    });
    await creating;
    creating = null;
  }
}

// Show notification on extension install
chrome.runtime.onInstalled.addListener(function () {
    // Set most options
    var data = {
        'type': 'basic',
        'message': 'The Wii Shop theme will now play when you visit shopping websites. Click the toolbar button to change settings, or click this notification.',
        'iconUrl': chrome.extension.getURL('img/icon128.png'),
        'title': 'Wii Shop Music extension installed!',
    }
    // Set message and handlers for notification
    data.message = 'The Wii Shop theme will now play when you visit shopping websites. Click the toolbar button to change settings, or click this notification.'
    handleNotif = function (id) {
        chrome.notifications.onClicked.addListener(function (id) {
            chrome.runtime.openOptionsPage();
        })
    }
    // Display the notification
    chrome.notifications.create(data, handleNotif)
})