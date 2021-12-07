// The active background music track is stored here instead of themeAudio.src
var currentMusic = ''

// Used to check if music is already playing or not. This prevents the extention from
// starting the music over every time you navigate around the shopping site
var playing = 0

// Set MediaSession API info for Chrome media player popup
if ('mediaSession' in navigator) {
    navigator.mediaSession.metadata = new MediaMetadata({
        title: 'Wii Shop Channel Music Extension'
    })
}

// Creat audio object
var themeAudio = new Audio()
themeAudio.volume = 0.5
themeAudio.loop = true

// Get stored settings
chrome.storage.local.get({
    music: 'wii-shop-theme'
  }, function (data) {
      currentMusic = chrome.extension.getURL('music/' + data.music + '.ogg')
})

// Change music after settings change
chrome.storage.onChanged.addListener(function(changes, area) {
    if (changes.music) {
        currentMusic = chrome.extension.getURL('music/' + changes.music.newValue + '.ogg')
        themeAudio.src = chrome.extension.getURL('music/' + changes.music.newValue + '.ogg')
        themeAudio.play()
    }
})

// Function for checking if music should be playing in current tab
function checkMusic(tabs) {
    var url = new URL(tabs[0].url)
    var domain = url.hostname.toString().replace('www.', '')
    console.log(domain)

    //On shopping site, plays music
    if (siteList.includes(domain) && playing == 0) {
      themeAudio.src = currentMusic
      themeAudio.play()
      playing++
    }

    //While navigating shopping sites, and music is already playing
    //Do nothing
    else if (siteList.includes(domain) && playing > 0) {
    }

    //No longer on shopping site, stops music
    else {
      themeAudio.pause()
      themeAudio.scr = ''
      playing = 0
    }
}

// Detect new page loads in active tab, if the domain matches a shopping site, play music
chrome.tabs.onUpdated.addListener(function (tabId, changeInfo) {
    chrome.tabs.query({ active: true, lastFocusedWindow: true }, function (tabs) {
        checkMusic(tabs)
    })
})

// Detect shopping tab becoming inactive/closed, if the domain matches a shopping site, play music
chrome.tabs.onActivated.addListener(function (activeInfo) {
    chrome.tabs.query({ active: true, lastFocusedWindow: true }, function (tabs) {
        checkMusic(tabs)
    })
})

// Show notification on extension install
chrome.runtime.onInstalled.addListener(function () {
    // Firefox doesn't support buttons in notifications
    if (navigator.userAgent.includes("Firefox")) {
        chrome.notifications.create({
            'type': 'basic',
            'iconUrl': chrome.extension.getURL('img/icon128.png'),
            'title': 'Wii Shop Music extension installed!',
            'message': 'The Wii Shop theme will now play when you visit shopping websites, and you can use the toolbar button to change settings. Click here to join the Discord server.'
        }, function (id) {
            browser.notifications.onClicked.addListener(function(id) {
                chrome.tabs.create({ url: 'https://discord.com/invite/59wfy5cNHw' })
            })
        })
    } else {
        // Chromium browsers support buttons in notifications
        chrome.notifications.create({
            'type': 'basic',
            'iconUrl': chrome.extension.getURL('img/icon128.png'),
            'title': 'Wii Shop Music extension installed!',
            'message': 'The Wii Shop theme will now play when you visit shopping websites, and you can use the toolbar button to change settings.',
            buttons: [{
                title: 'Join Discord server'
            }]
        }, function (id) {
            chrome.notifications.onButtonClicked.addListener(function (id, btnIdx) {
                if (btnIdx === 0) {
                    chrome.tabs.create({ url: 'https://discord.com/invite/59wfy5cNHw' })
                }
            })
        })
    }
})
