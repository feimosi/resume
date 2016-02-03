onmessage = function(event) {
    importScripts('../bower_components/highlightjs/highlight.pack.min.js');
    var result = self.hljs.highlightAuto(event.data);
    postMessage(result.value);
}