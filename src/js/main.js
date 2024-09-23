var changeButton = document.getElementById("Change")

var darkMode; 

function clickHandler(){ // declare a function that updates the state
    if (darkMode == true){
        darkMode = false
    } else {
        darkMode == true
    }
}

changeButton.addEventListener('click', clickHandler);

/*
window.onload = function(){
    if(localStorage.getItem('used') == "true"){
        return document.getElementById("cookiefake").remove()
    } else {
        localStorage.setItem('used', 'false')
    }
}

function cookieDelete(){
    document.getElementById("cookiefake").classList.add("cookiebye")
    setTimeout(function() {
        document.getElementById("cookiefake").remove()
    }, 450)
    localStorage.setItem('used', 'true')
}
*/