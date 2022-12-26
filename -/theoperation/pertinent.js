function $($){return document.querySelector($)}
function $$($){return document.querySelectorAll($)}

const P = {
  wordcycle: function(e={}){
    var t={target:void 0,words:void 0,interval:2e3,repeat:!0,autoheight:!0,onend:function(){}};const n=window.setTimeout||setTimeout||function(e){return e(),-1};t=function(e,t){var n=t;for(const o in t)null!=e[o]&&(n[o]=e[o]);return n}(e,t),target=t.target,words=t.words,interval=t.interval,repeat=t.repeat,onend=t.onend,autoheight=t.autoheight,t.repeat&&null!=e.onend&&console.warn("Function 'onend' will not be executed when 'repeat' is true. (wordcycle)"),"function"!=typeof onend&&console.warn("The provided 'onend' argument is not a function. It will not be executed. (wordcycle)");var o=0,r=[];function i(){autoheight&&(target.style.height=r[o].getBoundingClientRect().height+"px",target.style.width=r[o].getBoundingClientRect().width+"px")}function a(){if(o+1<words.length){r[o].style.opacity=0,r[o].style.transform="translateY(-100%)",r[o].style.pointerEvents="none";var e=r[o];r[o+=1].style.opacity=1,r[o].style.transform="translateY(0%)",i(),r[o].style.pointerEvents="auto",n(a,interval),n((function(){e.style.transition="0s",e.style.transform="translateY(100%)",e.style.transition="transform .5s cubic-bezier(0.48, 0.08, 0.19, 1), opacity .5s cubic-bezier(0.48, 0.08, 0.19, 1)"}),interval)}else if(repeat){r[o].style.opacity=0,r[o].style.transform="translateY(-100%)",r[o].style.pointerEvents="none";e=r[o];r[o=0].style.opacity=1,r[o].style.transform="translateY(0%)",i(),r[o].style.pointerEvents="auto",n(a,interval),n((function(){e.style.transition="0s",e.style.transform="translateY(100%)",e.style.transition="transform .5s cubic-bezier(0.48, 0.08, 0.19, 1), opacity .5s cubic-bezier(0.48, 0.08, 0.19, 1)"}),interval)}else if("function"==typeof onend)try{onend(r)}catch(e){console.error("An error occured while executing 'onend':\n(begin)\n\n",e,"\n\n(end)\nPlease check for any errors in the function passed into the 'onend' argument. (wordcycle)")}else console.warn("The provided 'onend' argument is not a function. (wordcycle)")}!function(){for(word of(target.innerText="",target.style.transition="height .5s cubic-bezier(0.165, 0.84, 0.44, 1),width .5s cubic-bezier(0.165, 0.84, 0.44, 1)",words)){var e=document.createElement("div");e.style="display: block; box-sizing: border-box; width: fit-content; line-height: inherit; white-space: pre-wrap; position: absolute; transition: transform .5s cubic-bezier(0.48, 0.08, 0.19, 1), opacity .5s cubic-bezier(0.48, 0.08, 0.19, 1); opacity: 0; transform: translateY(100%);left: 0;",e.innerHTML=word,r.push(target.appendChild(e))}console.log("Attached to element",target,"(wordcycle)"),r[o].style.opacity=1,r[o].style.transform="translateY(0%)",i(),n(a,interval)}()
  },
  veil: {
    drop: function(elem){
      elem.style.filter = "brightness(0)";
    },
    unlift: function(elem){
      /*
      if (!!elem.animate) {
        elem.style.animationTimingFunction = "ease";
        var veilUnlift = elem.animate([
          { filter: "brightness(0)", animationTimingFunction: "ease" },
          { filter: "brightness(1)", display: "block" }
        ], {duration: 500, iterations: 1, fill: "forwards"})
        veilUnlift.commitStyles()
      } else {
        elem.style.filter = "brightness(1)";
      }*/
      if (!!$("#veil").animate) {
        $("#veil").style.animationTimingFunction = "ease";
        var veilUnlift = $("#veil").animate([
          { backdropFilter: "brightness(0)", opacity: "1" },
          { backdropFilter: "brightness(0)", opacity: "0", pointerEvents: "none" }
        ], {duration: 500, iterations: 1, fill: "forwards"})
        veilUnlift.commitStyles()
      } else {
        $("#veil").style.display = "none";
      }
    }
  }
}





document.addEventListener("DOMContentLoaded", function(){
  P.wordcycle({target: $("#usc__fanciful_propaganda_words"), words: ["Get", "Submit to", "Trust"]});
})

window.addEventListener("load", function(){
  P.veil.unlift($("html"));

  $("#usc__fanciful_title_text").style.fontSize = "12px";
  $("#usc__fanciful_title_text").gfwW = $("#usc__fanciful_title_text").getBoundingClientRect().width
  $("#usc__fanciful_title_text").style.fontSize = (window.innerWidth / $("#usc__fanciful_title_text").gfwW * 12) + "px"
  window.addEventListener("resize", function(){
    $("#usc__fanciful_title_text").style.fontSize = "12px";
    $("#usc__fanciful_title_text").style.fontSize = (window.innerWidth / $("#usc__fanciful_title_text").gfwW * 12) + "px"
  })

  $$(".usc__phrases_marquee_text").forEach(function(e){e.style.setProperty("---animationendpx", -e.getBoundingClientRect().width + "px")})
  
  
  document.addEventListener("scroll", function(){
    $("#usc__parallax_item_bg_1").style.top = -(document.scrollingElement.scrollTop / window.innerHeight * 100) + "% ";
    $("#usc__dynamic_resize_section_subsection").style.marginLeft = ($("#reviews").getBoundingClientRect().y) + "px";
    
  })
  document.addEventListener("mousemove", function(evt){
    $("#cursorcirclefollower").style.top = evt.clientY + "px";
    $("#cursorcirclefollower").style.left = evt.clientX + "px";
    if (evt.target.classList.contains("iscomponent")) {
      $("#cursorcirclefollower").style.height = "86px"
      $("#cursorcirclefollower").style.marginLeft = "-43px"
      $("#cursorcirclefollower").style.marginTop = "-43px"
      evt.target.style.cursor = "none"
    } else {
      $("#cursorcirclefollower").style.height = "16px"
      $("#cursorcirclefollower").style.marginLeft = "-8px"
      $("#cursorcirclefollower").style.marginTop = "-8px"
    }
  })

  $("#reviews").style.height = $("#usc__dynamic_resize_section_subsection").getBoundingClientRect().width + "px";

  $("html").scrollLeft = 0
  $$("a").forEach(function(element){element.setAttribute("draggable","true")})
})