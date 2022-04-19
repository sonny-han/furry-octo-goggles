function getRandomInt (min, max) {
    return Math.floor(Math.random() * (max - min + 1)) + min;
}

$.fn.randomOrder = function(animate) {
  this.each(function() {
    var image = $(this);
    
    // Viewport Dimensions
    var vpHeight = $(window).height();
    var vpWidth = $(window).width();
    
    // Image Position
    var xPos = getRandomInt(0, vpWidth - image.width());
    var yPos = getRandomInt(0, vpHeight - image.height());
    var zIndex = getRandomInt(0,13);
    
    // Animation Duration
    if(animate) var dur = 500;
    else var dur = 0;
    
    image.animate({left: xPos, top: yPos, 'z-index': zIndex}, dur);
  });
};

//Setup
$('img').randomOrder(false);
$('img').draggable({stack: "img"});

// Change after 10 Seconds
window.setInterval(function(){
  $('img').randomOrder(true);
}, 10000);

//const spacebar = Event.key;

//if (spacebar == "a" || spacebar == "a") {
//    alert ("You pressed the A key");
//    console.log("You pressed the A key!")
//}

//Hide all images
//document.getElementsByClassName('images')[0].style.display = 'none'

//Click Event
document.body.addEventListener("click", function (evt) {
  console.dir(this);
  console.log(evt.target);
  alert("body clicked");
  function show() {
    document.getElementById('image').style.display = "block";

  }
});
//var img = document.getElementById("img").src;