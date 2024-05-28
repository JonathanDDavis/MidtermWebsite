//  js main file
//  html code for the FOOTER
var foot1 = '<footer>\
    <a href="index.html">Home</a><a href="about.html">About Us</a><a href="license.html">Licensing</a><br>\
   <p>\
      Ozarks Technical Community College 2021. Unless otherwise \
      indicated, all content on this web site is licensed under a \
      Creative Commons License.**\
   </p>\
</footer>';
//  When the user clicks anywhere outside of the modal, close it
window.onclick = function(event) {if (event.target == document.getElementById('resultsModal')) {
    document.getElementById('resultsModal').style.display = "none";}}
function loadFoot() {//loads footer
	document.getElementById("foot1").innerHTML = foot1;}
//function navButton(){let x = document.getElementById("x");} //for later?
