/* this.js */


document.addEventListener("DOMContentLoaded", ()=>{
    
    _html = document.querySelector("html")
    _body = document.querySelector("body")
    _blankslate = document.querySelector("div#blslatetransition")

    if(localStorage.getItem("mode") == "light"){
        _body.classList.add("light")
        _body.classList.remove("preventshock")
        _html.classList.add("light")
        _html.classList.remove("preventshock")
        document.querySelector("button.btn.togglemodebutton").addEventListener("click", updateToDarkmode)
    }else if(localStorage.getItem("mode") == "dark"){
        document.querySelector("button.btn.togglemodebutton").addEventListener("click", updateToLightmode)
        _body.classList.add("dark")
        _body.classList.remove("preventshock")
        _html.classList.add("dark")
        _html.classList.remove("preventshock")
    }else{
        document.querySelector("button.btn.togglemodebutton").addEventListener("click", updateToDarkmode)
        _body.classList.add("light")
        _body.classList.remove("preventshock")
        _html.classList.add("light")
        _html.classList.remove("preventshock")
    }
    setTimeout(()=>{
        _blankslate.style.opacity = "0";
        _blankslate.style.pointerEvents = "none";  _blankslate.style.transition = "0.5s";}, 1000)
});







function updateToDarkmode(){
    localStorage.setItem("mode", "dark")
    //document.querySelector("style#accessiblestylesheet").innerText = "* {transition: 0.5s;}"
    _blankslate.style.opacity = "1";
    _blankslate.style.pointerEvents = "all";
    setTimeout(()=>{_blankslate.style.transition = "2s";}, 500)
    setTimeout(()=>{
    _body.classList.add("dark")
    _body.classList.remove("light")
    _html.classList.add("dark")
    _html.classList.remove("light")
    //setTimeout(()=>{document.querySelector("style#accessiblestylesheet").innerText = ""}, 560)
    document.querySelector("button.btn.togglemodebutton").removeEventListener("click", updateToDarkmode)
    document.querySelector("button.btn.togglemodebutton").addEventListener("click", updateToLightmode)}, 500)
    setTimeout(()=>{
    _blankslate.style.opacity = "0";
    _blankslate.style.pointerEvents = "none"; _blankslate.style.transition = "0.5s";}, 2500)
}

function updateToLightmode(){
    localStorage.setItem("mode", "light")
    //document.querySelector("style#accessiblestylesheet").innerText = "* {transition: 0.5s;}"
    _blankslate.style.opacity = "1";
    _blankslate.style.pointerEvents = "all";
    setTimeout(()=>{_blankslate.style.transition = "3s";}, 500)
    setTimeout(()=>{
    _body.classList.add("light")
    _body.classList.remove("dark")
    _html.classList.add("light")
    _html.classList.remove("dark")
    //setTimeout(()=>{document.querySelector("style#accessiblestylesheet").innerText = ""}, 560)
    document.querySelector("button.btn.togglemodebutton").removeEventListener("click", updateToLightmode)
    document.querySelector("button.btn.togglemodebutton").addEventListener("click", updateToDarkmode)}, 500)
    setTimeout(()=>{
        _blankslate.style.opacity = "0";
        _blankslate.style.pointerEvents = "none";  _blankslate.style.transition = "0.5s";}, 2500)
}
