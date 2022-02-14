// The active background music track is stored here instead of themeAudio.src
var currentMusic = ''
var musicEnabled = true

// Set MediaSession API info for Chrome media player popup
if ('mediaSession' in navigator) {
    navigator.mediaSession.metadata = new MediaMetadata({
        title: 'Wii Shop Channel Music Extension'
    })
}

// Create audio object
var themeAudio = new Audio()
themeAudio.volume = 0.5
themeAudio.loop = true

// Get stored settings
chrome.storage.local.get({
    music: 'wii-shop-theme',
    musicEnabled: true
}, function (data) {
    currentMusic = chrome.extension.getURL('music/' + data.music + '.ogg')
    console.log('Music enabled:', data.musicEnabled)
    musicEnabled = data.musicEnabled
})

// Update settings after storage change
chrome.storage.onChanged.addListener(function (changes, area) {
    if (changes.musicEnabled) {
        musicEnabled = changes.musicEnabled.newValue
        if (!changes.musicEnabled) {
            themeAudio.src = ''
        }
    }
    if (changes.music) {
        currentMusic = chrome.extension.getURL('music/' + changes.music.newValue + '.ogg')
        if (musicEnabled) {
            themeAudio.src = chrome.extension.getURL('music/' + changes.music.newValue + '.ogg')
            themeAudio.play()
        }
    }
})

// Function for checking if music should be playing in current tab
function checkMusic(tabs) {
    var url = new URL(tabs[0].url)
    var domain = url.hostname.toString().replace('www.', '')
    if (siteList.includes(domain) && musicEnabled) {
        if (themeAudio.src != currentMusic) {
            themeAudio.src = currentMusic
        }
        themeAudio.play()
    } else {
        // The source value is deleted so Chromium browsers won't show a playback notification anymore
        themeAudio.src = ''
    }
}

// Detect new page loads in active tab, if the domain matches a shopping site, play music
chrome.tabs.onUpdated.addListener(function (tabId, changeInfo) {
    if (changeInfo.status === 'complete') {
        chrome.tabs.query({ active: true, lastFocusedWindow: true }, function (tabs) {
            checkMusic(tabs)
        })
    }
})

// Detect shopping tab becoming inactive/closed, if the domain matches a shopping site, play music
chrome.tabs.onActivated.addListener(function (activeInfo) {
    chrome.tabs.query({ active: true, lastFocusedWindow: true }, function (tabs) {
        checkMusic(tabs)
    })
})

// Listen for pause/play commands from popup
chrome.runtime.onMessage.addListener(function (request) {
    if (request === 'pause') {
        themeAudio.src = ''
    } else if (request === 'play') {
        themeAudio.src = currentMusic
        themeAudio.play()
    }
})

// Show notification on extension install
chrome.runtime.onInstalled.addListener(function () {
    // Set most options
    var data = {
        'type': 'basic',
        'iconUrl': chrome.extension.getURL('img/icon128.png'),
        'title': 'Wii Shop Music extension installed!',
    }
    // Set message and handlers for notification
    if (navigator.userAgent.includes("Firefox")) {
        // Firefox supports does not support buttons in notifications
        data.message = 'The Wii Shop theme will now play when you visit shopping websites. Click the toolbar button to change settings, or click this notification.'
        handleNotif = function (id) {
            chrome.notifications.onClicked.addListener(function (id) {
                chrome.windows.create({
                    'url': chrome.extension.getURL('popup.html'),
                    'width': 300,
                    'height': 500,
                    'type': 'popup'
                })
            })
        }
    } else {
        // Chromium browsers don't support openPopup(), but do support a button
        data.message = 'The Wii Shop theme will now play when you visit shopping websites. Click the toolbar button to change settings at any time.'
        data.buttons = [{
            title: 'Open settings'
        },
        {
            title: 'Join Discord'
        }
        ]
        handleNotif = function (id) {
            chrome.notifications.onButtonClicked.addListener(function (id, i) {
                if (i === 0) {
                    chrome.windows.create({
                        'url': chrome.extension.getURL('popup.html'),
                        'width': 300,
                        'height': 500,
                        'type': 'popup'
                    })
                } else if (i === 1) {
                    chrome.tabs.create({ url: 'https://discord.com/invite/59wfy5cNHw' })
                }
            })
        }
    }
    // Display the notification
    chrome.notifications.create(data, handleNotif)
})
