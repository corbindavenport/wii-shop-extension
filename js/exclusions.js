chrome.storage.local.get({
    excludedSites: ''
}, function (data) {
    document.querySelector('#excluded-sites').value = data.excludedSites;
})

document.querySelector('#save-changes-button').addEventListener('click', function () {
    chrome.storage.local.set({
        excludedSites: document.querySelector('#excluded-sites').value
    })
})

document.querySelector('#go-back').addEventListener('click', function () {
    history.back()
})