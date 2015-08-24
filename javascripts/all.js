var chapters = document.querySelectorAll('[data-target]');

window.addEventListener('scroll', function() {
  var last = chapters[0];
  for(var i = 0; i < chapters.length; i++) {
    if (chapters[i].getBoundingClientRect().top < 0) {
      last = chapters[i];
    } else {
      break;
    }
  }

  var target = last.getAttribute('data-target');
  var picture = document.querySelector('[data-id="' + target + '"]');
  picture.classList.add('shown');

  //if another picture has the class shown take that away
  var bad = document.querySelector('.picture.shown:not([data-id="' + target + '"])');
  if (bad != null) {
    bad.classList.remove('shown');
  }
});
// look at all the chapters and look which one has a negative get bounding client rect.top
// 
// grab the last negative image and show that one
;
