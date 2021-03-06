function topOfPage () {
  document.documentElement.scrollTop = 0;
}




$(document).ready(function() {
  $('.more-edu-cont').hide();
  $('#more-edu-butt').click(function(){
    $('.more-edu-cont').toggle('slow');
    var txt = $("#more-edu-butt").text() == 'less' ? 'more' : 'less';
    $("#more-edu-butt").text(txt);
  });
});




/*
https://codepen.io/daveredfern/pen/zBGBJV

$(window).scroll(function() {
  
  var $window = $(window),
      $body = $('body'),
      $panel = $('.scrl-sect');
  
  // Change 40% earlier than scroll position so colour is there when you arrive.
  var scroll = $window.scrollTop() + ($window.height() / 4);
 
  $panel.each(function () {
    var $this = $(this);
    
    // if position is within range of this panel.
    // So position of (position of top of div <= scroll position) && (position of bottom of div > scroll position).
    if ($this.position().top <= scroll && $this.position().top + $this.height() > scroll) {
          
      // Remove all classes on body with color-
      $body.removeClass(function (index, css) {
        return (css.match (/(^|\s)color-\S+/g) || []).join(' ');
      });
       
      // Add class of currently active div
      $body.addClass('color-' + $(this).data('color'));
    }
  });    
  
}).scroll();*/

/*
  https://stackoverflow.com/questions/31468794/how-to-show-random-color-on-hover-in-css
  https://stackoverflow.com/questions/21632434/change-color-of-character-when-mouseover-javascript/21632555
  https://stackoverflow.com/questions/18466365/javascript-changing-background-color
*/
function changeCharColour () {

  var text, names, changed;
  var colours = ['#ffbe0b','#fb5607','#ff006e','#8338ec','#3a86ff','#aaaaaa'];

  names = document.getElementsByClassName("name");
  
  /*apply function to all elements in class 'name'*/
  for (let j=0; j<names.length; j++) {

    text = names[j].innerHTML;

    /*wrap every char in a string into a class*/
    changed = "";
    for (let i=0; i<text.length; i++){
      changed += "<span class=charInName>" + text.charAt(i) + "</span>";
    }
    names[j].innerHTML=changed;

  }
  


  /*set mouse hover properties to change to a random colour*/
  var chars = document.getElementsByClassName('charInName');
  var rand_col;

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