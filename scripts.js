$(document).ready(function() {
  $('#more-edu-cont').hide();
  $('#more-edu-butt').click(function(){
    $('#more-edu-cont').toggle('slow',false);
  });
});




/*
https://codepen.io/daveredfern/pen/zBGBJV
*/
$(window).scroll(function() {
  
  // selectors
  var $window = $(window),
      $body = $('body'),
      $panel = $('.scrl-sect');
  
  // Change 33% earlier than scroll position so colour is there when you arrive.
  var scroll = $window.scrollTop() + ($window.height() / 4);
 
  $panel.each(function () {
    var $this = $(this);
    
    // if position is within range of this panel.
    // So position of (position of top of div <= scroll position) && (position of bottom of div > scroll position).
    // Remember we set the scroll to 33% earlier in scroll var.
    if ($this.position().top <= scroll && $this.position().top + $this.height() > scroll) {
          
      // Remove all classes on body with color-
      $body.removeClass(function (index, css) {
        return (css.match (/(^|\s)color-\S+/g) || []).join(' ');
      });
       
      // Add class of currently active div
      $body.addClass('color-' + $(this).data('color'));
    }
  });    
  
}).scroll();

/*
  https://stackoverflow.com/questions/31468794/how-to-show-random-color-on-hover-in-css
  https://stackoverflow.com/questions/21632434/change-color-of-character-when-mouseover-javascript/21632555
  https://stackoverflow.com/questions/18466365/javascript-changing-background-color
*/
function changeCharColour () {

  var text, name, changed;
  var colours = ['#ffbe0b','#fb5607','#ff006e','#8338ec','#3a86ff','black'];

  name = document.getElementById("name");
  text = name.innerHTML;

  /*wrap every char in a string into a class*/
  changed = "";
  for (let i=0; i<text.length; i++){
    changed += "<span class=charInName>" + text.charAt(i) + "</span>";
  }
  name.innerHTML=changed;


  /*set mouse hover properties to change to a random colour*/
  var chars = document.getElementsByClassName('charInName');
  var rand_col, curr_col;

  for (let i=0; i<chars.length; i++){
    chars[i].onmouseover = function () {
      
      chars[i].style.color = rand_col = colours[Math.floor(Math.random()*colours.length)];
    }


    /*
    chars[i].onmouseleave = function () {
      chars[i].style.color = 'white';
    }*/
  }

}

changeCharColour();