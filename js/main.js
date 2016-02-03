require('../bower_components/typed.js/dist/typed.min.js');

addEventListener('load', function() {
    var code = document.querySelector('.plain-code-block code');
    var worker = new Worker('js/worker.js');
    worker.onmessage = function(event) {
         $(".code-animation-block code").typed({
            strings: [event.data],
            loop: false,
            showCursor: false
        });
    }
    worker.postMessage(code.textContent);
});


var scrolled = 0;
var updateScrollIntervalId = setInterval(updateScroll, 1000);

function updateScroll(){
    if(scrolled < 5){
        scrolled = 0;
        var element = document.querySelector('body');
        element.scrollTop = element.scrollHeight;
    } else {
        clearInterval(updateScrollIntervalId);
    }
}

$(document).scroll(function(event){
    scrolled++;
});