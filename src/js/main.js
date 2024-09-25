var changeButton = document.getElementById("Change")

if (localStorage.getItem("darkMode") === null) {
    localStorage.setItem('darkMode', 'true')
}

var darkMode = localStorage.getItem('darkMode')


function clickHandler(){
    if (darkMode == true){
        document.body.classList.remove('dark-mode')
        document.body.classList.add('light-mode')

        localStorage.setItem('darkMode', 'false')
    } else {
        document.body.classList.remove('light-mode')
        document.body.classList.add('dark-mode')

        localStorage.setItem('darkMode', 'true')
    }
}

localStorage.setItem('used', 'true')

changeButton.addEventListener('click', clickHandler);


window.onload = function(){
    clickHandler()
}
