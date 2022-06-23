document.addEventListener("DOMContentLoaded", ()=> {
    _pseudo = document.querySelector("pseudo")
    try {
    //_pseudo.scrollTop = localStorage.getItem("current-scroll")
    _pseudo.scrollTo({top: localStorage.getItem("current-scroll"), behavior:"smooth"})
    } catch {}

    __0 = document.querySelector("#hhr0")
    __1 = document.querySelector("#hhr1")
    __2 = document.querySelector("#hhr2")
    __3 = document.querySelector("#hhr3")
    __4 = document.querySelector("#hhr4")
    __5 = document.querySelector("#hhr5")

    if (window.location.search == "?~0"){
        __0.scrollIntoView({behavior: "smooth", block:"start"})
    }else if (window.location.search == "?~1"){
        __1.scrollIntoView({behavior: "smooth", block:"start"})
    }else if (window.location.search == "?~2"){
        __2.scrollIntoView({behavior: "smooth", block:"start"})
    }else if (window.location.search == "?~3"){
        __3.scrollIntoView({behavior: "smooth", block:"start"})
    }else if (window.location.search == "?~4"){
        __4.scrollIntoView({behavior: "smooth", block:"start"})
    }else if (window.location.search == "?~5"){
        __5.scrollIntoView({behavior: "smooth", block:"start"})
    }else

    lscrol = 0
    _pseudo.addEventListener("scroll", ()=>{
        localStorage.setItem("current-scroll", _pseudo.scrollTop)
    })
})