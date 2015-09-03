var chapters = document.querySelectorAll('[data-target]');

function updateImage() {
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
}


var timer;
window.addEventListener('scroll', function() {
  clearTimeout(timer);
  timer = setTimeout(updateImage, 0);
});

//function myFunction() {
    // Explanation 
    // every time we scroll we set a setTimeout to one second, it will keep resetting itself to one second until the user 
    // stops scrolling.  when they stop it will show the picture 

    // create a variable that gets the id of the setTimeout(function() {}, 1000);
    //  and use it to cancel the old one before we set a new one
    //  this variable has to go outside of the addEventListener function



// look at all the chapters and look which one has a negative get bounding client rect.top
// 
// grab the last negative image and show that one
;
