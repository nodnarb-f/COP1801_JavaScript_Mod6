// This is the JavaScript for Module 06 Activity

function areaRoom() {
  var w = document.getElementById("width").value;
  var l = document.getElementById("length").value;
  var area = w * l;

  var width = parseInt(w);
  var length = parseInt(l);

  document.getElementById("room").innerHTML = area + " is the area of the room.";
  console.log(area);
}

function stride() {
  var inch1 = document.getElementById("inches").value;
  var inch2 = parseInt(inch1);
  var strides = (5280 / (inch2 / 12));

  document.getElementById("strideMile").innerHTML = "It will take " + strides + " steps to reach a mile.";
  console.log(strides);
}
