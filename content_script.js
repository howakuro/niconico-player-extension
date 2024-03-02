'use strict';

var controlPlayButton = function() {
  var display  = document.querySelector(".VideoContainer");
  var KEvent = new KeyboardEvent("keypress", { keyCode: 107, altKey: false, shiftKey: false, key: "k" });
  display.addEventListener('click', function() {
    document.dispatchEvent(KEvent);
  }, false);
}

window.addEventListener('load', function() {
  controlPlayButton();
}, false);
