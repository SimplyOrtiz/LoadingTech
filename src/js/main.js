var changeButton = document.getElementById("Change")
var ChangeImage = document.getElementById("ChangeImage")

if (localStorage.getItem("darkMode") === null) {
    localStorage.setItem('darkMode', true)
}

var darkMode = localStorage.getItem('darkMode')
var localdarkMode;


function clickHandler(){
    if (localdarkMode == true){
        document.body.classList.remove('dark-mode')
        document.body.classList.add('light-mode','transition')

        localdarkMode = false
        localStorage.setItem('darkMode', false)

        ChangeImage.src = "./src/res/images/Icons/Moon.svg"

        console.log(localdarkMode,"\n",darkMode);
    } else {
        document.body.classList.remove('light-mode')
        document.body.classList.add('dark-mode','transition')

        localdarkMode = true
        localStorage.setItem('darkMode', true)

        ChangeImage.src = "./src/res/images/Icons/sun.svg"

        console.log(localdarkMode,"\n",darkMode);
    }
}

changeButton.addEventListener('click', clickHandler);

window.onload = function(){
    document.getElementById("ChangeImage").src= "blaah";

    if (darkMode == true){
        document.body.classList.remove('dark-mode')
        document.body.classList.add('light-mode')
        ChangeImage.src = "./src/res/images/Icons/Moon.svg"
    } else {
        document.body.classList.remove('light-mode')
        document.body.classList.add('dark-mode')
        ChangeImage.src = "./src/res/images/Icons/sun.svg"
    }

    if (darkMode == true){
        localdarkMode = true
    } else {
        localdarkMode = false
    }
}
