window.onload = ()=>{
    const blob = b64_blob(b64dd, "application/pdf");
    embd = document.createElement("embed")
    embd.style = "filter: brightness(60%) contrast(4); border-radius:12px; width:100vw;height:110vh;position:absolute;top:-10vh;left:0px;right:0px;bottom:0px"
    embd.src = URL.createObjectURL(blob);
    embd.onclick = (e)=>{
        e.preventDefault()
        e.stopImmediatePropagation()
        e.stopPropagation()
    }
    ambd = document.body.appendChild(embd);
    embd.onclick = (e)=>{
        e.preventDefault()
        e.stopImmediatePropagation()
        e.stopPropagation()
    }
    ambd.onclick = (e)=>{
        e.preventDefault()
        e.stopImmediatePropagation()
        e.stopPropagation()
    }
    URL.revokeObjectURL(embd.src);
}
window.onbeforeprint = ()=>{
    window.location.href = "about:blank#$error"
    return false
}
function b64_blob(b64d, cta) {
    cta = cta || '';
    var sliceSize = 1024;
    var byteCharacters = atob(b64d);
    var bytesLength = byteCharacters.length;
    var slicesCount = Math.ceil(bytesLength / sliceSize);
    var byteArrays = new Array(slicesCount);

    for (var sliceIndex = 0; sliceIndex < slicesCount; ++sliceIndex) {
        var begin = sliceIndex * sliceSize;
        var end = Math.min(begin + sliceSize, bytesLength);

        var bytes = new Array(end - begin);
        for (var offset = begin, i = 0; offset < end; ++i, ++offset) {
            bytes[i] = byteCharacters[offset].charCodeAt(0);
        }
        byteArrays[sliceIndex] = new Uint8Array(bytes);
    }
    return new Blob(byteArrays, { type: cta });
}

{
}