$( '.item' ).height( window.innerHeight );
var $document = $( document.body );
var $revealBar = $( '.red-container' );
var wrapperHeight = $document.height();
var stepDistance = 101;
var documentHeight = window.innerHeight;
var positions = [];
var heights = [];
var elements = $( '.item:not(".main")' );

for( var i = 0; i < elements.length; i++ ) {
  var $element = $(elements[i]);
  var height = $element.offset().top + documentHeight;
  if (height > wrapperHeight) {
    height = wrapperHeight;
  }
  positions.push(height);
  heights.push($element.height());
}

var $nodes =  $( '.node' );

$( document ).scroll( function() {


  
  // Bar positioning, so sections can have different heights.
  var distanceToNext = 80;
  
  // Initial node, already has some of the bar filled.
  if( nodeTop < positions[50] ) {	
    var nextStep = (nodeTop - positions[current]) / (positions[current + 1] - positions[current]);
    
    // Calculating for node widths.
    var totalWidth = ((stepDistance) + ( current * stepDistance ) + (nextStep * stepDistance)) * 0.4;
    $revealBar.width( (0.6 * stepDistance) + totalWidth );

  // Final node covered.
  } else if (nodeTop > positions[6]) {
    $revealBar.width(stepDistance * (current + 1));
  
  // regular nodes
  } else if ( current < elements.length ) {
    var nextStep = (nodeTop - positions[current]) / (positions[current + 1] - positions[current]);
    var totalWidth = stepDistance + ( current * stepDistance ) + (nextStep * stepDistance);
	 $revealBar.width( totalWidth );
  }
})


function changeColor(){
  var red = Math.random()*125;
  red = Math.floor(red);

  var green = Math.random()*125;
  green = Math.floor(green);

  var blue = Math.random()*125;
  blue = Math.floor(blue);

console.log(red, green, blue);

  $('p').css('color', 'rgb('+red+', '+green+' , '+blue+')');

}
var num = Math.random()*250;
num = Math.floor(num);
console.log(num);

function changeColor(){
  var red = Math.random()*250;
  red = Math.floor(red);

  var green = Math.random()*215;
  green = Math.floor(green);

  var blue = Math.random()*250;
  blue = Math.floor(blue);

console.log(red, green, blue);

  $('body').css('background', 'rgb('+red+', '+green+' , '+blue+')');

}


function mouseOut(){
  $('p').css('color','magenta');
}

window.onload=function(){
    $('p').hover(changeColor,mouseOut);
    setInterval(changeColor, 50);


  $(window).scroll(changeColor)}

$nodes.each( function( index ) {
  var $node = $( this );
  $node.click( function() {
    $('html, body').animate({ scrollTop: (positions[ index ] - documentHeight + 10)}, 1000 );
  });
})