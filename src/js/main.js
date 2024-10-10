var changeButton = document.getElementById("Change")
var ChangeImage = document.getElementById("ChangeImage")

var ColorMode = ["./src/res/images/Icons/Moon.svg", "./src/res/images/Icons/sun.svg"]

if (localStorage.getItem("darkMode") === null) {
    localStorage.setItem('darkMode', true)
}

var darkMode = localStorage.getItem('darkMode')
var localdarkMode;


function SiteModeHandler(){
    if (localdarkMode == true){
        document.body.classList.remove('dark-mode')
        document.body.classList.add('light-mode','transition')

        localdarkMode = false
        localStorage.setItem('darkMode', false)

        ChangeImage.src = ColorMode[0]

        console.log(localdarkMode," ",darkMode);
    } else {
        document.body.classList.remove('light-mode')
        document.body.classList.add('dark-mode','transition')

        localdarkMode = true
        localStorage.setItem('darkMode', true)

        ChangeImage.src = ColorMode[1]

        console.log(localdarkMode," ",darkMode);
    }
}

changeButton.addEventListener('click', SiteModeHandler);

/* Testing Code
function OnProfileClicked(){
    var userOptions = document.getElementById("user-options");

    if(userOptions.getAttribute("style").indexOf("display:") != -1){
        userOptions.style.display = "none"
    } else {
        userOptions.style.display = "block"
    }
}
*/

window.onload = function(){
    //document.getElementById("ChangeImage").src= "blaah";

    if (darkMode == true){
        document.body.classList.remove('dark-mode')
        document.body.classList.add('light-mode')
        ChangeImage.src = ColorMode[1]
    } else {
        document.body.classList.remove('light-mode')
        document.body.classList.add('dark-mode')
        ChangeImage.src = ColorMode[0]
    }

    if (darkMode == true){
        localdarkMode = true
    } else {
        localdarkMode = false
    }
}