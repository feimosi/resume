require('../bower_components/highlightjs/highlight.pack.min.js');

onmessage = function(event) {
    var result = self.hljs.highlightAuto(event.data);
    postMessage(result.value);
}