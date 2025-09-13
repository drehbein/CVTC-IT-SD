const duck = document.getElementById("duck");

var accFromTop = 0;
var accFromLeft = 0;

var velFromTop = 0;
var velFromLeft = 0;

var distFromTop = 40;
var distFromLeft = 45;

setInterval(moveDuck, 16);

function moveDuck() {
  accFromTop = accFromTop*0.99 + (Math.random()-0.5)*0.02;
  accFromLeft = accFromLeft*0.99 + (Math.random()-0.5)*0.02;

  velFromTop = velFromTop*0.95 + accFromTop + (distFromTop-45)*-0.002;
  velFromLeft = velFromLeft*0.95 + accFromLeft + (distFromLeft-45)*-0.002;

  distFromTop += velFromTop;
  distFromLeft += velFromLeft;

  duck.style.top = Math.max(Math.min(distFromTop, 90), 0) + "%";
  duck.style.left = Math.max(Math.min(distFromLeft, 90), 0) + "%";
}