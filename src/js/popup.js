// Save settings
document.getElementById('music-picker').addEventListener('change', function () {
    chrome.storage.sync.set({
        music: document.getElementById('music-picker').value
    })
})

document.getElementById('reset-music').addEventListener('click', function () {
    chrome.storage.sync.set({
      resetMusic: document.getElementById('reset-music').checked
    })
})

// Get stored settings
chrome.storage.sync.get(function (data) {
    document.getElementById('music-picker').value = data.music
})

chrome.storage.sync.get(function(data) {
  document.getElementById('reset-music').checked = data.resetMusic
})

// Button link functionality
document.querySelectorAll('button[data-link]').forEach(function (el) {
    el.addEventListener('click', function () {
      chrome.tabs.create({ url: el.getAttribute('data-link') })
    })
  })
