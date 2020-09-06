var songsDropdown = document.getElementById("songs")
var backgroundScript = null

// Get background script
var script = browser.runtime.getBackgroundPage();
script.then(onGot, onError);

function onGot(page) {
    backgroundScript = page

    // Set selected option based on currently selected song
    var usedOption = document.getElementById(backgroundScript.getCurrentSong())
    if (usedOption !== null) {
        usedOption.setAttribute("selected", "")
    }
}

function onError(error) {
    console.log(`Error finding background script: ${error}`);
}

// Watch for song selection changes
songsDropdown.onchange = function() {
    var selectedSong = songsDropdown.options[songsDropdown.selectedIndex].value
    switch (selectedSong) {
        case "wii-shop-theme":
            backgroundScript.replaceAudio('wii-shop-theme')
            break
        case "coconut-mall":
            backgroundScript.replaceAudio('coconut-mall')
            break
    }
};