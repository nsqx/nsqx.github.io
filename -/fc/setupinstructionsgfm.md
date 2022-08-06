# Clean-up Instructions for Compiled GFM HTML

After publishing the Markdown file to GitHub Pages and extracting the compiled HTML file with GFM styling, follow these steps to clean up and finalize the page.

---

1. Remove unnecessary comments, meta-tags, descriptors, etc. This includes the `h1` title containing the domain name of the GitHub Page at the start of the page (e.g. `yourname.github.io`). Also remove information such as `script[integrity]`, SHA checksums, among others.

2. Change all information accordingly. Make sure that the information you display on the page makes senes in the context - the file is no longer a Markdown.

3. Add the smalltext header and any pagination at the start of the page. An example is shown below.
    ```html
    <h4>
        <a href="file.md">raw md</a> | <a href="">original text</a> | <a href="next.html">next</a>
    </h4>
    ```
    <embed src='data:text/html,<style>* {font-family: -apple-system,BlinkMacSystemFont,"Segoe UI",Helvetica,Arial,sans-serif,"Apple Color Emoji","Segoe UI Emoji","Segoe UI Symbol"; font-weight:600; background-color:rgb(246,248,250);} a {color:rgb(3,102,214); text-decoration:none; text-decoration-skip-ink: all; cursor:pointer} a:hover{text-decoration:underline 1px;} html::After{position:absolute; content:"live demo"; bottom:0px; right:6px;}</style><h4><a>raw md</a> | <a>original text</a> | <a>next</a> </h4>' style="width:100%;height:50px;border-radius:5px;">

4. Locate the `script` which contains <span style="color: rgb(171, 178, 191); background-color: rgb(69, 73, 83); padding:3px; padding-right:4px; padding-left:6px; font-family: Consolas, &quot;Courier New&quot;, monospace; font-size: 14px; line-height: 19px; white-space: pre; border-radius:6px;"><span style="color: #e5c07b;">anchors</span>.<span style="color: #61afef;">add</span>();</span>, and add the following code after, which replaces the link icon with an alternative character &mdash; in this case, `#` is used as a reference because of its representation of an anchor, which uses the `#` prefix in HTTPS URL schemes. 
    ```js
    document.addEventListener("DOMContentLoaded", ()=>{
      setTimeout(()=>{
        for (elem in document.querySelectorAll("a.anchorjs-link")){
          document.querySelectorAll("a.anchorjs-link")[elem].setAttribute("data-anchorjs-icon", "#")
        }
      }, 1000)
    })
    ```

5. Add final tweaks to make the page look the way you want it to, and you're done!

---
