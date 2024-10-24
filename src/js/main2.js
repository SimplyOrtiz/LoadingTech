var changeButton = document.getElementById("Change");
var ChangeImage = document.getElementById("ChangeImage");
var changeIcon = document.getElementById("SiteLogo")

var ColorMode = ["../src/res/images/Icons/Moon.svg", "../src/res/images/Icons/sun.svg"];
var LogoColorMode = ['../res/images/Loading\ Tech.svg', '../res/images/Loading\ Tech\ \(1\).svg'];

// Initialize darkMode in localStorage if it doesn't exist
if (localStorage.getItem("darkMode") === null) {
    localStorage.setItem('darkMode', 'false'); // Store as string
}

// Retrieve darkMode from localStorage and convert to boolean
var darkMode = localStorage.getItem('darkMode') === 'true';
var localdarkMode = darkMode; // Initialize localdarkMode based on darkMode

function SiteModeHandler() {
    if (localdarkMode) {
        document.body.classList.remove('dark-mode');
        document.body.classList.add('light-mode', 'transition');

        localdarkMode = false;
        localStorage.setItem('darkMode', 'false'); // Store as string

        ChangeImage.src = ColorMode[0];
    } else {
        document.body.classList.remove('light-mode');
        document.body.classList.add('dark-mode', 'transition');

        localdarkMode = true;
        localStorage.setItem('darkMode', 'true'); // Store as string

        ChangeImage.src = ColorMode[1];
    }
}

changeButton.addEventListener('click', SiteModeHandler);

window.onload = function() {
    // Set initial state based on darkMode
    if (darkMode) {
        document.body.classList.remove('light-mode');
        document.body.classList.add('dark-mode');
        ChangeImage.src = ColorMode[1];
    } else {
        document.body.classList.remove('dark-mode');
        document.body.classList.add('light-mode');
        ChangeImage.src = ColorMode[0];
    }
    
    // Set localdarkMode based on darkMode
    localdarkMode = darkMode;
}