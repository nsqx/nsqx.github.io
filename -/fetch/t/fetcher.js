




function setup(script){
    document.addEventListener('DOMContentLoaded', script)
}


function matchURLformat(location = window.location){
    location = parseLocation(location);                                         // use parseLocation on inserted Location object
    
    if (!!!location.query.startsWith('?/https://') && !!!location.query.startsWith('?/http://') && !!!location.query.startsWith('?/file://')){
        document.body.innerHTML = '<pre>Error: Ensure that the inserted query parameter begins with the following format: \'?/{https | http}://{url}\'</pre>';
        console.log(location);
    } else {
        sendXHRrequest(location.query.slice(1));
    }
}


function parseLocation(wlocation){
    try{
        return {
            obj: wlocation,                                                     // reference object
            href: wlocation.href,                                               // entire path string
            host: wlocation.host,                                               // the host of the URL, including hostname and port if port exists (e.g. 'subdomain.example.com:443')
            hostname: wlocation.hostname,                                       // the hostname of the URL, including subdomain, domain, and TLD (e.g. 'subdomain.example.com')
            port: wlocation.port,                                               // the port the URL is hosted on (e.g. 443)
            protocol: wlocation.protocol,                                       // the protocol of the URL (e.g. 'https:')
            origin: wlocation.origin,                                           // including protocol, hostname, and port (e.g. 'https://subdomain.example.com:443')
            pathname: wlocation.pathname,                                       // including everything after the 'origin' and before the 'query' (e.g. /folder/foobar/file.html)
            query: wlocation.search,                                            // everything after the '?' part of the URL, including the '?' (e.g. '?arg=val')
            hash: wlocation.hash,                                               // everything after the '#' part of the URL, including the '#' (e.g. '#heading1')
        }
    } catch {
        throw 'TypeError: Expected ' + Location + ', received ' + typeof(wlocation) + '.';
    }
}


function sendXHRrequest(destination){
    xhr = new XMLHttpRequest();

    xhr.addEventListener('load', e => {
        document.querySelector('html').innerHTML = xhr.responseXML
    })

    xhr.open('POST', destination);
    xhr.send();
}
