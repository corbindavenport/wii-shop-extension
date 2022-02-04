// Save settings
document.querySelector('#music-picker').addEventListener('change', function () {
    chrome.storage.local.set({
        music: document.querySelector('#music-picker').value
    })
})

document.querySelector("#music-volume").addEventListener("mouseup", function () {
    chrome.storage.local.set({
        volume: document.querySelector("#music-volume").value
    })
})

// Get stored settings
chrome.storage.local.get([
    "music",
    "musicEnabled",
    "volume"
], function (data) {
    document.querySelector('#music-picker').value = data.music
    if (data.musicEnabled) {
        document.getElementById('music-toggle').innerText = 'Turn off background music'
    } else {
        document.getElementById('music-toggle').innerText = 'Turn on background music'
    }
    document.getElementById("music-volume").value = data.volume
})

// Music on/off button
document.getElementById('music-toggle').addEventListener('click', function() {
    chrome.storage.local.get({
        musicEnabled: true
    }, function (data) {
        console.log(data)
        if (data.musicEnabled) {
            // Turn off music
            document.getElementById('music-toggle').innerText = 'Turn on background music'
            chrome.storage.local.set({
                musicEnabled: false
            })
        } else {
            // Turn on music
            document.getElementById('music-toggle').innerText = 'Turn off background music'
            chrome.storage.local.set({
                musicEnabled: true
            })
        }
    })
})

// Button link functionality
document.querySelectorAll('button[data-link]').forEach(function (el) {
    el.addEventListener('click', function () {
        chrome.tabs.create({ url: el.getAttribute('data-link') })
    })
})

// Pause music when page closes
// This only works on the popup opened from the notification, not the browserAction button
window.addEventListener("beforeunload", function (e) {
    chrome.runtime.sendMessage('pause')
}, false)