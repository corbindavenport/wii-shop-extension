// TODO: Move settings back to chrome.storage.sync and keep cache list in chrome.storage.local

// Global variables
var globalSiteList = []
var currentMusic = '' // The active background music track is stored here instead of themeAudio.src
var musicEnabled = true
var includedSites = '';
var excludedSites = '';

// Function for updating list of shopping sites
async function getShopList() {
    console.log('Updating site list...')
    var dataList = []
    var req = await fetch('https://cdn.jsdelivr.net/gh/corbindavenport/shop-list/list.txt').catch(cacheError)
    // Parse data
    var text = await req.text()
    try {
        dataList = text.split('\n')
    } catch(e) {
        console.error('Error parsing shop list:', e)
        return false
    }
    console.log('Loaded site list:', dataList)
    // Save data to storage
    globalSiteList = dataList
    chrome.storage.local.set({
        siteList: dataList
    })
}

// Function for catching errors on list update
function cacheError(e) {
    console.error('Error updating shop list:', e)
}

async function createMediaSession() {
    navigator.mediaSession.metadata = new MediaMetadata({
        title: 'Wii Shop Channel Music Extension',
        artist: '(Click ⏩ to open settings)'
    })
    navigator.mediaSession.setActionHandler('seekforward', function () {
        chrome.runtime.openOptionsPage();
    })
}

// Set MediaSession API info for Chrome media player popup
if ('mediaSession' in navigator) {
    createMediaSession()
}

// Create audio object
var themeAudio = new Audio()
// set initially to silent, to not blast someone out of existance before we load the settings
themeAudio.volume = 0
themeAudio.loop = true

// Get stored settings
chrome.storage.local.get({
    music: 'wii-shop-theme',
    musicEnabled: true,
    volume: 0.5,
    excludedSites: '',
    includedSites: '',
    siteList: []
}, function (data) {
    currentMusic = chrome.extension.getURL('music/' + data.music + '.ogg')
    console.log('Music enabled:', data.musicEnabled)
    musicEnabled = data.musicEnabled
    themeAudio.volume = data.volume
    includedSites = data.includedSites;
    excludedSites = data.excludedSites
    if (data.siteList.length === 0) {
        getShopList()
    } else {
        globalSiteList = data.siteList
    }
})

// Update settings after storage change
chrome.storage.onChanged.addListener(function (changes, area) {
    if (changes.volume) {
        themeAudio.volume = changes.volume.newValue
    }
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
    if (changes.includedSites) {
        includedSites = changes.includedSites.newValue;
    }
    if (changes.excludedSites) {
        excludedSites = changes.excludedSites.newValue;
    }
})

// Function for checking if music should be playing in current tab
function checkMusic(tabs) {
    var url = tabs[0].url;
    // Don't play on browser/internal pages
    if (!url.startsWith('http')) {
        themeAudio.src = ''
        return;
    }
    // Don't play on Amazon Prime Video
    if (url.includes('amazon') && url.includes('gp/video')) {
        themeAudio.src = ''
        return;
    }
    // Continue with playback
    var url = new URL(url)
    var domain = url.hostname.toString().replace('www.', '')
    var sitesToAdd = includedSites.split('\n').map(s => s.toLowerCase().replace('www.', ''))
    var sitesToIgnore = excludedSites.split('\n').map(s => s.toLowerCase().replace('www.', ''))
    if ((globalSiteList.includes(domain) || sitesToAdd.includes(domain))
        && !sitesToIgnore.includes(domain)
        && musicEnabled
    ) {
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

// Update list of sites when the browser is restarted
chrome.runtime.onStartup.addListener(function () {
    getShopList()
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
                browser.runtime.openOptionsPage();
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
                    chrome.runtime.openOptionsPage();
                } else if (i === 1) {
                    chrome.tabs.create({ url: 'https://discord.com/invite/59wfy5cNHw' })
                }
            })
        }
    }
    // Display the notification
    chrome.notifications.create(data, handleNotif)
})
