import {
    siteList
} from "/src/js/site-list.js"

// parse suffix list rules to look up hostnames without subdomains properly
parseSuffixList()

// The active background music track is stored here instead of themeAudio.src
let currentMusic = ''
let resetMusic = false

// Set MediaSession API info for Chrome media player popup
if ('mediaSession' in navigator) {
    navigator.mediaSession.metadata = new MediaMetadata({
        title: 'Wii Shop Channel Music Extension'
    })
}

// Create audio object
const themeAudio = new Audio()
themeAudio.volume = 0.5
themeAudio.loop = true

// Get stored settings, load the track
chrome.storage.sync.get({
    music: 'wii-shop-theme'
}, function(data) {
    currentMusic = chrome.extension.getURL('/music/' + data.music + '.ogg')
    themeAudio.setAttribute('src', currentMusic)
    themeAudio.load()
})

chrome.storage.sync.get({
    resetMusic: false
}, function(data) {
    resetMusic = data.resetMusic
})

// Change music after settings change
chrome.storage.onChanged.addListener(function(changes, area) {
    if (changes.music) {
        currentMusic = chrome.extension.getURL('/music/' + changes.music.newValue + '.ogg')
        // if the extension was previously playing music on track change,
        // then pause playback, load the new track, begin playing again
        // otherwise, wait for the right cue

        let playing = !themeAudio.paused;
        if (playing) {
            themeAudio.pause()
        }

        themeAudio.setAttribute('src', currentMusic)
        themeAudio.load()

        if (playing) {
            themeAudio.play()
        }
    }

    if (changes.resetMusic) {
        resetMusic = changes.resetMusic.newValue
    }
})

// Function for checking if music should be playing in current tab
// if `resetMusic` is set to true, music will restart upon re-entering the tab
function checkMusic(tabs, resetMusic) {
    let domain = getDomain(tabs)
    if (domain !== '') {
        if (siteList.includes(domain)) {
            if (resetMusic) {
                themeAudio.setAttribute('src', currentMusic)
                themeAudio.load()
            }
            themeAudio.play()
        } else if (!themeAudio.paused) {
            themeAudio.pause()
        }
    }
}

function getDomain(tabs) {
    if (tabs && tabs.length > 0) {
        if (tabs[0].url != '') {
            let url = new URL(tabs[0].url)
            return publicSuffixList.getDomain(url.hostname)
        }
    }
    return ''
}

function parseSuffixList() {
    // get local copy of public suffix list file
    let pslUrl = chrome.runtime.getURL('/data/public_suffix_list.dat')
    fetch(pslUrl)
        .then(response => response.body)
        .then(rb => {
            const reader = rb.getReader()
            return new ReadableStream({
                start(controller) {
                    // The following function handles each data chunk
                    function push() {
                        // "done" is a Boolean and value a "Uint8Array"
                        reader.read().then(({
                            done,
                            value
                        }) => {
                            // If there is no more data to read
                            if (done) {
                                controller.close()
                                return
                            }
                            // Get the data and send it to the browser via the controller
                            controller.enqueue(value)
                            // Check chunks by logging to the console
                            push()
                        })
                    }
                    push()
                }
            })
        })
        .then(stream => {
            // Respond with our stream
            return new Response(stream, {
                headers: {
                    "Content-Type": "text/plain"
                }
            }).text()
        })
        .then(result => {
            // Do things with result
            publicSuffixList.parse(result, punycode.toASCII)
        })
}

// Detect new page loads in active tab, if the domain matches a shopping site, play music
chrome.tabs.onUpdated.addListener(function(tabId, changeInfo) {
    chrome.tabs.query({
        active: true,
        lastFocusedWindow: true
    }, function(tabs) {
        checkMusic(tabs, resetMusic)
    })
})

// Detect shopping tab becoming inactive/closed, if the domain matches a shopping site, play music
chrome.tabs.onActivated.addListener(function(activeInfo) {
    chrome.tabs.query({
        active: true,
        lastFocusedWindow: true
    }, function(tabs) {
        checkMusic(tabs, resetMusic)
    })
})

// Show notification on extension install
chrome.runtime.onInstalled.addListener(function() {
    // Firefox doesn't support buttons in notifications
    if (navigator.userAgent.includes("Firefox")) {
        chrome.notifications.create({
            'type': 'basic',
            'iconUrl': chrome.extension.getURL('/src/img/icon128.png'),
            'title': 'Wii Shop Music extension installed!',
            'message': 'The Wii Shop theme will now play when you visit shopping websites, and you can use the toolbar button to change settings. Click here to join the Discord server.'
        }, function(id) {
            browser.notifications.onClicked.addListener(function(id) {
                chrome.tabs.create({
                    url: 'https://discord.com/invite/59wfy5cNHw'
                })
            })
        })
    } else {
        // Chromium browsers support buttons in notifications
        chrome.notifications.create({
            'type': 'basic',
            'iconUrl': chrome.extension.getURL('/src/img/icon128.png'),
            'title': 'Wii Shop Music extension installed!',
            'message': 'The Wii Shop theme will now play when you visit shopping websites, and you can use the toolbar button to change settings.',
            buttons: [{
                title: 'Join Discord server'
            }]
        }, function(id) {
            chrome.notifications.onButtonClicked.addListener(function(id, btnIdx) {
                if (btnIdx === 0) {
                    chrome.tabs.create({
                        url: 'https://discord.com/invite/59wfy5cNHw'
                    })
                }
            })
        })
    }
})
