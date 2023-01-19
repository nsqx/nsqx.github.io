function toggleAddressType(e){
    if (e == "https"){
        document.querySelector("a#c1").innerText = "* (%)";
        document.querySelector("vinput").setAttribute("sorc", "0")
        document.querySelector("button").setAttribute("sroc", "1")
    }else if (e == "* (%)"){
        document.querySelector("a#c1").innerText = "*    ";
        document.querySelector("vinput").setAttribute("sorc", "0")
        document.querySelector("button").setAttribute("sroc", "1")
    }else if (e == "*    "){
        document.querySelector("a#c1").innerText = "https";
        document.querySelector("vinput").setAttribute("sorc", "1")
        document.querySelector("button").setAttribute("sroc", "0")
    }else{
        throwerr();
    }
}
tyur = "ec";

function toggleDecodeType(e){
    if (e == "https"){
        document.querySelector("a#c2").innerText = "* (%)";
        document.querySelector("vinput").setAttribute("sorc", "0")
        document.querySelector("button").setAttribute("sroc", "1")
    }else if (e == "* (%)"){
        document.querySelector("a#c2").innerText = "*    ";
        document.querySelector("vinput").setAttribute("sorc", "0")
        document.querySelector("button").setAttribute("sroc", "1")
    }else if (e == "*    "){
        document.querySelector("a#c2").innerText = "https";
        document.querySelector("vinput").setAttribute("sorc", "1")
        document.querySelector("button").setAttribute("sroc", "0")
    }else{
        throwerr();
    }
}

function toggleOutputType(e){
    if (e == 0){
        document.querySelector("ec").style.display = "none";
        document.querySelector("dc").style.display = "inline";
        tyur = "dc";

    }else if (e == 1){
        document.querySelector("ec").style.display = "inline";
        document.querySelector("dc").style.display = "none";
        tyur = "ec";
    }else{
        throwerr();
    }
}

function strhex(plain) {
    if (tyur=="ec"){
        return plain.split("").map(c => c.charCodeAt(0).toString(16).padStart(2, "0")).join("%");
    }else if (tyur=="dc"){
        try{
            return plain.replace("%", "").split(/(\w\w)/g).filter(p => !!p).map(c => String.fromCharCode(parseInt(c, 16))).join("");
        }catch{
            throwerr();
        }
    }else{
        throwerr();
    }
}


function strhex2(plain) {
    if (tyur=="ec"){
        return plain.split("").map(c => c.charCodeAt(0).toString(16).padStart(2, "0")).join("");
    }else if (tyur=="dc"){
        try{
            return plain.split(/(\w\w)/g).filter(p => !!p).map(c => String.fromCharCode(parseInt(c, 16))).join("");
        }catch{
            throwerr();
        }
    }else{
        throwerr();
    }
}

function thus(){
    window.close();
    window.history.back();
}




document.addEventListener('DOMContentLoaded', function() {
    document.querySelector("vinput").addEventListener("click", handler1);
    document.querySelector("body").addEventListener("keydown", handler1)
    document.querySelector("vinput").addEventListener('keydown', (evt) => {
        if (evt.key === "Enter") {
            evt.preventDefault();
            document.querySelector("button").click()
        }
    });
    document.querySelector("button").addEventListener("click", handler2);
});


function handler1() {
    if(document.querySelector("vinput").ariaLabel == "1"){
        document.querySelector("vinput").innerText = "";
        document.querySelector("vinput").contentEditable = true;
        document.querySelector("vinput").focus();
        document.querySelector("vinput").style.color = "#000000";
        document.querySelector("vinput").ariaLabel = "0";
    }else{
        //do nothing
    };
}


function handler2() {
    if(document.querySelector("vinput").ariaLabel == "0"){
        if (tyur == "ec"){
            var select = document.querySelector("a#c1").innerText;
        }else if (tyur == "dc"){
            var select = document.querySelector("a#c2").innerText;
        }else{
            throwerr();
        }

        var cont = document.querySelector("vinput").innerText;

        if (select == "*    "){
            try{
                document.querySelector("span").innerText = strhex2(cont);
                navigator.clipboard.writeText(document.querySelector("span").innerText);
            }catch{
                window.location.search = "retry";
            }
        }else if (select == "* (%)"){
            try{
                document.querySelector("span").innerText = strhex(cont);
                navigator.clipboard.writeText(document.querySelector("span").innerText);
            }catch{
                window.location.search = "retry";
            }
        }else if (select == "https"){
            try{
                if (document.querySelector("span").innerText.startsWith("https:") | document.querySelector("span").innerText.startsWith("http:")){
                    cont = cont.split("/")
                    document.querySelector("span").innerText = cont[0] + "/" + cont[1] + "/" + cont[2] + "/%" + strhex(cont[3]).toUpperCase();
                    navigator.clipboard.writeText(document.querySelector("span").innerText);
                }else{
                    throw("exception input formatted incorrectly")
                }
            }catch{
                throwerr();
            }
        };
    };
}

window.onhashchange = ()=>{
    if (window.location.hash == "#::toggle"){
        history.replaceState(null, null, " ")
    }
}

function throwerr(){
    window.location.search = "retry" + Math.random();
}
