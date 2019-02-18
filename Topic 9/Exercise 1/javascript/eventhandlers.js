
window.addEventListener("mousemove", function(event) {
  followMouse(event);
});

function followMouse(e){
  var roundedSquare = document.getElementById("roundedsquare");
  var x = e.pageX;
  var y = e.pageY;
roundedSquare.style.left = x + "px";
roundedSquare.style.top =  y + "px";

}
