var changeButton = document.getElementById("Change")

if (localStorage.getItem("darkMode") === null) {
    localStorage.setItem('darkMode', true)
}

var darkMode = localStorage.getItem('darkMode')
var localdarkMode;


function clickHandler(){
    if (localdarkMode == true){
        document.body.classList.remove('dark-mode')
        document.body.classList.add('light-mode')

        localdarkMode = false
        localStorage.setItem('darkMode', false)
        console.log(localdarkMode,"\n",darkMode);
    } else {
        document.body.classList.remove('light-mode')
        document.body.classList.add('dark-mode')

        localdarkMode = true
        localStorage.setItem('darkMode', true)
        console.log(localdarkMode,"\n",darkMode);
    }
}

changeButton.addEventListener('click', clickHandler);

window.onload = function(){
    if (darkMode == true){
        document.body.classList.remove('dark-mode')
        document.body.classList.add('light-mode')
    } else {
        document.body.classList.remove('light-mode')
        document.body.classList.add('dark-mode')
    }

    if (darkMode == true){
        localdarkMode = true
    } else {
        localdarkMode = false
    }
}
