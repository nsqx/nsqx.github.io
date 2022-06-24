document.addEventListener("DOMContentLoaded", (function() {
    _pseudo = document.querySelector("pseudo")
    _colr = document.querySelector("colr")
    _slate = document.querySelector("slate")

    var ua = window.navigator.userAgent;
    var msie = ua.indexOf('MSIE ');
    var trident = ua.indexOf('Trident/');
    if (msie > 0) {
    _slate.style.display = "block"
    }else if (trident > 0) {
        _slate.style.display = "block"
    }

    try {
    //_pseudo.scrollTop = localStorage.getItem("current-scroll")
    _pseudo.scrollTo({top: localStorage.getItem("current-scroll")})
    } catch (err) {
        console.log("ok then")
    }

    __0 = document.querySelector("#hhr0")
    __1 = document.querySelector("#hhr1")
    __2 = document.querySelector("#hhr2")
    __3 = document.querySelector("#hhr3")
    __4 = document.querySelector("#hhr4")
    __5 = document.querySelector("#hhr5")
    __scrstyle = document.querySelector("style#rstylebsxsettings")

    if (window.location.search == "?~0"){
        __0.scrollIntoView({behavior: "smooth", block:"start"})
    }else if (window.location.search == "?~1"){
        __1.scrollIntoView({behavior: "smooth", block:"start"})
    }else if (window.location.search == "?~2"){
        __2.scrollIntoView({behavior: "smooth", block:"end"})
        __2.scrollIntoView({behavior: "smooth", block:"start"})
    }else if (window.location.search == "?~3"){
        __3.scrollIntoView({behavior: "smooth", block:"end"})
        __3.scrollIntoView({behavior: "smooth", block:"start"})
    }else if (window.location.search == "?~4"){
        __4.scrollIntoView({behavior: "smooth", block:"end"})
        __4.scrollIntoView({behavior: "smooth", block:"start"})
    }else if (window.location.search == "?~5"){
        __5.scrollIntoView({behavior: "smooth", block:"end"})
        __5.scrollIntoView({behavior: "smooth", block:"start"})
    }

    lscrol = 0
    _pseudo.addEventListener("scroll", (function(){
        localStorage.setItem("current-scroll", _pseudo.scrollTop)
        __scrstyle.innerHTML = "::-webkit-scrollbar-thumb {min-height:" + _pseudo.scrollTop / _pseudo.scrollHeight * window.innerHeight/2 + "px !important}"
    }))
}))
