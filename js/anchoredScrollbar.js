
// anchoredScrollBar
function anchoredScrollBar() {
  var delay = false;

  $(document).on('mousewheel DOMMouseScroll', function(event) {
    // event.preventDefault();
    if(delay) return;

    delay = true;
    setTimeout(function(){delay = false},200)

    var wd = event.originalEvent.wheelDelta || -event.originalEvent.detail;

    var a= document.getElementsByTagName('section');
    if(wd < 0) {
      for(var i = 0 ; i < a.length ; i++) {
        var t = a[i].getClientRects()[0].top;
        if(t >= 60) break;
      }
    }
    else {
      for(var i = a.length-1 ; i >= 0 ; i--) {
        var t = a[i].getClientRects()[0].top;
        if(t < -20) break;
      }
    }

    if(i >= 0 && i < a.length) {
      $('html,body').animate({
        scrollTop: a[i].offsetTop
      });
    }
  });
};
console.clear();
// end scrollbar
