function hover() {
    document.getElementById("butt").style.backgroundColor = "blueviolet";
}
function out() {
    document.getElementById("butt").style.backgroundColor = "aquamarine";
}
function show() {
    document.getElementById("hideside").style.visibility ="visible";
}
function hide() {
    document.getElementById("hideside").style.visibility ="hidden";
}
var n = 0;
function hovered() {
    n = n +1;
    document.getElementById("img1").innerHTML = n;
}
function hideimg() {
    document.getElementById("imghide").style.visibility = "hidden";
}
function visibleimg() {
    document.getElementById("imghide").style.visibility = "visible";
}


function openoverlay() {
    var g = document.getElementById("windowbuttn");
    g.style.transform = scale (1);
}
function closeoverlay(){
    var g = document.getElementById("windowbuttn");
    g.style.transform = scale (0);
}
 
  

