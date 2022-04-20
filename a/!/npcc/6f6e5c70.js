




document.addEventListener('DOMContentLoaded', function() {

    { // declaring all q_ variables for js-html reference
    q_vinput = document.querySelector("vinput");
    q_body = document.querySelector("body");
    q_restore = document.getElementById("restore");
    q_fname = document.querySelector("fname");
    q_fbool = document.querySelector("fbool");
    q_saveupd = document.getElementById("saveupd");
    q_deletd = document.getElementById("deletd");
    q_fileselectopen = document.getElementById("fileselectopen");
    q_delete_modal = document.querySelector("delete-modal");
    q_file_modal = document.querySelector("file-modal");
    q_save_modal = document.querySelector("save-modal");
    q_error_modal = document.querySelector("error-modal");
    q_opensub = document.getElementById("opensub");
    q_cancelopensub = document.getElementById("cancelopensub");
    q_fles = document.getElementById("fles");
    q_popupnew = document.getElementById("popupnew");
    q_sourcede = document.getElementById("sourcede");
    q_sourcede2 = document.getElementById("sourcede2");
    q_save = document.getElementById("save");
    q_savesub = document.getElementById("savesub");
    q_deletesub = document.getElementById("deletesub");
    q_canceldeletesub = document.getElementById("canceldeletesub");
    q_cancelsub = document.getElementById("cancelsub");
    q_rmsc1 = document.querySelector("rmsc1");
    q_buttonlist = document.querySelector("buttonlist");
    q_tophaeder = document.querySelector("tophaeder");
    q_extracted = document.getElementById("extracted");
    q_deletename = document.querySelector("deletename");
    q_download = document.getElementById("downloadb");
    q_title = document.querySelector("title");
    q_save_dialog = document.querySelector("save-dialog")
    q_error_dialog = document.querySelector("error-dialog")
    q_file_dialog = document.querySelector("file-dialog")
    q_delete_dialog = document.querySelector("delete-dialog")
    }

    if (localStorage.getItem("mode") == "dark"){
        q_body.classList.add("dmode")
        adddel("dialoglight", "dialogdark")
    }else{
        adddel("dialogdark", "dialoglight")
    }

    if(window.location.search != ""){
        handler1()
        q_vinput.innerHTML = localStorage.getItem(window.location.search.substring(1))
        q_fname.innerText = window.location.search.substring(1)
        q_title.innerText = q_fbool.innerText + q_fname.innerText + " - notepadcc"
        q_save.style.display = "inline"
    }

    getawsk() // get bfiles


    if (localStorage.getItem('autosave') != null & localStorage.getItem('autosave') != "" & localStorage.getItem('autosave') != " " & localStorage.getItem('autosave') != "<br>"){
        q_restore.style.display = "inline";
        q_restore.addEventListener("click", ()=>{
            handler1()
            q_vinput.innerHTML = localStorage.getItem('autosave')
            q_restore.style.display = "none";
        })
    }

    q_opensub.addEventListener("click", ()=>{
        handler1()
        q_vinput.innerHTML = localStorage.getItem(q_fileselectopen.value)
        q_fname.innerText = q_fileselectopen.value;
        q_title.innerText = q_fbool.innerText + q_fname.innerText + " - notepadcc"
        q_fbool.style.display = "none";
        q_saveupd.style.display = "inline";
        q_deletd.style.display = "inline";
        q_file_modal.style.display = "none";
        q_body.classList.remove("mopen")
    })

    q_cancelopensub.addEventListener("click", ()=>{
        q_file_modal.style.display = "none";
        q_body.classList.remove("mopen")
    })

    q_fles.addEventListener("click", ()=>{
        q_file_modal.style.display = "block";
        q_file_modal.focus()
        q_body.classList.add("mopen")
    })

    q_popupnew.addEventListener("click", ()=>{
        let l = document.createElement('a');
        let incstr = "<style>::-moz-selection{ background: rgba(29, 153, 255, 0.438);}::selection { background:rgba(29, 153, 255, 0.438);}*{font-family:Consolas, sans-serif}</style>"+q_vinput.innerHTML;
        let b = new Blob([incstr], {type: 'text/html'});
        l.href = URL.createObjectURL(b);
        l.target = "_blank"
        l.click();
    })

    q_download.addEventListener("click",()=>{
        let l = document.createElement('a');
        l.download = q_fname.innerText + '.html';
        let b = new Blob([q_vinput.innerHTML], {type: 'text/html'});
        l.href = URL.createObjectURL(b);
        l.target = "_blank"
        l.click();
        URL.revokeObjectURL(this);
    });

    q_sourcede.addEventListener("click", ()=>{
        if(q_vinput.ariaLabel == "0"){
            q_sourcede.style.display = "none";
            q_sourcede2.style.display = "inline";
            q_extracted.innerText = q_vinput.innerHTML
            q_vinput.style.display = "none"
            q_extracted.style.display = "block"
        }
    })

    q_sourcede2.addEventListener("click", ()=>{
        q_sourcede.style.display = "inline";
        q_sourcede2.style.display = "none";
        q_vinput.innerHTML = q_extracted.value;
        q_vinput.style.display = "block"
        q_extracted.style.display = "none"
    })

    q_save.addEventListener("click", ()=>{
        q_save_modal.style.display = "block";
        q_save_modal.focus()
        q_body.classList.add("mopen")
    });

    q_savesub.addEventListener("click", ()=>{
        savefls(document.getElementById("savename").value)
        q_save_modal.style.display = "none";
        q_body.classList.remove("mopen")
        
    });

    q_saveupd.addEventListener("click", ()=>{
        //q_save_modal.style.display = "none";
        savefls2(q_fname.innerText.split(".")[0])
        q_title.innerText = q_fbool.innerText + q_fname.innerText + " - notepadcc"
    });

    

    q_deletd.addEventListener("click", ()=>{
        q_delete_modal.style.display = "block";
        q_delete_modal.focus()
        q_deletename.innerText = q_fname.innerText;
        q_body.classList.add("mopen")
    });

    q_deletesub.addEventListener("click", ()=>{

        fstring = localStorage.getItem("bfiles")
        fstring = fstring.replace(", " + q_deletename.innerText, "")
        localStorage.setItem("bfiles", fstring)
        localStorage.removeItem(q_deletename.innerText)
        q_delete_modal.style.display = "none";
        q_body.classList.remove("mopen")
        window.location = window.location
    });

    q_canceldeletesub.addEventListener("click", ()=>{
        q_delete_modal.style.display = "none";
        q_body.classList.remove("mopen")
    });

    q_cancelsub.addEventListener("click", ()=>{
        q_save_modal.style.display = "none";
        q_body.classList.remove("mopen")
    });
    
    q_vinput.addEventListener("click", handler1);
    q_body.addEventListener("keydown", handler1)
    q_body.addEventListener("keydown", onkdown)
    q_body.addEventListener("dblclick",()=>{
        /*if (q_body.classList.contains("dmode")){
            q_body.style.transition = "1s";
            q_body.classList.remove("dmode")
        }else{
            q_body.classList.add("dmode")
        }*/
        if (q_body.classList.contains("dmode")){
            q_body.classList.remove("dmode")
            localStorage.setItem("mode", "light")
            adddel("dialogdark", "dialoglight")
        }else{
            q_body.classList.add("dmode")
            localStorage.setItem("mode", "dark")
            adddel("dialoglight", "dialogdark")
        }
    })

    q_vinput.addEventListener('input', function(){
        localStorage.setItem('autosave', this.innerHTML);
        q_fbool.style.display = "inline";
    })

    
});


function adddel(a,b){
    q_save_dialog.classList.remove(a)
    q_save_dialog.classList.add(b)
    q_error_dialog.classList.remove(a)
    q_error_dialog.classList.add(b)
    q_file_dialog.classList.remove(a)
    q_file_dialog.classList.add(b)
    q_delete_dialog.classList.remove(a)
    q_delete_dialog.classList.add(b)
}


function handler1() {
    if(q_vinput.ariaLabel == "1"){
        q_vinput.innerText = "";
        q_vinput.contentEditable = true;
        q_vinput.focus();
        q_vinput.style.color = "inherit";
        q_vinput.ariaLabel = "0";
    }else{
        //do nothing
    };
}

function onkdown(evt){
    if (evt.ctrlKey && evt.key === "s") {  
        evt.preventDefault()
        savefls2(q_fname.innerText.split(".")[0])
    }
    if (evt.altKey && evt.key === "Enter") {  
        evt.preventDefault()
        if (q_rmsc1.ariaLabel == "visible"){
            q_rmsc1.ariaLabel = "hidden";
            q_buttonlist.style.display = "none";
            q_tophaeder.style.display = "none";
            q_vinput.style.top = "30px";
            q_vinput.style.height = "90vh";
            q_extracted.style.top = "30px";
            q_extracted.style.height = "90vh";
        }else{
            q_rmsc1.ariaLabel = "visible";
            q_buttonlist.style.display = "block";
            q_tophaeder.style.display = "block";
            q_vinput.style.top = "16vh";
            q_vinput.style.height = "80vh";
            q_extracted.style.top = "16vh";
            q_extracted.style.height = "80vh";
        }
    }
}

function returnclick(hand){
    hand.click()
}


function savefls(name){
    if (localStorage.getItem(name + ".b")){
        document.getElementById("yesreplace").addEventListener('click', function(){
            localStorage.setItem(name + ".b", q_vinput.innerHTML);
            q_error_modal.style.display = "none";
            q_body.classList.remove("mopen")
            q_fname.innerText = name + ".b";
            q_title.innerText = q_fbool.innerText + q_fname.innerText + " - notepadcc"
            q_fbool.style.display = "none";
            q_saveupd.style.display = "inline";
            q_deletd.style.display = "inline";
        });
        document.getElementById("noreplace").addEventListener('click', function(){
            q_error_modal.style.display = "none";
            q_save_modal.style.display = "block";
            q_save_modal.focus()
        });
        q_error_modal.style.display = "block"
        q_body.classList.add("mopen")
        q_error_modal.focus()
    }else{
        localStorage.setItem(name + ".b", q_vinput.innerHTML);
        q_fname.innerText = name + ".b";
        q_title.innerText = q_fbool.innerText + q_fname.innerText + " - notepadcc"
        q_fbool.style.display = "none";
        q_deletd.style.display = "inline";
        if (localStorage.getItem("bfiles") == null){
            localStorage.setItem("bfiles", name +".b, ");
        }else{
            localStorage.setItem("bfiles", localStorage.getItem("bfiles") + name +".b, ");
        }
    }
    getawsk()
}




window.onbeforeunload = ()=>{
    /*let l = document.createElement('a');
    l.download = '';
    let b = new Blob([q_vinput.innerHTML], {type: 'text/html'});
    l.href = URL.createObjectURL(b);
    l.click();
    URL.revokeObjectURL(this);
    window.location = "ls:l"*/
    //alert("Unloading?")
    //return "unload"
}














function savefls2(name){
    localStorage.setItem(name + ".b", q_vinput.innerHTML);
    q_fbool.style.display = "none";
    getawsk()
}

function loadfls(name){
    return localStorage.getItem(name);
}

function getflist(){
    return localStorage.getItem("bfiles")
}

function getawsk(){
    if (getflist() != null){
        q_fileselectopen.innerHTML = ""
        var flist = [];
        flist = getflist().split(", ");
        flist.pop()
        console.log("Files:\n%c\t" + flist, "font-style: italic")
        for (fl in flist) {
            q_fileselectopen.innerHTML = q_fileselectopen.innerHTML + "<option aria-label=\"" + fl +  "\" value=\"" + flist[fl] + "\">" + flist[fl] + "</option>"
        }
    }else{
        q_fles.style.display = "none";
    }
}