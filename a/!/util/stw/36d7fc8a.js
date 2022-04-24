document.addEventListener('DOMContentLoaded', () => {

    {
        q_f_obj = document.querySelector("forensic-object");
        q_f_warning = document.querySelector("forensic-warning");
        q_f_obj_text = document.querySelector("forensic-object-text");
        q_app_mode_toggle = document.querySelector("app-mode-toggle");
        q_html = document.querySelector("html");
        q_stw_start = document.getElementsByName("stopwatch-start")[0];
        q_stw_stop = document.getElementsByName("stopwatch-stop")[0];
        q_stw_lap = document.getElementsByName("stopwatch-lap")[0];
        q_stw_reset = document.getElementsByName("stopwatch-reset")[0];
        q_t_h = document.querySelector("t-h");
        q_t_m = document.querySelector("t-m");
        q_t_s = document.querySelector("t-s");
        q_t_ms = document.querySelector("t-ms");
        q_stw_laps = document.querySelector("stw-laps");
        q_t_main = document.querySelector("t-main");
        q_body = document.body;
        _q_stw_tm = localStorage.getItem("util.clock.stw.time");
        _q_stw_lap = sessionStorage.getItem("util.clock.stw.laps");
    }


    q_html.style.transition = "0.5s";

    if (window.location.protocol != "file:"){
        window.history.pushState(q_html.innerHTML, null, window.location.origin + "/util.stw");
    }

    if(_q_stw_tm != null && _q_stw_tm.indexOf(" => util.clock.stw.timevaluebeforeunload") != -1){
        q_t_h.innerText = _q_stw_tm.split(", ")[0];
        q_t_m.innerText = _q_stw_tm.split(", ")[1];
        q_t_s.innerText = _q_stw_tm.split(", ")[2];
        q_t_ms.innerText = _q_stw_tm.split(", ")[3].split(";")[0];
        q_stw_reset.removeAttribute("disabled")
    }
    if(_q_stw_lap != null && _q_stw_lap.toLowerCase() != "<grey>leg</grey>"){
        if(!_q_stw_lap.startsWith("<grey")){
            q_stw_laps.innerHTML = "<grey>" + _q_stw_lap + "</grey>";
        } else {
            q_stw_laps.innerHTML = _q_stw_lap;
        }
    }

    if(localStorage.getItem("mode") == "light"){
        q_html.setAttribute("colormode", "light");
    }else if(localStorage.getItem("mode") == "dark"){
        q_html.setAttribute("colormode", "dark");
    }else{
        q_html.setAttribute("colormode", "light");
        //localStorage.removeItem("display")
    }

    setTimeout(function(){q_html.style.transition = "0.5s";}, 100)


    q_f_obj.attachShadow({mode: "open"});
    q_f_obj_text.innerHTML = "//[javascript is present and functioning]";
    q_f_warning.attachShadow({mode: "open"});

    q_app_mode_toggle.addEventListener("click", ()=>{
        if(localStorage.getItem("mode") == "light"){
            q_html.setAttribute("colormode", "dark");
            localStorage.setItem("mode", "dark");
        }else if(localStorage.getItem("mode") == "dark"){
            q_html.setAttribute("colormode", "light");
            localStorage.setItem("mode", "light");
        }else{
            q_html.setAttribute("colormode", "light");
            //localStorage.removeItem("display")
        }
    });


    q_stw_start.addEventListener("click", ()=>{
        q_stw_start.innerText = "Start";
        q_stw_reset.setAttribute("disabled", "");
        clock = setInterval(()=>{
            if (parseInt(q_t_s.innerText) < 9){
            q_t_s.innerText = "0" + (parseInt(q_t_s.innerText) + 1).toString();
            }else if (parseInt(q_t_s.innerText) > 58){
            q_t_s.innerText = "00";
                if (parseInt(q_t_m.innerText) < 9){
                    q_t_m.innerText = "0" + (parseInt(q_t_m.innerText) + 1).toString();
                }else if (parseInt(q_t_m.innerText) > 58){
                    q_t_m.innerText = "00";
                    if (parseInt(q_t_h.innerText) < 9){
                        q_t_h.innerText = "0" + (parseInt(q_t_h.innerText) + 1).toString();
                    }else{
                        q_t_h.innerText = parseInt(q_t_h.innerText) + 1;
                    }
                }else{
                    q_t_m.innerText = parseInt(q_t_m.innerText) + 1;
                }
            }else{
            q_t_s.innerText = parseInt(q_t_s.innerText) + 1;
            }
        }, 1000)
        msclock = setInterval(()=>{
            if (parseInt(q_t_ms.innerText) < 9){
            q_t_ms.innerText = "0" + (parseInt(q_t_ms.innerText) + 1).toString();
            }else if (parseInt(q_t_ms.innerText) > 98){
            q_t_ms.innerText = "00";
            }else{
            q_t_ms.innerText = parseInt(q_t_ms.innerText) + 1;
            }
        }, 10)
        q_stw_stop.removeAttribute("disabled");
        q_stw_lap.removeAttribute("disabled");
        //q_stw_reset.removeAttribute("disabled");
        q_stw_start.setAttribute("disabled", "")
    });

    q_stw_lap.addEventListener("click", ()=>{
        q_stw_laps.innerHTML = "&nbsp;&gt;&nbsp;<!--<lap>-->" + q_t_h.innerText + ":" + q_t_m.innerText + ":" + q_t_s.innerText + "." + q_t_ms.innerText + "<!--</lap>-->&nbsp;&nbsp;&nbsp;&nbsp;<inputter contenteditable><!--<lap-label>-->untitled lap<!--</lap-label>--></inputter><br>" + q_stw_laps.innerHTML;
    });

    q_stw_stop.addEventListener("click", ()=>{
        q_stw_stop.setAttribute("disabled", "");
        q_stw_start.removeAttribute("disabled");
        q_stw_lap.setAttribute("disabled", "");
        q_stw_reset.removeAttribute("disabled");
        q_stw_start.innerText = "Resume";
        clearInterval(clock);
        clearInterval(msclock);
    });

    q_stw_reset.addEventListener("click", ()=>{
        q_stw_start.innerText = "Start";
        q_stw_reset.setAttribute("disabled", "");
        q_t_ms.innerText = q_t_s.innerText = q_t_m.innerText = q_t_h.innerText = "00";
        q_stw_laps.innerHTML = "<grey>leg</grey>";
    });
});

/*window.onscroll = function(){
    document.querySelector("div#doverbox").style.top = "calc(-10vh + " + -(document.body.getBoundingClientRect().top) + "px)";
}*/


window.onhashchange = ()=>{
    if (window.location.hash == "#::toggle"){
        history.replaceState(null, null, " ")
    }
}

window.onbeforeunload = ()=>{
    localStorage.setItem("util.clock.stw.time", q_t_h.innerText + ", " + q_t_m.innerText + ", " + q_t_s.innerText + ", " + q_t_ms.innerText + "; => util.clock.stw.timevaluebeforeunload")
    sessionStorage.setItem("util.clock.stw.laps", q_stw_laps.innerHTML)
    if (window.location.protocol != "file:"){
        window.history.replaceState(q_html.innerHTML, null, window.location.origin + "/a/!/util/stw/");
        window.history.back();
        window.location.href = "/a/!/util/stw/";
        sleep(1000);
    }
}


window.onkeydown = (evt)=>{
    if (evt.ctrlKey && evt.key == "s"){
        evt.preventDefault();
        let l = document.createElement('a');
        l.download = 'util.stw.log-' + Date.now() +'.json';
        _fl_stw_laptimes = []
        for (const i in q_stw_laps.innerHTML.split("<[!/nonexistentstring]>")) {
            for( const e in q_stw_laps.innerHTML.split("<[!/nonexistentstring]>")[i].split("<!--</lap>-->")){
                _fl_stw_laptimes.push(q_stw_laps.innerHTML.split("<[!/nonexistentstring]>")[i].split("<!--</lap>-->")[e].split("<!--<lap>-->")[1])
            }
        }
        _fl_stw_laplabel = []
        for (const i in q_stw_laps.innerHTML.split("<[!/nonexistentstring]>")) {
            for( const e in q_stw_laps.innerHTML.split("<[!/nonexistentstring]>")[i].split("<!--</lap-label>-->")){
                _fl_stw_laplabel.push(q_stw_laps.innerHTML.split("<[!/nonexistentstring]>")[i].split("<!--</lap-label>-->")[e].split("<!--<lap-label>-->")[1])
            }
        }
        _blobcontent =
`{
  "global.now": [` + Date.now() + ", \"" + Date() + `"],
  "stw.time": {
    "h": "` + parseInt(q_t_h.innerText) + `",
    "m": "` + parseInt(q_t_m.innerText) + `",
    "s": "` + parseInt(q_t_s.innerText) + `",
    "ms": "` + parseInt(q_t_ms.innerText) + `"
  },
  "stw.laps": [
    `;
        for (const i in _fl_stw_laptimes){
          if (_fl_stw_laptimes[i] != undefined){
            _blobcontent += '[' + i + ', "' + _fl_stw_laptimes[i] + '", "' + _fl_stw_laplabel[i] + '"],\n    ';
          }
        }
        _blobcontent += '"EndOfObject[stw.laps]"'
        _blobcontent += `
  ]
}`
        let b = new Blob([_blobcontent], {type: 'application/json'});
        l.href = URL.createObjectURL(b);
        l.target = "_blank"
        l.click();
        URL.revokeObjectURL(l);
    }
}


function sleep(ms) {
    return new Promise(resolve => setTimeout(resolve, ms));
}
