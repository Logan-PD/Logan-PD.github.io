

/*
  https://stackoverflow.com/questions/31468794/how-to-show-random-color-on-hover-in-css
  https://stackoverflow.com/questions/21632434/change-color-of-character-when-mouseover-javascript/21632555
  https://stackoverflow.com/questions/18466365/javascript-changing-background-color
*/
function changeCharColour () {

  var text, colourDivs, changed;
  var colours = ['#ffbe0b','#fb5607','#ff006e','#8338ec','#3a86ff','#aaaaaa'];

  colourDivs = document.getElementsByClassName("colour");
  
  /*apply function to all elements in class 'name'*/
  for (let j=0; j<colourDivs.length; j++) {

    text = colourDivs[j].innerHTML;

    /*wrap every char in a string into a class*/
    changed = "";
    for (let i=0; i<text.length; i++){
      changed += "<span class=charInName>" + text.charAt(i) + "</span>";
    }
    colourDivs[j].innerHTML=changed;

  }
  


  /*set mouse hover properties to change to a random colour*/
  var chars = document.getElementsByClassName('charInName');

  for (let i=0; i<chars.length; i++){
    chars[i].onmouseover = function () {
      chars[i].style.transition = '0s';
      chars[i].style.color = colours[Math.floor(Math.random()*colours.length)];
    }
    
    chars[i].onmouseleave = function () {
      chars[i].style.color = 'white';
      chars[i].style.transition = '10s';
    }
  }
}


$( function() {
  $( "#accordion" ).accordion({
    collapsible: true,
    active: false,
    animate: 500,
    heightStyle: "content"
});
} );

changeCharColour();

Splide.defaults = {
  padding: '5%',
  width: '80%',
  height: '80%',
  rewind: 'true',
}

document.addEventListener( 'DOMContentLoaded', function () {
  new Splide( '#posture-detailed', {} ).mount();
  new Splide( '#posture-concept', {} ).mount();
  new Splide( '#p1-concept', {} ).mount();
  new Splide( '#p1-detail', {} ).mount();
  new Splide( '#p1-final', {} ).mount();
  new Splide( '#touch-ideas', {} ).mount();
  new Splide( '#sense-ideas', {} ).mount();
  new Splide( '#touch-refine', {} ).mount();
  new Splide( '#sense-refine', {} ).mount();
} );

