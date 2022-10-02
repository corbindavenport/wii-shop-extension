chrome.storage.local.get({
    includedSites: '',
    excludedSites: ''
}, function (data) {
    document.querySelector('#included-sites').value = data.includedSites;
    document.querySelector('#excluded-sites').value = data.excludedSites;
})

document.querySelector('#save-changes-button').addEventListener('click', function () {
    chrome.storage.local.set({
        includedSites: document.querySelector('#included-sites').value,
        excludedSites: document.querySelector('#excluded-sites').value
    })
})

document.querySelector('#go-back').addEventListener('click', function () {
    history.back()
})
