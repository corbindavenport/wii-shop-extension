// Fix page width when opened from extensions settings page or install popup
if (document.location.href.includes('resize=true')) {
    document.querySelector('body').style.width = 'auto';
    document.querySelector('html').style.width = 'auto';
}

// Save settings
document.querySelector('#music-picker').addEventListener('change', function () {
    chrome.storage.local.set({
        music: document.querySelector('#music-picker').value
    })
})

// Save volume
function updateVolume() {
    chrome.storage.local.set({
        volume: document.querySelector('#music-volume').value / 100
    })
}
document.querySelector('#music-volume').addEventListener('change', updateVolume)
document.querySelector('#music-volume').addEventListener('input', updateVolume)

// Get stored settings
chrome.storage.local.get({
    music: 'wii-shop-theme',
    musicEnabled: 'true',
    volume: 0.5,
}, function (data) {
    document.querySelector('#music-volume').value = (data.volume * 100)
    document.querySelector('#music-picker').value = data.music
    if (data.musicEnabled) {
        document.getElementById('music-toggle').innerText = 'Turn off background music'
    } else {
        document.getElementById('music-toggle').innerText = 'Turn on background music'
    }
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